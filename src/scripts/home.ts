// Light beam, light-up, work search, story cards and the contact form.
type Pt = { x: number; y: number };
type Seg = { a: Pt; b: Pt; c: string; w: number };
type WorkItem = {
  title: string; cat: string; img?: string; bg?: string; link?: string; soon?: boolean; tags?: string;
  kind: Record<string, string>; story: { forWho: string; need: string; did: string }; gallery?: string[];
};
type Data = { lang: string; t: Record<string, string>; cats: Record<string, string>; work: WorkItem[] };

const WHITE = '255,240,220';
const HEAD_AT = 0.85; // beam front sits at 85% of the viewport height
const hex = (h: string) => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)).join(',');
const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export function initHome() {
  const data: Data = JSON.parse(document.getElementById('gl-data')!.textContent!);
  const q = <T extends Element = HTMLElement>(s: string) => document.querySelector<T>(s)!;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // remember an explicit language choice for the next visit to "/"
  document.querySelectorAll<HTMLAnchorElement>('[data-lang]').forEach(a =>
    a.addEventListener('click', () => { try { localStorage.setItem('gl-lang', a.dataset.lang!); } catch {} }));

  /* ---------- beam ---------- */
  const cv = q<HTMLCanvasElement>('.d-beam');
  const g = cv.getContext('2d')!;
  const litEls = [...document.querySelectorAll<HTMLElement>('[data-lit],[data-lit-only]')];
  let dpr = 1, segs: Seg[] = [], litAt: number[] = [], head = 0, lastW = 0;
  // layout-viewport height: does not jump when the mobile browser bar shows or hides
  const vh = () => document.documentElement.clientHeight;
  const pt = (el: Element, fx = 0.5, fy = 0.5): Pt => {
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width * fx, y: r.top + scrollY + r.height * fy };
  };

  function build() {
    dpr = Math.min(devicePixelRatio, 2);
    lastW = innerWidth;
    cv.width = innerWidth * dpr;
    cv.height = Math.max(innerHeight, vh()) * dpr;
    const mobile = innerWidth <= 820;
    const src = pt(q('.d-source')), prism = q('.d-prism');
    const pIn = pt(prism, 0.5, 0.1), pOut = pt(prism, 0.5, 0.75);
    const lens = pt(q('.d-lens'));
    const gx = innerWidth * (mobile ? 0.06 : 0.09);
    const turnY = pt(q('#values'), 0, 0).y + innerHeight * 0.06;
    const downY = pt(q('#about'), 0, 1).y;
    const seal = pt(q('.d-env .seal'));
    segs = [{ a: src, b: pIn, c: WHITE, w: 1 }, { a: pIn, b: pOut, c: WHITE, w: 1.3 }];
    const mediaBottom = pt(q('.d-card.media'), 0.5, 1).y;
    document.querySelectorAll<HTMLElement>('.d-card').forEach((el, i) => {
      const c = hex(el.dataset.color!), w = +el.dataset.w!;
      const off = mobile ? (i - 1) * 16 : 0;
      const top = pt(el, 0.5, 0), bot = pt(el, 0.5, 1);
      top.x += off; bot.x += off;
      segs.push({ a: pOut, b: top, c, w }, { a: top, b: bot, c, w: w * 0.6 });
      // core beams drop past the photo & video card before meeting in the lens
      if (!mobile && el.classList.contains('core')) {
        const drop = { x: bot.x, y: mediaBottom + 30 };
        segs.push({ a: bot, b: drop, c, w }, { a: drop, b: lens, c, w });
      } else segs.push({ a: bot, b: lens, c, w });
    });
    const turn = { x: gx, y: turnY }, down = { x: gx, y: downY };
    segs.push({ a: lens, b: turn, c: WHITE, w: 1 }, { a: turn, b: down, c: WHITE, w: 1 }, { a: down, b: seal, c: WHITE, w: 1.1 });
    litAt = litEls.map(el => {
      const anchor = el.dataset.anchor ? el.querySelector(el.dataset.anchor)! : el;
      return pt(anchor, 0.5, 0).y + (+(el.dataset.off ?? 0) || 0);
    });
  }

  const motes = Array.from({ length: 200 }, () => ({ s: Math.random(), k: Math.random(), o: (Math.random() - 0.5) * 18, sp: 0.0002 + Math.random() * 0.0006, ph: Math.random() * 7 }));

  function glowLine(a: Pt, b: Pt, c: string, w: number, flick: number) {
    for (const [lw, al] of [[34, 0.035], [16, 0.08], [7, 0.22], [2.2, 0.95]]) {
      g.strokeStyle = `rgba(${c},${al * flick})`;
      g.lineWidth = lw * w;
      g.beginPath(); g.moveTo(a.x, a.y); g.lineTo(b.x, b.y); g.stroke();
    }
  }
  function flare(p: Pt, c: string, r: number) {
    const gr = g.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
    gr.addColorStop(0, 'rgba(255,255,255,.95)'); gr.addColorStop(0.15, `rgba(${c},.55)`); gr.addColorStop(1, `rgba(${c},0)`);
    g.fillStyle = gr; g.beginPath(); g.arc(p.x, p.y, r, 0, 7); g.fill();
  }

  function frame(time: number) {
    // the light only moves forward: scrolling back up leaves the lit path in place
    const target = scrollY + vh() * HEAD_AT;
    if (target > head) head += reduced ? target - head : (target - head) * 0.1;
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.clearRect(0, 0, cv.width, cv.height);
    g.setTransform(dpr, 0, 0, dpr, 0, -scrollY * dpr);
    g.globalCompositeOperation = 'lighter';
    g.lineCap = 'round';
    const flick = 0.93 + 0.07 * Math.sin(time * 0.013) * Math.sin(time * 0.0071);
    const top = scrollY - 100, bottom = scrollY + innerHeight + 100;
    for (const s of segs) {
      if (head <= s.a.y) continue;
      const k = Math.min(1, (head - s.a.y) / Math.max(1, s.b.y - s.a.y));
      const e = { x: s.a.x + (s.b.x - s.a.x) * k, y: s.a.y + (s.b.y - s.a.y) * k };
      if (Math.max(s.a.y, e.y) < top || s.a.y > bottom) continue;
      glowLine(s.a, e, s.c, s.w, flick);
      if (k < 1) flare(e, s.c, 60 * Math.max(0.8, s.w));
    }
    if (!reduced) for (const m of motes) {
      const s = segs[Math.floor(m.k * segs.length)];
      if (!s || head <= s.a.y) continue;
      m.s = (m.s + m.sp) % 1;
      const k = Math.min(m.s, (head - s.a.y) / Math.max(1, s.b.y - s.a.y));
      const x = s.a.x + (s.b.x - s.a.x) * k + m.o + Math.sin(time * 0.001 + m.ph) * 4;
      const y = s.a.y + (s.b.y - s.a.y) * k;
      if (y < top || y > bottom) continue;
      g.fillStyle = `rgba(${s.c},${0.25 + 0.35 * Math.abs(Math.sin(time * 0.002 + m.ph))})`;
      g.beginPath(); g.arc(x, y, 1.1, 0, 7); g.fill();
    }
    litEls.forEach((el, i) => el.classList.toggle('lit', head > litAt[i]));
    requestAnimationFrame(frame);
  }

  /* ---------- work: search ---------- */
  const searchEl = q<HTMLInputElement>('.d-search');
  const filterWork = () => {
    const words = searchEl.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let total = 0;
    document.querySelectorAll<HTMLElement>('.d-row').forEach(row => {
      let shown = 0;
      row.querySelectorAll<HTMLButtonElement>('.d-pol').forEach(b => {
        const w = data.work[+b.dataset.i!];
        const hay = [w.title, w.kind[data.lang], w.tags ?? '', data.cats[w.cat]].join(' ').toLowerCase();
        const ok = words.every(x => hay.includes(x));
        b.hidden = !ok;
        shown += +ok;
      });
      row.hidden = !shown;
      total += shown;
      row.querySelector('.n')!.textContent = String(shown);
    });
    q('.d-none').hidden = total > 0;
  };
  searchEl.addEventListener('input', () => { filterWork(); build(); });
  filterWork();

  /* ---------- work: story cards ---------- */
  const dlg = q<HTMLDialogElement>('.d-story');
  const bgOf = (w: WorkItem) => (w.img ? `url(${w.img})` : w.bg ?? '');
  const openStory = (i: number, x: number, y: number, c: string) => {
    const w = data.work[i], t = data.t, st = w.story;
    const row = (k: string, v: string) => (v ? `<div><dt>${t[k]}</dt><dd>${esc(v)}</dd></div>` : '');
    dlg.style.setProperty('--c', c);
    dlg.querySelector('.body')!.innerHTML = `<div class="ph" style="--bg:${bgOf(w)}"></div><div class="in">
      <div class="k">${esc(w.kind[data.lang])}${w.soon ? ' · ' + t.soon : ''}</div><h3>${esc(w.title)}</h3>
      <dl>${row('stFor', st.forWho)}${row('stNeed', st.need)}${row('stDid', st.did)}</dl>
      ${w.gallery?.length ? `<div class="gal">${w.gallery.map(src => `<img src="${src}" loading="lazy" alt="">`).join('')}</div>` : ''}
      ${w.link ? `<a class="btn primary" href="${w.link}" target="_blank" rel="noopener">${t.stVisit} ↗</a>` : ''}</div>`;
    dlg.showModal();
    if (reduced) return;
    // camera-iris opening from the tapped card
    const r = dlg.getBoundingClientRect();
    dlg.style.setProperty('--ox', `${x - r.left}px`);
    dlg.style.setProperty('--oy', `${y - r.top}px`);
    dlg.classList.remove('iris'); void dlg.offsetWidth; dlg.classList.add('iris');
    const ring = document.createElement('div');
    ring.className = 'd-ring';
    ring.style.cssText = `left:${x}px;top:${y}px;--c:${c}`;
    document.body.append(ring);
    setTimeout(() => ring.remove(), 800);
  };
  document.querySelectorAll<HTMLButtonElement>('.d-pol').forEach(b => b.addEventListener('click', () => {
    const r = b.getBoundingClientRect();
    openStory(+b.dataset.i!, r.left + r.width / 2, r.top + r.height * 0.35, getComputedStyle(b.closest('.d-row')!).getPropertyValue('--c').trim());
  }));
  dlg.querySelector<HTMLButtonElement>('.x')!.addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

  /* ---------- contact form ---------- */
  const form = q<HTMLFormElement>('.d-letter');
  const btn = form.querySelector<HTMLButtonElement>('button[type=submit]')!;
  const err = form.querySelector<HTMLElement>('.err')!;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const fd = new FormData(form);
    const body = { name: fd.get('name'), contact: fd.get('contact'), message: fd.get('message'), website: fd.get('website'), lang: data.lang };
    if (!form.reportValidity()) return;
    btn.disabled = true; err.hidden = true;
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error(String(res.status));
      btn.textContent = data.t.lThanks;
      form.reset();
    } catch {
      btn.disabled = false;
      err.hidden = false;
      err.innerHTML = `${data.t.lError} <a href="mailto:hello@gracelabs.dev">hello@gracelabs.dev</a>`;
    }
  });

  /* ---------- start ---------- */
  build();
  head = scrollY + vh() * HEAD_AT;
  addEventListener('resize', () => { if (innerWidth !== lastW || innerHeight * dpr > cv.height) build(); });
  document.fonts?.ready.then(build);
  setTimeout(build, 600);
  requestAnimationFrame(frame);
}
