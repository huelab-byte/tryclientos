# Unverified

Everything on this site had to come from a primary source: ClientOS claims from
getclientos.com and its documentation, competitor claims from that competitor's own public
pages. This file is the other half of that rule — the things that could **not** be verified on
**29 October 2026** and are therefore **not claimed anywhere on the site**.

If you can supply a source for any of these, open an
[issue](https://github.com/huelab-byte/tryclientos/issues) or a pull request and it will be
added with its citation.

---

## 1. Agency Handy — nothing could be read from their own pages

`agencyhandy.com` resolves to `77.37.114.60`, and on 29 October 2026 that host **refused
connections** from this network over both HTTPS and HTTP. Two independent fetchers were used
(a scripted HTTP client and a separate fetch service) and both failed the same way; the DNS
record resolved fine, so this is the web server rejecting the connection, not a lookup problem.
`app.agencyhandy.com` answered `200`, but that is the sign-in application, not a public
marketing or pricing page.

**Consequence.** `/agency-handy-alternative/` makes **no claim about Agency Handy's prices,
plans, seat limits, client limits, storage, feature set, trial terms, transaction fees or
integrations.** It compares the two delivery models — hosted SaaS subscription against a
self-hosted one-time licence — states only ClientOS facts as fact, says plainly on the page
that their terms could not be checked, and sends the reader to agencyhandy.com to look for
themselves. The entry in the curated list describes them in one neutral sentence as a hosted
client portal and service-management tool for agencies, which is what the product is commonly
understood to be, and attaches no numbers.

Specifically **not** stated anywhere on this site:

- Agency Handy's plan names or prices, monthly or annual
- Whether they charge per seat, and how much
- Any client, storage, service or feature limit
- Whether they take a transaction fee
- Whether they offer a free tier or trial, and for how long
- Which payment gateways they support
- Anything about white-labelling, custom domains or an API

## 2. Keyword volume and difficulty figures

The prior keyword research in `../_shared/keywords.md` records that no tool returned usable
numbers: the Ahrefs free keyword generator was captcha-gated (`InvalidCaptcha`), Ubersuggest
required a login, the Google Trends API returned `400`, and Google SERPs were not fetchable.
Google autocomplete did work, so **autocomplete presence** is the only demand signal behind
this site's keyword choices, and it means "someone searches this", not "this many people do".

**Consequence.** No search volume, keyword difficulty, traffic estimate or ranking claim
appears anywhere on this site or in its commit messages. Page titles and descriptions were
chosen from autocomplete presence plus intent fit, nothing more.

## 3. Things getclientos.com itself does not publish

These are gaps in the vendor's own material, found by reading all 28 pages in their sitemap.
This site does not fill them, and `/faq/` lists most of them openly so a buyer can ask.

| Not published | Why it matters |
|---|---|
| **The price of renewing updates** | Every package except Custom has time-limited updates (3 months, 12 months, 2 years). The site says ClientOS keeps running on the version you hold and that you can renew, but never says what renewing costs. |
| **A refund policy** | No refund window, guarantee or cooling-off period is stated for a one-time licence bought by emailing a form. |
| **Any customer count or revenue figure** | One named case study is published (Dot Mirror). No "N agencies run ClientOS" number exists, so this site uses none. |
| **Any rating or review score** | There is no aggregate rating anywhere on getclientos.com. This site therefore ships **no `aggregateRating` or `review` in any JSON-LD** — a build check (`scripts/check-links.mjs`) fails the build if one ever appears. |
| **SOC 2, ISO 27001 or GDPR certification** | No compliance certification or audit is claimed, and no DPA is published. Self-hosting changes who the controller and processor are, which is a question for your own counsel. |
| **An uptime SLA** | None stated. On a self-hosted product most uptime is your server's anyway. |
| **A public API reference** | The API runs on your own domain at `/v1` and is part of the product, but no API documentation is published. |
| **A mobile app** | Never mentioned. The docs describe the client portal working in a phone browser. |
| **A second interface language** | The FAQ states the interface is English, with client-facing words renamable. No roadmap for more is published. |
| **What support hours "24/7 support" means in practice** | Stated as a package feature with no response-time target attached. |
| **Hardware sizing above "a typical agency"** | The docs give minimum and recommended specs and call 2 vCPU / 4 GB "comfortable for a typical agency", but publish no guidance for large installations. |

## 4. Two self-contradictions on getclientos.com, and which side this site took

Both are recorded in `AUDIT.md` §15. In both cases this site follows the **documentation**,
which is more specific and more recently written than the marketing page.

1. **Number of domains.** The homepage diagram shows three subdomains
   (`portal.`, `admin.`, `api.`); `/docs` and `/docs/domain` both say ClientOS runs on **one
   domain**, with the portal at `/`, the admin at `/admin` and the API at `/v1`. This site says
   one domain.
2. **Wildcard DNS.** The homepage install section says "One wildcard DNS record";
   `/docs/domain` describes a single **A record** and never mentions a wildcard. This site says
   one A record.

A third, smaller inconsistency: the homepage FAQ refers to a "**Pro**" package when the four
packages are named Start-up, Standard, Premium and Custom. This site says **Premium and
Custom**, matching the rest of that same FAQ answer.

## 5. Claims this site deliberately attributes rather than asserts

Not unverified, but worth stating: the Dot Mirror case study at
`getclientos.com/case-studies/dotmirror` is ClientOS's own published customer story. Its
figures — $7,174 kept over three years, 100% of client history moved, one day from install to
live, and the Dot Mirror agency statistics — are the vendor's claims, not independent
verification, and this site does not restate them as fact. The three-year arithmetic on
`/wayfront-spp-alternative/` is **recomputed here from both vendors' own published list
prices** rather than copied from that case study, and shows its working in the table caption.

## 6. Competitor figures that *were* verified

For contrast, so the standard is clear. All read on 29 October 2026 from the competitor's own
public pricing page, and all reproduced on this site with that date attached:

- **Wayfront** (`wayfront.com/pricing`): Base $129/mo monthly or $99/mo yearly with 5 seats and
  1 TB; Pro $299/mo monthly or $249/mo yearly with 10 seats and 5 TB; extra seats $20 or
  $18/seat/mo; the Integration API as a Pro add-on at +$300 or +$240/mo; a Plus plan sold by
  call; a 14-day free trial with no credit card; "no transaction fees" with money going to your
  own Stripe account; and the footer line "Service Provider Pro is now Wayfront®".
- **Zendo** (`getzendo.io/pricing`): Essential free (1 user, 3 clients, 1 published service, 1
  GB); Core $25/$29 (extra users $8); Pro $49/$59 (extra users $12.50); Agency $79/$99 (extra
  users $17); Stripe and manual bank transfer with no transaction fees, and PayPal and others
  listed as "coming soon"; removing the "Powered by Zendo" badge on the Agency plan; twelve
  interface languages.

Both vendors change their pricing without notice. Every page carrying these numbers says the
date it checked them and links to the source.

---

*Last reviewed 29 October 2026. The audit behind this file is in [AUDIT.md](AUDIT.md).*
