# Grace Labs website (gracelabs.dev)

Personal business site of Daniel Gergely: IT support, websites/apps, AI advice, plus photo and video. Pay-what-fits model. Christian values ("Soli Deo Gloria") in the About section, not pushed elsewhere.

@AGENTS.md

## Stack and commands

- Astro 7 static site + one Cloudflare Worker (`worker/index.ts`) with static assets. Node 26 (`.nvmrc`; run `source ~/.nvm/nvm.sh && nvm use` first).
- `npm run preview` builds and runs the real Cloudflare setup on :8787 (needs `.dev.vars` with `DRY_RUN=1`, so the form only logs).
- `npm run check` type-checks site and worker. `npm run deploy` builds and deploys to production (gracelabs.dev + www). Deploying is going live: ask first.
- Worker routes: `/api/contact` (Resend email from `form@mail.gracelabs.dev` to hello@, plus a content-free Telegram ping), `/whatsapp` (redirect, number only in a secret), `www` → apex. Secrets: RESEND_API_KEY, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, WHATSAPP_NUMBER. Never print or commit them.

## Content

- All texts in three languages in `src/data/i18n.json` (en/de/hu). Every user-facing change goes into all three.
- German: Swiss spelling (no ß, «» quotes, "innert"), informal "du". Hungarian: informal "te". English is the default language.
- Projects: `src/data/work.json` (categories work / others / photo / fun). Images in `public/img/`, web-sized; originals stay in git-ignored `src/img/`.
- Legal texts: `src/data/legal.json` with `{address}` placeholder filled from `src/data/site.ts`.

## Rules

- No cookies, no analytics, no external requests from the page (fonts are self-hosted). Adding any third-party service means updating the privacy notice in all three languages.
- Never use Compassion branding or photos of sponsored children. MyCompassion is described as team work at the employer.
- Commits as `hello@gracelabs.dev` (local git config). Short commit messages. Commit, push and deploy only when Daniel says so.
- Readability first: text must stay readable before and after the light-beam effects; check phone width (390px) for every visual change.

## Design

- Light-beam concept: a beam travels down the page (canvas, `src/scripts/home.ts`), splits through a prism into the service cards, lights content as it reaches it (`[data-lit]`, `[data-lit-only]`). The beam front sits at 85% of the viewport and only moves forward.
- `prototype/` is the throwaway design prototype; `prototype/archive/oneshot/` is the 3D "One Shot" idea kept for a future "Take the tour" of the projects.

## Client hosting

Client websites follow model C, see `docs/client-hosting.md`. Reference client repo: `~/git/workman`.
