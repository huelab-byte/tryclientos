# Self-Hosted Client Portals &amp; Agency Resources [![CC0](https://img.shields.io/badge/license-CC0-blue.svg)](LICENSE)

> **Your client portal. Your server. Your data.**

A static site and a curated list about **client portal software for agencies**: self-hosted and
white-label portals, [Wayfront (Service Provider Pro) alternatives](https://huelab-byte.github.io/tryclientos/wayfront-spp-alternative/),
an [install guide](https://huelab-byte.github.io/tryclientos/install/), and
[four free agency templates](https://huelab-byte.github.io/tryclientos/templates/).

**→ [huelab-byte.github.io/tryclientos](https://huelab-byte.github.io/tryclientos/)**

---

## Disclosure

**This repository is maintained by the ClientOS team**, and ClientOS is our own product. We are
not a neutral party and the site does not pretend to be one. What it does instead is show its
working:

- Every **ClientOS** claim comes from [getclientos.com](https://getclientos.com) or its
  documentation. The full audit, with the page each fact was read from, is in
  **[AUDIT.md](AUDIT.md)** — 28 pages read on 29 October 2026.
- Every **competitor** claim comes from that competitor's own public pages, carries the date it
  was checked, and links to the source. Nothing comes from a review site or a listicle.
- Where something could not be verified, it is **not claimed** and is listed in
  **[UNVERIFIED.md](UNVERIFIED.md)** instead. That includes Agency Handy, whose site refused
  connections from our network, and every gap in ClientOS's own published material — no renewal
  price, no refund policy, no customer count, no rating.
- There is **no `aggregateRating` or `review` in any structured data on this site**, because
  getclientos.com publishes no rating. `scripts/check-links.mjs` fails the build if one ever
  appears.
- Every comparison page names the agencies who should **stay where they are**.
- Nothing here is a paid placement, and inclusion in the list is not an endorsement.

Found something wrong or out of date? [Open an issue](https://github.com/huelab-byte/tryclientos/issues) —
corrections are the point.

## What is in here

| Path | What it is |
|---|---|
| `src/pages/` | The site's routes — one `.astro` file per page, plus three dynamic routes |
| `src/content/` | **Every fact the site states, as data.** `site.ts` (ClientOS), `alternatives.ts` (comparisons), `faq.ts`, `list.ts` (the curated list), `templates.ts` |
| `src/components/`, `src/layouts/` | Header, footer, CTA, FAQ, logo, the base layout with all SEO head tags |
| `src/lib/schema.ts` | JSON-LD builders — `SoftwareApplication`, `FAQPage`, `BreadcrumbList`, `ItemList`, `WebPage` |
| `templates/` | The four free agency templates as markdown, **generated** from `src/content/templates.ts` |
| `public/og/` | One branded 1200×630 social card per page, **generated** by `pnpm og` |
| `public/fonts/` | General Sans, the ClientOS display face |
| `scripts/` | The three build scripts (below) |
| `AUDIT.md` | The full source audit of getclientos.com and the two reachable competitors |
| `UNVERIFIED.md` | What could not be checked, and is therefore not claimed |

Pages are generated from the files in `src/content/`, so a number appears in exactly one place.
Changing the ClientOS Standard price, for example, is one edit in `src/content/site.ts` and it
updates the pricing page, the comparison tables and the JSON-LD `offers` together.

## Setup

Requires **Node 24+** (the build scripts import TypeScript data modules directly) and
**pnpm 11+**.

```bash
pnpm install     # install dependencies
pnpm dev         # http://localhost:4321/tryclientos/
pnpm build       # static site into dist/
pnpm preview     # serve dist/ locally
```

Two more, run as needed rather than on every build:

```bash
pnpm check       # astro check — TypeScript across .astro and .ts
pnpm og          # re-render the social cards into public/og/
```

### The scripts

- **`scripts/build-downloads.mjs`** — runs automatically as `prebuild`. Writes the four
  templates from `src/content/templates.ts` into both `templates/` (browsable on GitHub) and
  `public/downloads/` (what the site serves), so the rendered page, the repo file and the
  download can never disagree.
- **`scripts/generate-og.mjs`** — renders one 1200×630 PNG per page: SVG laid out in code, then
  rasterised with [resvg](https://github.com/yisibl/resvg-js), using the real ClientOS mark
  from `getclientos.com/icon.svg`, the brand colours `#fd4105` and `#12141c`, and General Sans
  passed in as font files. The PNGs are committed, so a normal build and the CI workflow never
  need the native renderer. Run it after adding a page or changing a headline.
- **`scripts/check-links.mjs`** — post-build check over `dist/`: every internal link resolves,
  every page has a canonical, a description, an `<h1>`, a title under 70 characters and an
  `og:image` that exists, and no page contains a rating claim.

```bash
pnpm build && node scripts/check-links.mjs
```

## Deploy

GitHub Actions publishes to GitHub Pages on every push to `main`
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)), using the official
`withastro/action` and `actions/deploy-pages`.

**One-time setup:** in the repository, go to **Settings → Pages** and set **Source** to
**GitHub Actions**. Without that, the workflow builds and then fails at the deploy step.

The site is configured for `https://huelab-byte.github.io/tryclientos/` —
`site: 'https://huelab-byte.github.io'` plus `base: '/tryclientos'` in
[`astro.config.mjs`](astro.config.mjs). If you fork it, change both, and the `/tryclientos`
paths in the three `@font-face` rules at the top of `src/styles/global.css`, which point at
`public/` and so are not rewritten by the bundler.

## The list

The curated list of client portal software lives in `src/content/list.ts` and is rendered at
[/client-portal-software/](https://huelab-byte.github.io/tryclientos/client-portal-software/):
self-hosted portals, hosted (SaaS) white-label portals, and the onboarding, proposal, project
management, invoicing, scheduling and reporting tools around them.

To add a tool, see [CONTRIBUTING.md](CONTRIBUTING.md). In short: one pull request per addition,
in the right section, one neutral sentence with no superlatives, live and publicly available,
and **disclose any affiliation** — the same standard the ClientOS entry is held to.

## Free templates

Four vendor-neutral templates, no sign-up and no email required. They work with any client
portal, or with none.

- [Client onboarding checklist](https://huelab-byte.github.io/tryclientos/templates/client-onboarding-checklist/) · [`.md`](templates/client-onboarding-checklist.md)
- [Project kickoff questionnaire](https://huelab-byte.github.io/tryclientos/templates/project-kickoff-questionnaire/) · [`.md`](templates/project-kickoff-questionnaire.md)
- [Agency SOP: client communication](https://huelab-byte.github.io/tryclientos/templates/agency-sop-client-communication/) · [`.md`](templates/sop-client-communication.md)
- [Monthly client report outline](https://huelab-byte.github.io/tryclientos/templates/monthly-client-report/) · [`.md`](templates/monthly-client-report.md)

Edit them in `src/content/templates.ts`, not in `templates/` — those files are generated.

## About ClientOS

ClientOS is a self-hosted, white-label client portal for service agencies: sell, get paid,
deliver and invoice on your own server. One-time license.

It runs on a Linux VPS you control, on one domain of your own, with every client, order,
message, invoice and file in your own PostgreSQL database. It is **self-hosted but not open
source** — it ships as SHA-256-verified Docker images with a one-command installer, and the
source code is not provided.

- [Instant demo](https://getclientos.com/demo?utm_source=github&utm_medium=referral&utm_campaign=clientos_launch&utm_content=readme) — a live ClientOS with sample data, read-only, 3 days, no card
- [Documentation](https://getclientos.com/docs?utm_source=github&utm_medium=referral&utm_campaign=clientos_launch&utm_content=readme)
- [getclientos.com](https://getclientos.com) — made by [Vibemonk](https://vibemonk.com)

## Licence

Content in this repository — the list, the templates, the site copy — is released under
[CC0 1.0](LICENSE). To the extent possible under law, the contributors have waived all
copyright. Use it, change it, republish it.

Two things are **not** covered by that waiver:

- **The ClientOS name and logo**, which belong to Vibemonk. `public/icon.svg` and the mark in
  `src/components/Logo.astro` are copied path for path from `getclientos.com/icon.svg`.
- **General Sans** in `public/fonts/` and `scripts/fonts/`, from
  [Fontshare](https://www.fontshare.com/fonts/general-sans) — free for commercial use under
  their own licence, not CC0. It is the display face getclientos.com itself uses.

Competitor names — Wayfront, Service Provider Pro, Zendo, Agency Handy and every tool in the
list — are trademarks of their respective owners. This repository is not affiliated with or
endorsed by any of them.
