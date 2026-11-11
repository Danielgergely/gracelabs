// Runs in front of every request (see wrangler.jsonc → run_worker_first); everything except these is served from the static build:
//   www.gracelabs.dev  → 301 to gracelabs.dev
//   POST /api/contact  → email via Resend + a content-free Telegram ping
//   GET  /whatsapp     → redirect to wa.me, so the number never appears in the page
interface Env {
  ASSETS: Fetcher;
  CONTACT_LIMIT: RateLimit;
  MAIL_TO: string;
  MAIL_FROM: string;
  RESEND_API_KEY?: string;
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
  WHATSAPP_NUMBER?: string;
  DRY_RUN?: string; // "1" in .dev.vars: log instead of sending
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
const clean = (v: unknown, max: number) => String(v ?? '').replace(/\r/g, '').trim().slice(0, max);
const oneLine = (v: unknown, max: number) => clean(v, max).replace(/\s+/g, ' ');

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    const { pathname } = url;
    // plain http only on the real site (wrangler dev also reports http, without this header)
    const plainHttp = url.protocol === 'http:' && req.headers.get('x-forwarded-proto') === 'http';
    if (url.hostname === 'www.gracelabs.dev' || plainHttp) {
      url.hostname = 'gracelabs.dev';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    if (pathname === '/whatsapp' || pathname === '/whatsapp/') {
      const number = (env.WHATSAPP_NUMBER ?? '').replace(/\D/g, ''); // wa.me wants digits only, no + or spaces
      return number
        ? Response.redirect(`https://wa.me/${number}`, 302)
        : new Response('WhatsApp is not configured yet.', { status: 503 });
    }
    if (pathname === '/api/contact') return contact(req, env, ctx);
    return env.ASSETS.fetch(req);
  },
} satisfies ExportedHandler<Env>;

async function contact(req: Request, env: Env, ctx: ExecutionContext) {
  if (req.method !== 'POST') return new Response(JSON.stringify({ ok: false }), { status: 405, headers: { 'Content-Type': 'application/json', Allow: 'POST' } });
  // only the site's own form may post here: same origin, JSON, small
  const origin = req.headers.get('origin');
  if (origin && origin !== new URL(req.url).origin) return json({ ok: false, error: 'origin' }, 403);
  if (!(req.headers.get('content-type') ?? '').includes('application/json')) return json({ ok: false, error: 'bad' }, 415);
  if (Number(req.headers.get('content-length') ?? 0) > 20_000) return json({ ok: false, error: 'bad' }, 413);
  const ip = req.headers.get('cf-connecting-ip') ?? 'local';
  if (!(await env.CONTACT_LIMIT.limit({ key: ip })).success) return json({ ok: false, error: 'rate' }, 429);

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return json({ ok: false, error: 'bad' }, 400); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return json({ ok: false, error: 'bad' }, 400);
  if (clean(body.hp, 200)) return json({ ok: true }); // honeypot filled: pretend it worked

  const name = oneLine(body.name, 100);
  const contactInfo = oneLine(body.contact, 200);
  const message = clean(body.message, 5000);
  const lang = ['en', 'de', 'hu'].includes(String(body.lang)) ? String(body.lang) : 'en';
  if (!contactInfo || !message) return json({ ok: false, error: 'missing' }, 400);

  const email = {
    from: env.MAIL_FROM,
    to: [env.MAIL_TO],
    reply_to: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo) ? contactInfo : undefined,
    subject: `New request from ${name || 'someone'} · gracelabs.dev`,
    text: `Name: ${name || '-'}\nContact: ${contactInfo}\nLanguage: ${lang}\n\n${message}\n`,
  };

  if (env.DRY_RUN === '1') {
    console.log('[dry run] would send', email);
  } else {
    if (!env.RESEND_API_KEY) return json({ ok: false, error: 'not-configured' }, 503);
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(email),
    });
    if (!res.ok) {
      console.error('resend failed', res.status, (await res.text()).slice(0, 300));
      return json({ ok: false, error: 'send' }, 502);
    }
  }

  // deliberately without name or message: the privacy notice promises a content-free ping
  if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID && env.DRY_RUN !== '1') {
    ctx.waitUntil(fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text: '📬 New message on gracelabs.dev. Check your inbox.' }),
    }));
  }
  return json({ ok: true });
}
