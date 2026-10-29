/**
 * Comparison data for the /…-alternative pages.
 *
 * Two hard rules, enforced by the shape of this file:
 *
 * 1. Every competitor number carries `checked` (the date it was read) and
 *    `source` (the competitor's own page it was read from). Nothing enters this
 *    file from a review site, a listicle or memory.
 * 2. Where a competitor's page could not be reached, `verified: false` and the
 *    page says so instead of guessing. See UNVERIFIED.md.
 */

import { AUDIT_DATE } from './site.ts';

export type Row = {
  dimension: string;
  /** Verbatim or close-paraphrased from the competitor's own page. */
  them: string;
  /** From getclientos.com. */
  clientos: string;
};

export type Alternative = {
  slug: string;
  /** How the competitor names itself. */
  product: string;
  nav: string;
  h1: string;
  title: string;
  description: string;
  /** Their own positioning line, quoted. */
  theirPositioning: string;
  theirSite: string;
  theirPricingPage: string | null;
  verified: boolean;
  checked: string;
  /** Opening paragraphs. */
  lede: string;
  /** Who should and should not switch — the fair-comparison section. */
  stayWithThem: string[];
  considerClientOS: string[];
  rows: Row[];
  /** Plan table, only where verified. */
  plans?: { plan: string; price: string; detail: string }[];
  /** Cost-over-time comparison, only where their price is verified. */
  arithmetic?: {
    intro: string;
    theirLabel: string;
    theirYearly: number;
    ours: { label: string; price: number };
    footnote: string;
  };
  keywords: string;
};

