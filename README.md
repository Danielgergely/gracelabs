# Grace Labs

Website of [gracelabs.dev](https://gracelabs.dev): IT support, websites, apps and AI advice, plus photo and video, by Daniel Gergely.

- **Astro** static site in three languages: `/en/`, `/de/`, `/hu/`. `/` picks the visitor's language.
- **Cloudflare Workers** serves the site and runs two small routes in `worker/index.ts`:
  `POST /api/contact` (email via Resend + content-free Telegram ping) and `GET /whatsapp` (redirect, so the number never appears in the page).
- No cookies, no analytics, fonts are self-hosted.

## Develop

Needs Node 26 (`nvm use`).

| Command | What it does |
|---|---|
| `npm install` | install dependencies |
| `npm run dev` | Astro dev server (no worker routes) |
| `npm run preview` | build + run the real Cloudflare setup locally on :8787 |
| `npm run check` | type-check site and worker |
| `npm run deploy` | build + deploy to Cloudflare |
| `npm run prototype` | the original design prototype on :4321 |

For `npm run preview`, create `.dev.vars` with `DRY_RUN=1`: the form then logs instead of sending.

## Where things live

| Change… | Edit |
|---|---|
| Texts (all languages) | `src/data/i18n.json` |
| Projects in "Work" | `src/data/work.json` (images in `public/img/`) |
| Privacy notice / imprint | `src/data/legal.json` |
| Name, address, links | `src/data/site.ts` |
| Styles | `src/styles/global.css` |
| Light beam, search, story cards, form | `src/scripts/home.ts` |

## Secrets (Cloudflare, never in git)

```
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put TELEGRAM_BOT_TOKEN
npx wrangler secret put TELEGRAM_CHAT_ID
npx wrangler secret put WHATSAPP_NUMBER   # international format, no +
```

`prototype/` holds the throwaway design prototype, including the archived 3D "One Shot" idea for a future project tour (see `prototype/NOTES.md`). It is not part of the build.
