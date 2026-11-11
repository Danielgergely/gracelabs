import { SITE, LANGS } from '../data/site';

const PAGES = ['', 'privacy/', 'imprint/'];

export function GET() {
  const urls = PAGES.flatMap(p => LANGS.map(l => {
    const alts = LANGS.map(a => `<xhtml:link rel="alternate" hreflang="${a}" href="${SITE.url}/${a}/${p}"/>`).join('');
    return `<url><loc>${SITE.url}/${l}/${p}</loc>${alts}</url>`;
  }));
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