export const alternatives: Alternative[] = [
  // -------------------------------------------------------------------------
  {
    slug: 'wayfront-spp-alternative',
    product: 'Wayfront',
    nav: 'Wayfront (SPP)',
    h1: 'A self-hosted Wayfront (Service Provider Pro) alternative',
    title: 'Self-Hosted Wayfront (SPP) Alternative — ClientOS',
    description:
      'Wayfront, formerly Service Provider Pro, is a hosted client portal from $99/mo. ClientOS is the same job self-hosted on a one-time licence. An honest comparison, checked 29 October 2026.',
    theirPositioning:
      'client portal software for agencies selling repeatable productized services',
    theirSite: 'https://wayfront.com/',
    theirPricingPage: 'https://wayfront.com/pricing',
    verified: true,
    checked: AUDIT_DATE,
    lede:
      'Wayfront — the product that was Service Provider Pro, spp.co — and ClientOS are aimed at the same agency: one that sells repeatable, scoped services rather than bespoke projects. They differ on one structural question, and almost everything else follows from it: who owns the server the portal runs on, and therefore whether you pay monthly or once.',
    stayWithThem: [
      'You want nothing to do with a server. Wayfront runs it; with ClientOS you own a VPS, patch it and schedule your own backups.',
      'You need the portal in a language other than English. Wayfront lists a multi-language portal on Pro; ClientOS states its interface is English only, with client-facing words renamable.',
      'You want to try before you commit. Wayfront offers a 14-day free trial with no credit card. ClientOS has a read-only demo for 3 days, but the licence itself is a purchase with no trial stated.',
      'You want the team to grow without you thinking about infrastructure, and the per-seat bill is acceptable.',
      'You rely on something Wayfront has that ClientOS does not list, such as its SEO reporting, Zapier, Make, Slack notifications or its AI assistant and MCP connection.',
      'You need a documented integration API. Wayfront sells one as a Pro add-on and documents it publicly. ClientOS runs its own API at /v1 and does not charge separately for it, but publishes no API reference — so if you are planning to build against it, ask them what exists before you buy, rather than assuming.',
    ],
    considerClientOS: [
      'Your clients’ names are the sensitive part. White-label resellers and anyone under a client NDA may simply not be able to keep that list on a vendor’s database.',
      'Your bill grows every time you hire. Wayfront prices seats; ClientOS states unlimited staff on every package.',
      'Your bill is mostly seats rather than features. Wayfront’s own comparison table puts most of what an agency needs on Base; the growth in the bill comes from headcount, which ClientOS does not charge for.',
      'Clients pay you in crypto. ClientOS lists NOWPayments, CoinGate, your own BTCPay Server and manual wallet payments alongside Stripe and PayPal.',
      'You would rather own the thing than rent it, and a VPS at about $10 a month is a cost you are happy to carry.',
    ],
    plans: [
      {
        plan: 'Base',
        price: '$129/mo monthly · $99/mo yearly',
        detail: '5 seats, 1 TB file storage, white-label portal, CRM, forms, 40+ integrations',
      },
      {
        plan: 'Pro',
        price: '$299/mo monthly · $249/mo yearly',
        detail:
          '10 seats, 5 TB, client coworkers, Slack notifications, portal template editor, white-label reseller mode',
      },
      {
        plan: 'Extra seats',
        price: '$20/seat/mo monthly · $18/seat/mo yearly',
        detail: 'Above the seats included in the plan',
      },
      {
        plan: 'Integration API',
        price: '+$300/mo monthly · +$240/mo yearly',
        detail: 'An add-on on Pro, shown as "Add-on" in their comparison table',
      },
      {
        plan: 'Plus',
        price: 'Book a call',
        detail: '"50+ team members, API, priority Slack support, custom SLAs, custom automations"',
      },
    ],
    rows: [
      {
        dimension: 'What you pay',
        them: 'A monthly subscription: $99–$129/mo on Base, $249–$299/mo on Pro, plus $18–$20 per extra seat and $240–$300/mo if you need the API.',
        clientos:
          'A one-time licence per domain: $490, $990 or $1,790, or quoted. Plus a server, which the site puts at about $10 a month.',
      },
      {
        dimension: 'Where client data lives',
        them: 'On Wayfront’s infrastructure. The vendor states encrypted database backups to multiple secure locations and 24/7 uptime monitoring.',
        clientos:
          'In your own PostgreSQL database on your own Linux server. The only thing that leaves it is a licence check-in twice a day carrying the signed licence and version.',
      },
      {
        dimension: 'Team size',
        them: '5 seats on Base, 10 on Pro, then $18–$20 per seat per month.',
        clientos: 'Unlimited staff, stated on every package. 122 permissions and six built-in roles.',
      },
      {
        dimension: 'API',
        them: 'An add-on on Pro at +$240–$300/mo. Included on the Plus plan ("Book a call").',
        clientos:
          'Runs on your own domain at /v1 as part of the product, with nothing extra to pay. But no public API reference is published, so it is not a like-for-like replacement for a documented integration API.',
      },
      {
        dimension: 'Payments',
        them: 'No transaction fees; "your money goes directly to your own Stripe account".',
        clientos:
          'No cut taken. Stripe, PayPal, NOWPayments, CoinGate, BTCPay Server, manual crypto wallets and account credit, all straight to your accounts.',
      },
      {
        dimension: 'Trying it',
        them: '14-day free trial, no credit card required.',
        clientos:
          'A read-only instant demo with sample data, by email, valid for 3 days. No trial of the licensed product is stated.',
      },
      {
        dimension: 'File storage',
        them: '1 TB on Base, 5 TB on Pro.',
        clientos:
          'Whatever your disk holds, or your own Cloudflare R2 bucket. Files on R2 are not covered by clientos backup and need backing up separately.',
      },
      {
        dimension: 'Portal languages',
        them: 'A multi-language portal is listed as a Pro feature.',
        clientos:
          'The interface is in English. Client-facing words, menu labels and headings can be renamed.',
      },
      {
        dimension: 'Leaving',
        them: '"In case you ever need to move away from Wayfront you can export your clients and sales from your dashboard."',
        clientos:
          'The database and files are already yours; clientos backup dumps all three into a folder you copy anywhere. Keeps running on the version you hold after updates end.',
      },
      {
        dimension: 'Source code',
        them: 'Not offered. Closed-source hosted SaaS.',
        clientos:
          'Also not offered. ClientOS ships as SHA-256-verified Docker images with a one-command installer: self-hosted, but not open source.',
      },
      {
        dimension: 'Who decides what changes',
        them: 'Wayfront sets the roadmap, the prices and the plan boundaries.',
        clientos:
          'You choose when to update, and ClientOS keeps running on the version you have. Custom features are quoted work, not a roadmap vote.',
      },
    ],
    arithmetic: {
      intro:
        'The only honest way to compare a subscription with a one-time licence is over time. Wayfront’s own yearly Pro price against the ClientOS Premium licence, server excluded on both sides:',
      theirLabel: 'Wayfront Pro, billed yearly, 10 seats',
      theirYearly: 2988,
      ours: { label: 'ClientOS Premium, one-time', price: 1790 },
      footnote:
        'Wayfront Pro at its yearly rate of $249/mo = $2,988 a year for the 10 seats included, with no extra seats and no API add-on; list prices read from wayfront.com/pricing on 29 October 2026. ClientOS Premium is $1,790 once and includes 2 years of updates; after those, it keeps running on the version you hold. Neither column includes your own server (about $10 a month) or your payment-gateway fees, which you pay either way. ClientOS publishes a case study making a near-identical calculation for one agency; the figures above are recomputed here from both vendors’ own list prices.',
    },
    keywords:
      'wayfront alternative, service provider pro alternative, spp alternative, spp.co alternative, self hosted wayfront alternative',
  },

  // -------------------------------------------------------------------------
  {
    slug: 'zendo-alternative',
    product: 'Zendo',
    nav: 'Zendo',
    h1: 'A self-hosted Zendo alternative',
    title: 'Self-Hosted Zendo Alternative — ClientOS',
    description:
      'Zendo is a hosted service-selling platform from free to $99/mo, with per-user pricing. ClientOS is self-hosted on a one-time licence. A factual comparison, checked 29 October 2026.',
    theirPositioning:
      'Zendo allows you to sell productized, subscription and custom services. Collaborate and collect payments. Create quotes and invoices.',
    theirSite: 'https://getzendo.io/',
    theirPricingPage: 'https://getzendo.io/pricing',
    verified: true,
    checked: AUDIT_DATE,
    lede:
      'Zendo and ClientOS both sell the same promise: a storefront for your services, a place for the client to order and talk to you, and quotes and invoices at the end of it. Zendo starts free and is hosted for you; ClientOS is a one-time licence you install on your own server. The sharpest practical differences are per-user pricing and what each one does about payments.',
    stayWithThem: [
      'You are starting out and want to spend nothing. Zendo’s Essential plan is free for 3 clients and 1 published service; ClientOS has no free tier.',
      'You are one person. Zendo’s plans include one internal user, which is cheap for a solo operator; ClientOS prices per domain, not per seat, so it is poor value for one person and good value for a team.',
      'You need the interface in Danish, Dutch, Finnish, French, German, Italian, Norwegian, Polish, Portuguese, Spanish or Swedish. Zendo lists twelve interface languages; ClientOS states English only.',
      'You want Zapier, Rewardful or embedded third-party apps, which Zendo lists from its Pro plan.',
      'You would rather not run a server at all.',
    ],
    considerClientOS: [
      'Your team is more than two or three people. Zendo adds $8, $12.50 or $17 per extra user per month depending on the plan; ClientOS states unlimited staff on every package.',
      'Clients pay you outside of Stripe. Zendo lists Stripe and manual bank transfer, with PayPal and others as "coming soon"; ClientOS lists five gateways plus manual crypto wallets and account credit today.',
      'You need the "powered by" line gone without reaching the top plan. Zendo puts removing the "Powered by Zendo" badge on its Agency plan; ClientOS states the ClientOS name is never shown to clients on any package.',
      'You want client data in your own database — the ordinary requirement for white-label resellers and anyone under a client NDA.',
      'You want a help desk, a lead pipeline, expenses and a profit-and-loss in the same product, which ClientOS lists as part of the one licence.',
    ],
    plans: [
      {
        plan: 'Essential',
        price: 'Free',
        detail: '1 internal user, 3 clients, 1 published service, 2 request types, 1 GB storage',
      },
      {
        plan: 'Core',
        price: '$25/mo yearly · $29/mo monthly',
        detail:
          'Unlimited clients, up to 3 published services, 5 request types, 100 GB; extra users $8/mo',
      },
      {
        plan: 'Pro',
        price: '$49/mo yearly · $59/mo monthly',
        detail:
          'Unlimited services, custom domain and email, automations, intake forms, 500 GB; extra users $12.50/mo',
      },
      {
        plan: 'Agency',
        price: '$79/mo yearly · $99/mo monthly',
        detail:
          'Removes the "Powered by Zendo" badge, conditional logic, custom CSS/JS, 5 TB; extra users $17/mo',
      },
    ],
    rows: [
      {
        dimension: 'What you pay',
        them: 'Free, or $25–$79/mo yearly ($29–$99 monthly), each plan including one internal user, with extra users at $8, $12.50 or $17 a month.',
        clientos:
          'A one-time licence per domain: $490, $990 or $1,790, or quoted — with unlimited staff. Plus a server, about $10 a month.',
      },
      {
        dimension: 'Where client data lives',
        them: 'On Zendo’s infrastructure.',
        clientos:
          'In your own PostgreSQL database on your own server. Only a licence check-in leaves it, twice a day.',
      },
      {
        dimension: 'Seats',
        them: 'One internal user included on every plan; extra users are billed monthly per seat.',
        clientos: 'Unlimited staff, with 122 permissions grouped into six built-in roles plus your own.',
      },
      {
        dimension: 'Payments',
        them: 'Stripe and manual bank transfer. Their own page lists PayPal, Payoneer and wire transfer as "coming soon". No transaction fees.',
        clientos:
          'Stripe, PayPal, NOWPayments, CoinGate, BTCPay Server, manual crypto wallets and account credit, all live, all straight to your accounts, no cut.',
      },
      {
        dimension: 'Removing the vendor’s name',
        them: 'Removing the "Powered by Zendo" badge is an Agency-plan feature.',
        clientos:
          'Stated on every package: your domain, your brand, and no ClientOS name shown to clients.',
      },
      {
        dimension: 'Published services',
        them: '1 on Essential, 3 on Core, unlimited on Pro and Agency.',
        clientos:
          'Not limited by plan. Every package is described as the full product with unlimited clients, staff and orders.',
      },
      {
        dimension: 'Interface languages',
        them: 'Twelve listed: Danish, Dutch, English, Finnish, French, German, Italian, Norwegian, Polish, Portuguese, Spanish, Swedish.',
        clientos: 'English. Client-facing words and headings can be renamed from the settings.',
      },
      {
        dimension: 'Trying it',
        them: '14 days of full Pro access, then a paid plan or the free one. No credit card required.',
        clientos: 'A read-only demo with sample data for 3 days. No trial of the licence is stated.',
      },
      {
        dimension: 'API',
        them: 'A public API is listed as "coming soon" on the Agency plan.',
        clientos:
          'The API runs on your own domain at /v1 as part of the product, though no public API reference is published.',
      },
      {
        dimension: 'Help desk, leads and finance',
        them: 'Requests, forms, quotes and invoices; no help desk, lead pipeline, expense tracking or profit-and-loss is listed on its pricing page.',
        clientos:
          'A help desk with response targets, a lead pipeline with sources, expenses, profit and loss, and margin by service, all in the one licence.',
      },
    ],
    arithmetic: {
      intro:
        'Zendo’s per-seat pricing is what decides this one. A five-person team on Zendo’s Pro plan — one user included, four extra at $12.50 — against the ClientOS Standard licence:',
      theirLabel: 'Zendo Pro, yearly rate, 5 internal users',
      theirYearly: 1188,
      ours: { label: 'ClientOS Standard, one-time', price: 990 },
      footnote:
        'Zendo Pro at its yearly rate of $49/mo, plus four extra internal users at $12.50/mo each = $99/mo = $1,188 a year; list prices read from getzendo.io/pricing on 29 October 2026. ClientOS Standard is $990 once and includes 12 months of updates and unlimited staff; after those, it keeps running on the version you hold. Neither column includes your own server (about $10 a month). A solo operator reverses this comparison: Zendo Pro alone is $588 a year, and its Essential plan is free.',
    },
    keywords: 'zendo alternative, zendo alternatives, getzendo alternative, self hosted zendo alternative',
  },

  // -------------------------------------------------------------------------
  {
    slug: 'agency-handy-alternative',
    product: 'Agency Handy',
    nav: 'Agency Handy',
    h1: 'A self-hosted Agency Handy alternative',
    title: 'Self-Hosted Agency Handy Alternative — ClientOS',
    description:
      'Agency Handy is a hosted agency client portal. ClientOS does the same job on your own server for a one-time licence. What self-hosting changes — and what we could not verify.',
    theirPositioning: '',
    theirSite: 'https://agencyhandy.com/',
    theirPricingPage: null,
    verified: false,
    checked: AUDIT_DATE,
    lede:
      'Agency Handy is a hosted client portal and service-management tool for agencies. ClientOS does the same job from a server you own, for a one-time licence instead of a subscription. Because this page could not reach Agency Handy’s own pages to check their current terms, it compares the two *models* and states only ClientOS facts as fact.',
    stayWithThem: [
      'You want the vendor to run the infrastructure, patch it and back it up.',
      'Agency Handy already does something specific you depend on. Check their own site — this page deliberately makes no claim about their feature set.',
      'A monthly subscription suits your cash flow better than a licence paid up front.',
      'You need an interface language other than English, which ClientOS does not offer.',
      'You want to trial the product free before paying. ClientOS sells a licence; its demo is read-only and lasts 3 days.',
    ],
    considerClientOS: [
      'Client data has to stay in your own database — the usual requirement for white-label resellers and anyone working under a client NDA.',
      'You are tired of a bill that grows with headcount. ClientOS states unlimited clients, staff and orders on every package, because the licence is counted per domain.',
      'You want clients to be able to pay in crypto. ClientOS lists NOWPayments, CoinGate, your own BTCPay Server and manual wallet payments, next to Stripe and PayPal.',
      'You want the whole operation — store, orders, messages, help desk, invoices, subscriptions, expenses, reports — under one licence rather than split across plan tiers.',
      'You would rather pay once. The licence keeps working on the version you hold after its updates end.',
    ],
    rows: [
      {
        dimension: 'The model',
        them: 'Hosted SaaS: the vendor runs the servers and bills you monthly or annually.',
        clientos:
          'A one-time licence per domain, installed on a Linux VPS you rent. $490, $990 or $1,790, or quoted, plus a server at about $10 a month.',
      },
      {
        dimension: 'Where client data lives',
        them: 'On the vendor’s infrastructure, under their terms — as with any hosted portal.',
        clientos:
          'In your own PostgreSQL database and file storage. The only thing that leaves is a licence check-in twice a day carrying the signed licence and the version you run.',
      },
      {
        dimension: 'Who runs the server',
        them: 'They do. Nothing for you to patch, monitor or back up.',
        clientos:
          'You do. One command installs it and one updates it, but you own the VPS — and the docs are explicit that nothing runs your backups until you schedule them.',
      },
      {
        dimension: 'How the price moves as you grow',
        them: 'Hosted portals typically price by seat, by plan tier, or both.',
        clientos:
          'It does not. Unlimited clients, staff and orders on every package; extra domains are each a separate licence.',
      },
      {
        dimension: 'Payments',
        them: 'Check their own pricing page for the gateways and any transaction fee.',
        clientos:
          'Stripe, PayPal, NOWPayments, CoinGate, BTCPay Server, manual crypto wallets and account credit — straight to your accounts, no cut taken.',
      },
      {
        dimension: 'Leaving',
        them: 'Whatever their export covers. Worth checking before you commit either way.',
        clientos:
          'The database and files are already yours. One command dumps the database, files and settings into a folder you can copy anywhere.',
      },
      {
        dimension: 'Source code',
        them: 'Not offered by hosted SaaS.',
        clientos:
          'Not offered either. ClientOS ships as SHA-256-verified Docker images with a one-command installer: self-hosted, but not open source.',
      },
    ],
    keywords:
      'agency handy alternative, agencyhandy alternative, self hosted agency handy alternative',
  },
];

export function alternativeBySlug(slug: string): Alternative | undefined {
  return alternatives.find((a) => a.slug === slug);
}
