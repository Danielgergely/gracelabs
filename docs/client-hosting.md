# How Grace Labs hosts client websites (model C)

Decided 11 Nov 2026. Goal: Daniel manages the sites, clients stay independent, and no hosting money flows through Grace Labs.

## The five rules

1. **The domain always belongs to the client.** Registered in the client's name, paid by the client directly to their registrar (e.g. Rackhost). Grace Labs only manages the DNS, by pointing the domain's nameservers to Cloudflare.
2. **Hosting runs in Daniel's Cloudflare account, one project per client.** Separate projects, one dashboard, free for static sites.
3. **Code lives in one GitHub repository per client** in the `gracelabs-dev` organization. If a client wants to take over, the repository is transferred to them.
4. **Paid extras are contracted between the client and the provider** (email inboxes, booking tools, a CMS plan…). Grace Labs sets them up, the client gets the bill.
5. **Every repository has a handover checklist in its README**: client creates a Cloudflare account, deploys from the repo, the domain moves. About 30 minutes, no lock-in.

## Money

- Static client sites cost **CHF 0** to host. Never charge for hosting that costs nothing.
- Grace Labs earns from the work: building the site (pay what fits) and an optional care package for changes and updates.
- Daniel's own dynamic projects (e.g. the 66 game) need **Workers Paid, USD 5/month**, which covers all of them together.

## New client site: checklist

- [ ] Repository from the client-site template (see `workman` as the reference): `public/` = the site, `wrangler.jsonc`, `README.md` with handover steps, `originals/` git-ignored.
- [ ] Commit identity in the repo: `hello@gracelabs.dev`.
- [ ] Preview at `<client>.gracelabs.dev` (custom domain route, `workers_dev: false`). No workers.dev subdomain is registered on the account.
- [ ] Client's privacy notice names Cloudflare as host; no cookies or analytics unless agreed and documented.
- [ ] Imprint and privacy notice filled in with the client's real details before the real domain goes live.
- [ ] Real domain: client adds Daniel as DNS manager (or moves nameservers to Cloudflare), then add the domain under `routes` and deploy.

## Why not one big server

A shared server makes Grace Labs a hosting provider: updates, security, backups, outages that take every client down at once, processor contracts, and chasing monthly payments. Cloudflare serves static sites faster and for free. A server only makes sense for software that needs one (WordPress/PHP), and small sites should avoid that.

## Status

| Client | Repo | Preview | Domain | Notes |
|---|---|---|---|---|
| Workman | `~/git/workman` | workman.gracelabs.dev | not known yet | imprint placeholders still open |
| Soar in Spirit (pottery) | – | – | siss.hu at Rackhost | small Rackforest server can be cancelled after moving; check the domain is in the potter's name |
