# Audit: getclientos.com

**Audited:** 29 October 2026. Every fact below was read off a ClientOS-owned page on that
date, and each line names the page it came from. Competitor facts are in their own section
and come only from each competitor's own public pages.

Short source keys used in this file:

| Key | Page |
|---|---|
| **[H]** | <https://getclientos.com/> (homepage — includes the pricing, security, why-self-hosted and FAQ sections) |
| **[F]** | <https://getclientos.com/features> |
| **[CS]** | <https://getclientos.com/case-studies/dotmirror> |
| **[DEM]** | <https://getclientos.com/demo> |
| **[D-…]** | <https://getclientos.com/docs/…> (the doc page named in the key) |

Crawl basis: `https://getclientos.com/sitemap.xml` lists **28 URLs** — the homepage,
`/features`, `/case-studies/dotmirror`, `/demo`, `/docs` and 23 `/docs/*` pages. All 28 were
fetched and read. `/pricing`, `/security`, `/faq`, `/case-studies`, `/about` and `/blog`
return **404**: pricing, security, the comparison table and the FAQ are all sections of the
homepage, reached by the `#pricing`, `#security` and similar anchors in its nav.
`robots.txt` allows everything except `/api/`.

---

## 1. Identity and positioning

| Fact | Source |
|---|---|
| Page title: "ClientOS · The self-hosted client portal your agency owns" | [H] `<title>` |
| Meta description: "ClientOS is a self-hosted client portal and agency admin. Sell services, take payments, run orders, invoice and support clients on your own server, under your own brand, with your clients' data never leaving it." | [H] `<meta name=description>` |
| H1: "Your client portal. Your server. Your data." with eyebrow "Self-hosted · The client portal for agencies" | [H] |
| Sub-headline: "Sell services, take payment, deliver work, invoice and support clients from one portal under your brand, installed on a server you control with one command. Your clients' data stays with you." | [H] |
| Footer / [F] strapline: "The self-hosted client portal for productized service agencies." | [H], [F] |
| Closing line in the footer: "Self-hosted. Your server, your data, your brand." | [H] |
| Made by **Vibemonk**; "© 2026 ClientOS. A Vibemonk product."; license keys live in a vibemonk.com account under Licenses | [H], [D-installation] |
| JSON-LD on the homepage: `SoftwareApplication`, `applicationCategory: BusinessApplication`, `operatingSystem: "Linux (Docker)"`, publisher `Organization` → Vibemonk (vibemonk.com), three `Offer` nodes (490 / 990 / 1790 USD) | [H] JSON-LD |
| Who it's for: "agencies and freelancers who sell services as products: fixed packages, clear deliverables, a delivery time and a price. Think SEO packages, design subscriptions, content retainers, link building, development sprints" | [D-docs] |
| FAQ answer: "Any team that sells defined services: design, development, marketing, SEO, content, video or consulting, one-off or on retainer." | [H] |
| One installation serves one agency; unlimited clients inside it. A client is a person belonging to one or more companies; each company can have its own team and roles. | [D-docs] |

**Homepage phrases safe to quote verbatim:** "Your client portal. Your server. Your data." ·
"Runs on your own server / Client data never leaves it / One-time license, no per-seat fees" ·
"Pay once. Own it."

## 2. Pricing — verified numbers

All four packages are in the homepage `#pricing` section. One-time, USD, **one license per
domain**. The three numeric prices also appear in the homepage JSON-LD `offers`, which is how
they were double-checked.

| Package | Price | Updates | Support | Install & migration | Domains |
|---|---|---|---|---|---|
| **Start-up** | **$490 one-time** | 3 months | Standard support | CSV import, you move your own data in | 1 agency |
| **Standard** ("Most chosen") | **$990 one-time** | 12 months | Priority support | CSV import, you move your own data in | 1 agency |
| **Premium** | **$1,790 one-time** | 2 years | Priority support | "We deploy and install it on your server for you"; data migration by the team, or a migration tool built for your data | 2 agencies |
| **Custom** | Quoted ("Contact us") | **Lifetime updates** | Priority support | Installed for you, email and payments connected, onboarding call | Quoted |

