import i18n from './i18n.json';
import legal from './legal.json';
import work from './work.json';
import services from './services.json';

export const SITE = {
  brand: 'Grace Labs',
  by: 'by Daniel Gergely',
  url: 'https://gracelabs.dev',
  email: 'hello@gracelabs.dev',
  address: '[Street No.], [ZIP City]', // TODO: home address for imprint + privacy notice
  linkedin: 'https://www.linkedin.com/in/danielg98/',
  github: 'https://github.com/Danielgergely',
};

export const LANGS = ['en', 'de', 'hu'] as const;
export type Lang = (typeof LANGS)[number];

export const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Grace Labs · Your tech person',
    description: 'IT support, websites, apps and AI advice, plus photo and video. Agency quality at a price that fits, by Daniel Gergely in Switzerland.',
  },
  de: {
    title: 'Grace Labs · Dein Tech-Mensch',
    description: 'IT-Support, Websites, Apps und KI-Beratung, dazu Foto und Video. Agenturqualität zu einem Preis, der passt. Von Daniel Gergely, Schweiz.',
  },
  hu: {
    title: 'Grace Labs · A te informatikusod',
    description: 'IT-támogatás, weboldalak, appok és MI-tanácsadás, plusz fotó és videó. Ügynökségi minőség, a pénztárcádhoz igazítva. Gergely Dániel, Svájc.',
  },
};

export type Strings = (typeof i18n)['en'];
export const t = (lang: Lang): Strings => i18n[lang] as Strings;
export const legalHtml = (lang: Lang, page: 'privacy' | 'imprint') =>
  (legal as Record<Lang, Record<string, string>>)[lang][page].replaceAll('{address}', SITE.address);

export const WORK = work;
export const SERVICES = services;
export const CAT_COLORS: Record<string, string> = { work: '#ffd06b', others: '#5ad1ff', photo: '#ff6fae', fun: '#b69cff' };
export const hexToRgb = (h: string) => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)).join(',');