Source: [H] `#pricing` and [H] JSON-LD.

Other verified pricing facts, all [H]:

- "One license per domain, paid once. No monthly fee, no per-seat pricing, and no cut of your
  payments. Your only running cost is the server, from about **$10 a month**."
- In every package: the full product (store, orders, messages, billing, tickets, reports);
  **unlimited clients, staff and orders**; your domain and brand with no ClientOS name shown
  to clients; runs on any Ubuntu or Debian server you choose; **keeps working when updates
  end**; 24/7 support.
- "Prices in US dollars. Need more domains than your package covers? Each extra install is
  its own license."
- Each package's updates line: "Every release in that time. Bug fixes, security patches and
  new features, each installed with one command. When it ends, ClientOS keeps running on the
  version you have."
- Buying flow: a form (name, email, optional Telegram, optional note) → "A person replies
  within one working day with payment details, or a demo if you asked for one" → "Your
  license key arrives… in your vibemonk.com account under Licenses, with the installer
  download" → install yourself, or they install it on the higher packages.

**Not stated anywhere on the site, so never claimed here:** a renewal price for updates, a
refund window, a trial of the paid product, tax handling at purchase, or any discount.

## 3. The workflow ClientOS describes (the "How it works" five steps) — [H]

1. **Sell** — "Every service gets its own page on your domain. Visitors pick what they need
   and order on the spot, without a sales call."
2. **Get paid** — "Card, PayPal or crypto, straight to your accounts. The order exists only
   once the payment is confirmed."
3. **Brief** — "Right after paying, the client answers your questions in their portal. Work
   starts with everything you need."
4. **Deliver** — "Hand over the files on the order. The client approves or asks for a
   revision, and it approves itself if they go quiet."
5. **Bill and report** — "Invoices settle themselves when clients pay, and every month adds
   up in your reports."

## 4. Feature areas — "12 areas and 78 features" [F]

[F] is organised as 12 numbered areas. Each line below is from that page unless marked.

**01 Store** — "A store built for productized services". A sales page per service (draft,
private or public, with a live preview); packages and add-ons with quantities, volume
discounts and extras; one-time or monthly on the same page; digital products delivered on
their own once paid; a requirements form answered right after paying; store analytics "from
page view to paid, and where they leave"; item costs stay private ("Margins for you. Never
sent to a client").
Five pricing models [F] + [D-services]: **Tiered by quantity**, **Fixed price**, **Hourly
rate**, **Quote on request**, **Free**. [D-services] adds: a Quote-on-request service opens a
support ticket and so needs the Helpdesk module; a Free service still creates an account, an
order and the requirements form.

**02 Checkout** — "An order exists only once the payment provider confirms it." Five
gateways, keys pasted in and "webhooks register themselves"; manual crypto ("Clients pay your
wallet, your team confirms"); account created in one step by an emailed sign-in code, "no
password to invent"; coupons (percent or fixed, with limits and end dates); your tax rate,
registration and a processing fee; 21 currencies "never silently converted"; signup open or
closed, with Turnstile against bots. [D-checkout-payments] adds abandoned-checkout nudges and
test-vs-live key detection.

**03 Orders** — "Delivery your clients can follow." Statuses that move with briefs,
hand-overs and approvals (Awaiting brief → In progress → Delivered → Completed, plus custom
statuses per [D-orders]); hand-overs and revisions; **auto-approve** that "closes itself when
the client goes quiet"; chase every waiting brief at once; cancellations ("approve with a
refund, or decline with a reason"); ratings after each delivery; an order page with files,
notes, invoices and margin; lists with search, filters, bulk actions and CSV.

**04 Workflow** — The team side. A Todo kanban board with subtasks, priority, due dates and
comments; cards that create themselves from orders, revisions, tickets and payments;
checklists attached to new orders per service; a dashboard of "what needs a decision, and
what is late"; a ⌘K command palette.

**05 Messages** — One conversation per client and per order, plus team channels and direct
messages; presence and typing indicators; **custom offers** — "A priced offer in chat. Accept
and pay."; waiting reminders; mentions, reactions, files and saved replies; private files
behind signed links that expire.

**06 Support** — A built-in help desk. Ticket queue with statuses, priority, assignee and
search; **first-response targets counted in your business hours only**; client emails arrive
as tickets; internal notes, merge and snooze; auto-reply, auto-close and a rating on close.

**07 Billing** — "Gapless numbering, pay links and renewals that bill themselves." Pay links
anyone can use with no account; partial payments and refunds to card, PayPal or credit;
credit notes, with overpayments becoming credit "spent first next time"; subscriptions with
card on file, retries, MRR and client self-service; overdue, renewal and expiring-card
reminder emails. [D-invoices]: invoices run `INV-1001`, `INV-1002…` in one sequence; credit
notes have their own `CN-1001…`; order numbers are separate (`ORD-` + six random digits); "An
issued invoice keeps its number forever. Voiding it doesn't free the number."

**08 Finance** — Profit and loss month by month (invoiced, credit notes, revenue, item costs,
delivery expenses, gross profit); expenses with receipts, links to orders and recurring
costs; margin by service; delivery reports (on-time rate by month, client and person);
monthly client reports "written for every client, every month"; CSV exports of orders,
invoices, expenses and more. [D-finance]: "One rule: every figure is per currency."

**09 Growth** — A lead pipeline (New → Contacted → Qualified → Proposal → Won/Lost) with the
source and value of each lead; website forms that "send leads straight in"; follow-up emails
(a thank-you, then days 2, 5 and 10); traffic tracking with short links and a funnel to paid;
ad conversions via the **Meta Conversions API** and a **Google Ads** offline-conversion
export; a referral programme with partner links, commissions and payouts; a form builder with
**17 field types**, rules and multi-page forms.

**10 White-label** — "Your logo, colours, words and domains. Clients never see ours."
Five logo slots and two brand colours applied "across the admin, the client portal and your
emails"; your own domain; the portal menu can be reordered, renamed, hidden or extended;
a client dashboard whose cards, welcome message and welcome video you pick; client-facing
words renamed ("Orders" can read "Projects"; "Support" → "Help"); every email editable with a
live preview. The defaults shown on the site are Primary `#12141c` and Accent `#fd4105`, and
"The label flips to dark type when white would be unreadable."

**11 Security** — **122 permissions**, six built-in roles plus your own; client roles per
company (owner, admin, member, viewer); passwordless sign-in codes, Google sign-in and 2FA
that can be required for the whole team; an audited **"sign in as"** that is read-only, 30
minutes, with the reason and every page opened logged; credentials encrypted at rest; a
least-privilege database login that "refuses to run as a superuser".
[D-team-permissions] names the six built-in roles: **Owner, Ops manager, Account manager,
Writer, Outreach, Finance**.

**12 Self-hosted** — One command installs, one more updates; browser setup; **7 optional
modules** you can switch off ("Hide what you do not use. Data stays."); background jobs for
renewals and reminders with no cron to set up; **76 notification types**, in-app and email;
`update`, `backup`, `rollback`, one command each; "Never on our servers. Only a license
check-in leaves."
[D-settings] names the modules: **Helpdesk, Messages, Coupons, Subscriptions, Forms, Traffic
tracking, Referral program** (7). Orders and Clients are core and have no switch.

### The stated counts — [H] "By the numbers" and [F]

| Count | Claim |
|---|---|
| **122** | staff permissions, "grouped into roles you build" |
| **76** | notification types, in-app and email |
| **5** | payment gateways, "plus manual crypto and credit" |
| **21** | currencies, "never silently converted" |
| **17** | form field types, "with rules and multi-page" |
| **7** | optional modules, "switch off what you do not use" |
| **12 areas / 78 features** | the structure of [F] |

[D-forms] breaks the 17 field types down and they add up: 5 client-profile (Name, Email,
Phone, Address, Email opt-in) + 9 project-data (Text, Long text, Number, Website, Date,
Checkbox, Option group, Dropdown, Hidden) + 3 utility (Section break, Page break, Content).
[D-invoices] lists the invoice-composer currencies as "your workspace currency plus USD, EUR,
GBP, CAD, AUD, NZD, CHF, SEK, NOK, DKK, SGD, INR and BDT".

## 5. Payments and integrations

| Fact | Source |
|---|---|
| Gateways: **Stripe, PayPal, NOWPayments, CoinGate, BTCPay Server**, plus manual crypto-wallet payments and account credit | [H], [F], [D-checkout-payments] |
| "Money goes straight to your accounts" / "ClientOS never sits between you and your money" — no cut taken | [H], [D-docs] |
| Connects to: Stripe, PayPal, NOWPayments, CoinGate, BTCPay Server, **Resend**, **Cloudflare R2**, **Cloudflare Turnstile**, **Google sign-in** | [H] "Connects to" |
| Email: **Resend or your own SMTP server** for outgoing mail; Resend for inbound email into tickets. "There's no fallback: until you connect one, sign-in codes, invitations and notifications can't be sent." | [D-docs], [D-first-run] |
| File storage: built-in storage on your server, **or** your own Cloudflare R2 bucket. If files move to R2, `clientos backup` no longer covers them. | [D-docs], [D-first-run], [D-operations] |
| Webhooks are registered for you where the provider allows it, at `/v1/payments/webhooks/…` and `/v1/mail/webhooks/resend` | [D-first-run] |
| Stripe test card `4242 4242 4242 4242` is the documented way to test a purchase before going live | [D-first-run] |

## 6. Self-hosting: server, install, operations

**Server requirements** — [D-installation]:

| Resource | Minimum | Recommended |
|---|---|---|
| OS | Ubuntu 22.04 or Debian 12 | Ubuntu 24.04 LTS (64-bit, fresh server) |
| CPU | 1 vCPU | 2 vCPU |
| Memory | 2 GB ("the installer stops below 2 GB, and adds a 4 GB swap file on a small server") | 4 GB |
| Free disk | 10 GB | 20 GB or more, SSD |
| Network | Public IPv4, ports 80 and 443 open | — |

"A 2 vCPU, 4 GB server is comfortable for a typical agency." Providers named: Hetzner,
DigitalOcean, Vultr, Linode, AWS Lightsail ([D-installation]); the homepage diagram names
Hetzner, DigitalOcean and AWS.

**Domain and DNS** — [D-domain]: ClientOS runs on **one domain**, for example
`clients.youragency.com`, and needs **one A record** pointing at the server. Everything lives
on it: the portal at `/`, the admin at `/admin`, the API at `/v1`. On Cloudflare the record
must be **DNS only** (grey cloud) during install, and a stale `AAAA` record must be removed.
The domain must be public, not already serving a website, and the license binds to it. **A key
can change domain three times in its life.** Moving is done from Settings → License → Change
domain, or `sudo clientos domain NEW_DOMAIN`.

**Install** — [D-installation]: two methods, same installer, "about 10 minutes".

1. One command (recommended):
   `curl -fsSL https://license.vibemonk.com/v1/licensing/install/clientos | sudo bash -s -- --license-key CLOS-XXXX-XXXX-XXXX-XXXX`
2. Download `clientos-kit-VERSION.tar.gz` from the vibemonk.com Licenses page, upload it,
   unpack and `sudo ./install.sh --license-key …`.

It checks the license, downloads the installer and verifies its fingerprint, unpacks to
`/opt/clientos`, installs Docker if missing, adds swap on a small server, and writes
`deploy/.env` with freshly generated passwords. Then you connect the domain in the browser —
"Vibemonk's license server checks from the internet that your domain reaches this server, and
binds your key to it. Only then is ClientOS downloaded, with every file checked against its
fingerprint." It can also run headless with `--domain`, `--email` and `--yes`. **ClientOS
installs only on a server your domain reaches over the internet** — no laptops, no home
networks.

**Containers that run** — [D-installation]: `caddy` (the only one with open ports),
`postgres`, `redis`, `minio` (file storage at `/clientos-media`), `migrate` (runs on every
start, then exits), `api`, `portal`, `admin`.

**First run** — [D-first-run]: setup page at `https://YOUR_DOMAIN/admin/setup`, guarded by a
**setup key** printed by the installer (`sudo clientos setup-key` shows it again). Seven
steps: Welcome → License → Your agency → Region (currency, timezone) → Brand (two colours) →
Your account (owner, password ≥ 12 characters) → Review. "Plan on 20 to 40 minutes, most of it
spent in your email provider's dashboard." Then connect, in this order: email → sender and a
test → file storage → Turnstile → payment gateways (test keys first) → 2FA → schedule backups
→ invite the team and import clients. There is also a CLI route to create the owner
(`bootstrap-owner.cli.js`) that "refuses to run once any staff member has signed in".

**The `clientos` command** — [D-operations]: `status`, `version`, `update`, `rollback`,
`backup`, `restore`, `logs`, `restart`, `stop`/`start`, `setup-key`, `domain`, `env`. Updates
also run from the admin at Settings → License → Updates; "The admin never gets root access to
your server for this." An update asks Vibemonk for the newest release the license covers,
shows release notes, downloads and verifies it, **takes a backup**, then restarts; migrations
run before the new API starts. Releases that change existing data want
`sudo clientos update --stop-first` ("about a minute of downtime"). `rollback` goes back one
release, once.

**Backups** — [D-operations]: `sudo clientos backup` writes three files —
`db-DATE.dump`, `files-DATE.tar.gz` and `env-DATE` (a copy of `deploy/.env`, including
`CREDENTIAL_SECRET`) — and keeps the newest seven of each. **"Nothing runs backups for you
until you schedule them"**; the docs give a cron line for 03:00 daily. Redis is not backed up.
Restore: `sudo clientos restore backups/db-DATE.dump backups/files-DATE.tar.gz`, confirmed by
typing `restore`. There is a documented procedure for moving to a new server, and for rotating
`SESSION_SECRET`, `FORWARDED_IP_SECRET`, `APP_DB_PASSWORD` and `CREDENTIAL_SECRET`.

**Health and jobs** — [D-operations]: `GET /v1/health` (200, reports PostgreSQL and Redis;
503 when PostgreSQL is unreachable), `/healthz`, `/admin/healthz`. Scheduled work runs inside
the API, claimed in PostgreSQL — "no separate worker and no cron to set up". Named jobs
include `system.heartbeat` (every 5 minutes), `system.license.check` (every 12 hours and at
startup), overdue invoices, abandoned checkouts, checkout reconciliation, unmatched payments,
missing briefs, auto-approve, subscription renew/charge/upcoming, expiring cards, chat
reminders, ticket auto-close and unsnooze, and task due dates.

**Latest release** — [D-changelog]: **1.0.4, 27 October 2026**. Earlier: 1.0.3 and 1.0.2 (25
October 2026), 1.0.1 and 1.0.0 (24 October 2026). The version numbers in the homepage and [F]
terminal mock-ups (1.4.0 / 1.4.1) are illustrative, not the shipped version.

## 7. Data boundary and security

| Fact | Source |
|---|---|
| "Hosted portals keep your clients, contracts and invoices on someone else's computer. ClientOS runs entirely on a server you rent and control. We never see what is inside it." | [H] |
| The **only** things that leave your server: your Resend (or SMTP) emails, your payment gateways, and a **license check-in twice a day** carrying "your signed license and the version you run. No client, order or invoice data, ever." | [H], [D-operations] |
| If the check-in can't reach Vibemonk, ClientOS keeps working with a warning; the grace period is **seven days** after the last successful check-in. After that — or at once if the key is revoked or released — **the admin becomes read-only**. "The client portal keeps working, checkout and webhooks keep working, and nothing is deleted." | [D-operations] |
| Gateway, email and storage keys are encrypted with **AES-256-GCM** "with a secret that exists only on your server" (`CREDENTIAL_SECRET`) | [H], [D-docs] |
| A least-privilege database login: "The API cannot change the schema, and refuses to start as a superuser or the table owner." | [H] |
| Every file except your logo is private, reached through a signed link that expires — **15 minutes by default** | [H] |
| HTTPS everywhere with HSTS, certificates issued and renewed automatically, **only ports 80 and 443 open** | [H] |
| 2FA, 122 permissions, audit trail, and a logged, read-only, time-limited "sign in as" | [H], [F] |
| Releases are "verified by SHA-256" / "Every release file checked by its SHA-256" | [H], [F] |
| Backups: "One command dumps the database, files and settings into a folder you can copy anywhere." | [H] |
| **No source code.** "You get ClientOS as ready-built, verified Docker images and a one-command installer… If you need a change, ask us: custom work is available." **ClientOS is not open source.** | [H] FAQ |

## 8. Technology stack

Homepage [H] and [F] list: Next.js, React, Tailwind CSS, TypeScript (end-to-end, one typed
monorepo), NestJS on Fastify, Better Auth (sign-in codes, passwords, 2FA, Google), Drizzle
ORM, Zod, PostgreSQL, Redis (live presence only), S3-compatible storage (built in, or your
Cloudflare R2), background jobs in PostgreSQL, Docker, Caddy (automatic Let's Encrypt),
Node.js, and SHA-256-verified downloads.

[D-docs] gives exact versions: **Next.js 16, React 19, Tailwind CSS 4; NestJS on Fastify,
Node.js; PostgreSQL 18; Redis 7 (presence only)**; storage on your server or your own
Cloudflare R2; Resend or SMTP for outgoing mail and Resend for inbound; Cloudflare Turnstile;
"Docker images, installed and updated by a one-command installer, behind Caddy for HTTPS".

## 9. White-label, specifically

[H], [F], [D-branding]: your domains, your logos (five slots), **two brand colours** that
repaint the admin, the client portal, the sign-in screen, emails and invoices; client-facing
words renamed from Settings; "Clients never see ClientOS"; every email template editable with
a live preview; a portal menu you reorder, rename, hide or add to; a client dashboard whose
cards, welcome message and welcome video you choose; company settings can be exported and
imported. **The interface is in English** — [H] FAQ: "The interface is in English. You can
rename the words your clients see, such as menu labels and headings, from the settings."

## 10. The demo — [DEM]

"Type your email and we send you a login to a live ClientOS: the full agency admin and client
portal with sample data. It is read-only and works for 3 days." Bullets: the full agency admin
and the client portal · filled with sample clients, orders and invoices · read-only, so click
anything · your login works for 3 days. Footer line: "The login arrives by email. **No call,
no card.**" Meta description: "Try ClientOS now: the full agency admin and client portal with
sample data, read-only, for 3 days. Type your email and the login arrives in minutes."

## 11. Migration from another portal

- [H] FAQ: "Coming from Wayfront (Service Provider Pro)? On Start-up and Standard you bring
  your clients in yourself from a CSV file, with column mapping. On Premium and Custom our
  team moves your data for you, or builds a migration tool for it."
- [D-clients]: clients can be imported from a CSV file with column mapping from the Clients
  page, and exported to CSV.
- [CS]: on the Premium package "the Wayfront importer brought over clients, orders, messages,
  invoices and files".

## 12. Case study: Dot Mirror — [CS]

A real, named, published customer story, so it can be cited as ClientOS's own claim.

- **Who:** Dot Mirror, a white-label link building and digital PR agency selling to other
  agencies, resellers and brands (guest posts, niche edits, press releases, local SEO,
  AI-answer citations). Founder quoted: **Shimanto Neer**. Portal at `clients.dotmirror.com`.
- **Stated agency numbers:** in business since 2019 · 12,400+ links placed · 400+ publishing
  partners · 98% delivered on time.
- **Headline figures:** $0 monthly portal bill · **$7,174 kept over three years** against
  Wayfront Pro at list prices · 100% of client history moved (clients, orders, messages,
  invoices, files) · **1 day from install to live**.
- **Their before/after table** (ClientOS's own framing, Wayfront terms "from its public
  pricing page, Pro plan, October 2026"): cost $249–$299 a month with per-seat extras → $1,790
  once with 2 years of updates; data on Wayfront's servers → on Dot Mirror's own server; ten
  seats on Pro then $18–$20 each → no limit on staff or clients; crypto handled outside the
  portal → NOWPayments, CoinGate or BTCPay; API an add-on at $240–$300 a month → included;
  the vendor decides what changes → Dot Mirror does.
- **Three-year table:** Wayfront Pro $2,988 / $5,976 / $8,964 cumulative vs ClientOS Premium
  $1,790 flat, footnoted "Wayfront Pro billed yearly at $249 a month, ten seats, no extra
  seats or API add-on. List prices, October 2026."

The quote, the figures and the Wayfront comparison are all ClientOS's own published claims and
are attributed as such wherever this site repeats them.

## 13. Brand assets, colours and type

| Asset | Where it came from |
|---|---|
| **Icon** — the sparkle-disc "o", `viewBox 0 0 256 256`, solid `#fd4105` | `https://getclientos.com/icon.svg` (fetched 2026-10-29); the identical path is in `F:\vibemonk\apps\web\src\components\ui\ProductMark.tsx` |
| **Wordmark** — two paths, letters in `currentColor` and the disc "o" in `#fd4105`, `viewBox 0 0 548.43 106.3` | `F:\vibemonk\apps\web\src\components\ui\ClientOSWordmark.tsx`, whose own comment says it is "copied path for path from getclientos.com (`src/components/Logo.tsx`)" |
| **Product icon, blue variant** | `F:\clientos\brand-assets\svg icon for dark screen.svg` / `…light screen.svg` (`#0057FC`) |
| **Accent** `#fd4105` | `--cos-accent` in getclientos.com's compiled CSS; also the Accent default shown in [F] area 10 and [D-first-run] |
| **Primary / ink** `#12141c` | `--cos-primary` in the same CSS; the Primary default shown in [F] area 10 |
| **Body ink** `#1a1e34`, deep slate `#1e2846` | the same stylesheet |
| **Display type: General Sans** (400/500/700) | `--font-general-sans` in getclientos.com's CSS; the woff2 files are in `F:\vibemonk\apps\web\src\fonts\` |
| **Body type: Inter** | `--font-inter` / `--font-sans` in the same CSS |

## 14. Competitors — from their own public pages only

### Wayfront (formerly Service Provider Pro / spp.co) — checked 2026-10-29

Source: <https://wayfront.com/> and <https://wayfront.com/pricing>.

- Positioning, verbatim from the title and meta: "Client Portal for Agencies Selling
  Productized Services"; "Wayfront is client portal software for agencies selling repeatable
  productized services. Grow revenue through reorders, renewals, referrals, and reseller
  sales."
- Footer: "Service Provider Pro is now Wayfront®". Company: Client Solutions Ltd, Riga, Latvia.
- Pricing page headline: "Unlimited clients & projects for one all-in monthly price. No
  transaction fees, no limits on your success."

| Plan | Monthly | Yearly | Seats | File storage |
|---|---|---|---|---|
| **Base** | **$129/mo** | **$99/mo** | 5 | 1 TB |
| **Pro** | **$299/mo** | **$249/mo** | 10 | 5 TB |
| **Plus** | "Book a call" — "50+ team members, API, priority Slack support, custom SLAs, and custom automations" | | | |

- Extra seats: **$20/seat/mo** monthly, **$18/seat/mo** yearly.
- The Integration **API is a Pro add-on**: **+$300/mo** monthly, **+$240/mo** yearly.
- Base includes: white-label client portal, CRM with unlimited clients, project & task
  management, form builder with rules, 40+ integrations, Wayfront AI Assistant, Claude/ChatGPT
  via MCP, Wayfront CLI, team and role management. Pro adds client coworkers, Slack
  notifications, portal template editor, advanced integrations, white-label reseller mode.
- Comparison-table rows confirmed as Pro-only: multi-language portal, custom HTML/CSS
  templates, client coworkers, Zapier, SEO reporting, Make, Slack notifications, white-label
  reseller mode. API shows as "Add-on".
- **14-day free trial, no credit card required.**
- FAQ: "No. Wayfront doesn't have transaction fees, and your money goes directly to your own
  Stripe account." Custom domain supported (`clients.agency.com`). "In case you ever need to
  move away from Wayfront you can export your clients and sales from your dashboard."
- Social proof on the page: "Thousands of agencies have sold over $500M+ in productized
  services", plus six named testimonials.

### Zendo — checked 2026-10-29

Source: <https://getzendo.io/> and <https://getzendo.io/pricing>.

- Positioning, verbatim: "Sell & Deliver Services All-in-One Place"; "Zendo allows you to sell
  productized, subscription and custom services. Collaborate and collect payments. Create
  quotes and invoices."
- Pricing headline: "Pricing that grows with your business. Start with full Pro access for 14
  days. Then choose a paid plan or continue on Free—no credit card required."

| Plan | Annual | Monthly | Seats included | Extra users | Clients | Published services | Storage |
|---|---|---|---|---|---|---|---|
| **Essential** | Free | Free | 1 | — (no watchers) | 3 | 1 | 1 GB |
| **Core** | **$25/mo** | **$29/mo** | 1 | **$8/mo** | Unlimited | 3 | 100 GB |
| **Pro** | **$49/mo** | **$59/mo** | 1 | **$12.50/mo** | Unlimited | Unlimited | 500 GB |
| **Agency** | **$79/mo** | **$99/mo** | 1 | **$17/mo** | Unlimited | Unlimited | 5 TB |

- Pro adds: custom domain & email, automations, client teams & onboarding, Zapier/Rewardful/app
  embeds, advanced white-label features, intake forms, unlimited request types.
- Agency adds: **remove the "Powered by Zendo" badge**, forms conditional logic, custom CSS &
  JS, "Public API (coming soon)".
- Payments: **Stripe** and manual bank transfer. "Coming soon: define multiple payment methods
  like PayPal, Payoneer, Wire Transfer, etc." Transaction fees: **None**.
- Localisation: 12 interface languages listed (Danish, Dutch, English, Finnish, French, German,
  Italian, Norwegian, Polish, Portuguese, Spanish, Swedish) and a long currency list.

### Agency Handy — NOT VERIFIED

`agencyhandy.com` (A record `77.37.114.60`) **refused connections** from this network on
2026-10-29 over both HTTPS and HTTP, from two independent fetchers; `app.agencyhandy.com`
answered 200 but is the sign-in app, not a public marketing or pricing page. **No Agency Handy
pricing, plan, limit or feature claim is made anywhere on this site.** The
`/agency-handy-alternative` page compares the two *models* — hosted SaaS subscription versus
self-hosted one-time licence — states plainly that Agency Handy's current terms could not be
verified on that date, and sends the reader to agencyhandy.com to check for themselves. See
`UNVERIFIED.md`.

## 15. Two places where the site contradicts itself

Both are recorded here because this site has to pick one, and both picks follow the docs,
which are the more specific and more recently written source.

1. **How many subdomains.** The homepage "Self-hosted, for real" diagram shows three —
   `portal.youragency.com`, `admin.youragency.com`, `api.youragency.com` — and its install
   mock-up checks two DNS names. [D-docs] and [D-domain] say the opposite, and say it twice:
   "ClientOS runs on **one domain** of your own", with the portal at `/`, the admin at
   `/admin` and the API at `/v1`, and "**One A record** is all it takes". **This site follows
   the docs.**
2. **Wildcard DNS.** The homepage install section says "One wildcard DNS record".
   [D-domain] describes a single **A** record and never mentions a wildcard. **This site says
   one A record** and links to the DNS doc.

Also worth knowing: the homepage FAQ and one pricing line refer to a "**Pro**" package ("on
Pro and Custom we install it"), but the four packages are named Start-up, Standard, Premium
and Custom. This site uses **Premium and Custom**, which is what the FAQ answer "I am not
technical. Can you set it up?" says.

## 16. Things the site does not say — not invented here

No customer count, no revenue figure, no star rating or review score, no uptime SLA, no
SOC 2 / ISO / GDPR certification claim, no DPA, no renewal price for expired updates, no
refund policy, no trial of the paid product, no mobile app, no interface language other than
English, no public API documentation, no open-source licence, and no integrations beyond the
ones listed in §5. The full list of gaps is in `UNVERIFIED.md`.
