/**
 * Every fact this site states about ClientOS lives here, once, with the page it
 * was read off. Pages import from this file and never retype a number: a claim
 * that is not in here is a claim this site does not make.
 *
 * See AUDIT.md for the full audit (29 October 2026) and UNVERIFIED.md for what
 * could not be checked.
 */

export const AUDIT_DATE = '29 October 2026';
export const AUDIT_DATE_ISO = '2026-10-29';

export const site = {
  name: 'Self-Hosted Client Portals',
  origin: 'https://huelab-byte.github.io',
  base: '/tryclientos',
  repo: 'https://github.com/huelab-byte/tryclientos',
  official: 'https://getclientos.com',
  docs: 'https://getclientos.com/docs',
  maintainer: 'the ClientOS team',
} as const;

/** The three approved taglines, rotated one per page. */
export const taglines = [
  'Your client portal. Your server. Your data.',
  'The self-hosted client portal your agency owns. Pay once.',
  'Sell, deliver and invoice from a portal on your own server.',
] as const;

/** The approved short description, used verbatim wherever one sentence is needed. */
export const shortDescription =
  'ClientOS is a self-hosted, white-label client portal for service agencies: sell, get paid, deliver and invoice on your own server. One-time license.';

const DEMO = 'https://getclientos.com/demo';
const UTM = 'utm_source=github&utm_medium=referral&utm_campaign=clientos_launch';

/** Every CTA on the site goes through here, so the UTM string exists in one place. */
export function demoUrl(utmContent: string): string {
  return `${DEMO}?${UTM}&utm_content=${utmContent}`;
}

/** The official docs, same campaign tagging. */
export function docsUrl(utmContent: string, path = ''): string {
  return `${site.docs}${path}?${UTM}&utm_content=${utmContent}`;
}

/** The official site, same campaign tagging. */
export function officialUrl(utmContent: string, path = ''): string {
  return `${site.official}${path}?${UTM}&utm_content=${utmContent}`;
}

// ---------------------------------------------------------------------------
// Pricing — getclientos.com/#pricing, cross-checked against the homepage
// JSON-LD `offers` (490 / 990 / 1790 USD).
// ---------------------------------------------------------------------------

export type Package = {
  name: string;
  price: string;
  /** null on Custom, which is quoted — keeps it out of the JSON-LD offers. */
  priceNumber: number | null;
  period: 'one-time' | 'contact';
  updates: string;
  support: string;
  domains: string;
  install: string;
  migration: string;
  highlight: boolean;
  /** The badge getclientos.com puts on Standard. */
  note?: string;
};

export const packages: Package[] = [
  {
    name: 'Start-up',
    price: '$490',
    priceNumber: 490,
    period: 'one-time',
    updates: '3 months of updates',
    support: 'Standard support',
    domains: 'License for one agency',
    install: 'You install it yourself — one command.',
    migration: 'CSV import, so you move your own data in',
    highlight: false,
  },
  {
    name: 'Standard',
    price: '$990',
    priceNumber: 990,
    period: 'one-time',
    updates: '12 months of updates',
    support: 'Priority support',
    domains: 'License for one agency',
    install: 'You install it yourself — one command.',
    migration: 'CSV import, so you move your own data in',
    highlight: true,
    note: 'Most chosen',
  },
  {
    name: 'Premium',
    price: '$1,790',
    priceNumber: 1790,
    period: 'one-time',
    updates: '2 years of updates',
    support: 'Priority support',
    domains: 'License for two agencies',
    install: 'The ClientOS team deploys and installs it on your server for you.',
    migration: 'Data migration by their team, or a migration tool built for your data',
    highlight: false,
  },
  {
    name: 'Custom',
    price: 'Quoted',
    priceNumber: null,
    period: 'contact',
    updates: 'Lifetime updates',
    support: 'Priority support',
    domains: 'Quoted for your agency',
    install: 'Installed for you, with email and payments connected, plus an onboarding call.',
    migration: 'Custom features and integrations for your workflow',
    highlight: false,
  },
];

/** Stated for every package, homepage #pricing "In every package". */
export const inEveryPackage = [
  'The full product: store, orders, messages, billing, tickets, reports',
  'Unlimited clients, staff and orders',
  'Your domain, your brand, no ClientOS name shown to clients',
  'Runs on any Ubuntu or Debian server you choose',
  'Keeps working when updates end',
  '24/7 support',
] as const;

export const pricingFacts = {
  serverCost: 'about $10 a month',
  licenceScope: 'One license per domain, paid once.',
  noFees: 'No monthly fee, no per-seat pricing, and no cut of your payments.',
  extraDomains:
    'Need more domains than your package covers? Each extra install is its own license.',
} as const;

// ---------------------------------------------------------------------------
// The five-step workflow — getclientos.com "How it works"
// ---------------------------------------------------------------------------

export const workflow = [
  {
    n: '01',
    title: 'Sell',
    body:
      'Every service gets its own page on your domain. Visitors pick what they need and order on the spot, without a sales call.',
  },
  {
    n: '02',
    title: 'Get paid',
    body:
      'Card, PayPal or crypto, straight to your accounts. The order exists only once the payment is confirmed.',
  },
  {
    n: '03',
    title: 'Brief',
    body:
      'Right after paying, the client answers your questions in their portal. Work starts with everything you need.',
  },
  {
    n: '04',
    title: 'Deliver',
    body:
      'Hand over the files on the order. The client approves or asks for a revision, and it approves itself if they go quiet.',
  },
  {
    n: '05',
    title: 'Bill and report',
    body:
      'Invoices settle themselves when clients pay, and every month adds up in your reports.',
  },
] as const;

// ---------------------------------------------------------------------------
// The stated counts — getclientos.com "By the numbers" and /features
// ---------------------------------------------------------------------------

export const byTheNumbers = [
  { value: '122', label: 'staff permissions', note: 'grouped into roles you build' },
  { value: '76', label: 'notification types', note: 'in-app and email' },
  { value: '5', label: 'payment gateways', note: 'plus manual crypto and credit' },
  { value: '21', label: 'currencies', note: 'never silently converted' },
  { value: '17', label: 'form field types', note: 'with rules and multi-page' },
  { value: '7', label: 'optional modules', note: 'switch off what you do not use' },
] as const;

export const featureScope = '12 areas and 78 features';

// ---------------------------------------------------------------------------
// Feature pages. `area` records which numbered area(s) of
// getclientos.com/features the page summarises.
// ---------------------------------------------------------------------------

export type Feature = {
  slug: string;
  nav: string;
  h1: string;
  title: string;
  description: string;
  lede: string;
  area: string;
  /** The real anchor id on getclientos.com/features for this area. */
  anchor: string;
  docs: string;
  points: { title: string; body: string }[];
};

export const features: Feature[] = [
  {
    slug: 'service-store-and-checkout',
    nav: 'Store and checkout',
    h1: 'A service store and checkout on your own domain',
    title: 'Service Store & Checkout — Self-Hosted Client Portal',
    description:
      'Sell productized services from your own domain: a sales page per service, five pricing models, packages, add-ons, coupons and a checkout that only creates an order once payment clears.',
    lede:
      'ClientOS gives every service you sell its own page on your domain, priced the way the work is actually scoped. The buyer picks a package, pays, and answers your brief — no sales call in the middle.',
    area: 'Areas 01 (Store) and 02 (Checkout) of getclientos.com/features',
    anchor: 'store',
    docs: '/services',
    points: [
      {
        title: 'A sales page for every service',
        body:
          'Each service gets its own page, which can be draft, private or public, with a live preview while you edit it. Packages, quantities, volume discounts and add-ons let you price the way the work is scoped.',
      },
      {
        title: 'Five pricing models',
        body:
          'Tiered by quantity for countable work, fixed price for projects, hourly for consulting, quote-on-request for custom scopes, and free for lead magnets. One-time or monthly, chosen on the same page.',
      },
      {
        title: 'The order exists only once payment is confirmed',
        body:
          'Checkout waits for the payment provider. Card and wallets through Stripe, PayPal, crypto through NOWPayments, CoinGate or your own BTCPay Server, manual wallet payments, and account credit.',
      },
      {
        title: 'Requirements collected straight after paying',
        body:
          'Your questions are answered in the portal the moment the money clears, so work starts with a complete brief instead of a chase.',
      },
      {
        title: 'Coupons, tax and a processing fee',
        body:
          'Percentage or fixed-amount codes with limits and end dates, your own tax rate and registration number, and an optional processing fee. 21 currencies, never silently converted.',
      },
      {
        title: 'An account in one step',
        body:
          'Buyers get a sign-in code by email — no password to invent. Signup can be open or closed, with Cloudflare Turnstile against bots.',
      },
      {
        title: 'Store analytics, and costs that stay private',
        body:
          'See the path from page view to paid and where people leave. Item costs and margins are for your team only and are never sent to a client.',
      },
    ],
  },
  {
    slug: 'orders-and-delivery',
    nav: 'Orders and delivery',
    h1: 'Orders your clients can follow, from brief to approval',
    title: 'Orders & Delivery — Self-Hosted Agency Client Portal',
    description:
      'Briefs, statuses, hand-overs, revisions and approvals that auto-close when a client goes quiet — plus a team task board that builds its own cards from orders and tickets.',
    lede:
      'An order in ClientOS carries the brief, the files, the conversation, the invoice and the margin. It always shows whose move it is, and it keeps moving when a client goes quiet.',
    area: 'Areas 03 (Orders) and 04 (Workflow) of getclientos.com/features',
    anchor: 'orders',
    docs: '/orders',
    points: [
      {
        title: 'Statuses the work moves, not a person',
        body:
          'Awaiting brief, in progress, delivered, completed — moved by briefs, hand-overs and approvals, with custom statuses if yours are different. Your team can always step in by hand.',
      },
      {
        title: 'Delivery on a clock',
        body:
          'Every order shows whose move it is and how long it has taken: time with you, time with the client, and whether it was delivered on time.',
      },
      {
        title: 'Revisions, approvals and auto-approve',
        body:
          'The client approves the hand-over or asks for a revision. If they go quiet, the delivery accepts itself after the wait you set — so a silent client stops holding your invoice open.',
      },
      {
        title: 'Chase every missing brief at once',
        body:
          'Paid orders with nothing to work from are listed together, and every waiting client can be reminded in one action.',
      },
      {
        title: 'Cancellations and refunds with a reason',
        body:
          'When a client asks to cancel you approve with a refund or decline with a reason, and ask for a rating after each delivery.',
      },
      {
        title: 'A task board that writes its own cards',
        body:
          'Orders, revisions, tickets and payments become cards on a kanban board with subtasks, priority, due dates and comments. Per-service checklists attach themselves to new orders.',
      },
      {
        title: 'Lists that scale, and a ⌘K palette',
        body:
          'Search, filters, bulk actions and CSV export on every list, and a command palette to jump straight to an order, client or invoice.',
      },
    ],
  },
  {
    slug: 'invoicing-and-payments',
    nav: 'Invoicing and finance',
    h1: 'Invoices, subscriptions and a profit and loss that adds itself up',
    title: 'Invoicing, Subscriptions & Finance — ClientOS',
    description:
      'Gapless invoice numbering, pay links, partial payments, credit notes and subscriptions that bill themselves — with profit and loss, expenses and margin by service.',
    lede:
      'Invoicing in ClientOS settles itself off the payment that created the order, and the month adds up without a spreadsheet. Money goes straight to your own gateway accounts.',
    area: 'Areas 07 (Billing) and 08 (Finance) of getclientos.com/features',
    anchor: 'billing',
    docs: '/invoices',
    points: [
      {
        title: 'Numbering that reads in order',
        body:
          'Invoices run INV-1001, INV-1002 in one sequence and credit notes have their own CN-1001 series. An issued invoice keeps its number forever — voiding it does not free the number.',
      },
      {
        title: 'Pay links anyone can use',
        body:
          'Share a link and the client pays without an account. Copy the pay link, download the PDF or send the invoice again from the invoice page.',
      },
      {
        title: 'Partial payments, refunds and credit notes',
        body:
          'Take part of an invoice now and the balance later, refund to card, PayPal or account credit, and issue credit notes. Overpayments become credit that is spent first next time.',
      },
      {
        title: 'Subscriptions that bill themselves',
        body:
          'Each renewal raises its own invoice and its own order. Card on file, retries on your dunning schedule, MRR, client self-service, and reminders for renewals and expiring cards.',
      },
      {
        title: 'Profit and loss, month by month',
        body:
          'Invoiced, credit notes, revenue, item costs, delivery expenses, gross and net profit, laid out by month. Every figure is per currency — nothing is silently converted.',
      },
      {
        title: 'Expenses and margin by service',
        body:
          'Log expenses with receipts, link them to orders, set recurring costs, and see which services actually earn their keep.',
      },
      {
        title: 'Reports and CSV everywhere',
        body:
          'Delivery reports with on-time rate by month, client and person; a monthly report written for every client; and CSV export of orders, invoices and expenses.',
      },
    ],
  },
  {
    slug: 'white-label-client-portal',
    nav: 'White-label',
    h1: 'A white-label client portal your clients read as yours',
    title: 'White Label Client Portal Software — Self-Hosted',
    description:
      'Your domain, five logo slots and two brand colours that repaint the portal, admin, sign-in, emails and invoices. Rename the words clients read. Clients never see ClientOS.',
    lede:
      'White-label in ClientOS is not a badge you pay to remove. The portal runs on your own domain, in your own colours, with your words — and the ClientOS name appears nowhere a client can see.',
    area: 'Area 10 (White-label) of getclientos.com/features',
    anchor: 'brand',
    docs: '/branding',
    points: [
      {
        title: 'Your own domain, on your own server',
        body:
          'The portal, the admin and the API all live on one domain you choose, such as clients.youragency.com, with HTTPS certificates issued and renewed for you.',
      },
      {
        title: 'Two colours, repainted everywhere',
        body:
          'Pick a primary and an accent colour and ClientOS repaints the admin, the client portal, the sign-in screen, your emails and your invoices to match. Button labels flip to dark type when white would be unreadable.',
      },
      {
        title: 'Five logo slots',
        body:
          'Marks for light and dark backgrounds, plus icons, so the sidebar, the sign-in screen and your invoices each get a logo drawn for that background.',
      },
      {
        title: 'Rename the words clients read',
        body:
          'If you sell projects rather than orders, "Orders" reads "Projects" and "Support" reads "Help". Menu labels and headings are yours to set, with no code.',
      },
      {
        title: 'A portal menu and dashboard you arrange',
        body:
          'Reorder, rename, hide or add links; choose which cards the client dashboard shows; add a welcome message and a welcome video.',
      },
      {
        title: 'Every email, editable',
        body:
          'Each notification email can be rewritten with a live preview, sent from your own address through your own Resend account or SMTP server.',
      },
      {
        title: 'Clients never see ClientOS',
        body:
          'Not in the portal, not in the emails, not on the invoices. The product name does not appear on any client-facing surface.',
      },
    ],
  },
  {
    slug: 'messages-and-support',
    nav: 'Messages and help desk',
    h1: 'Conversations and a help desk next to the work',
    title: 'Client Messaging & Help Desk — ClientOS Portal',
    description:
      'A conversation per client and per order, team channels, priced offers accepted in chat, and a built-in help desk with first-response targets counted in your business hours.',
    lede:
      'Client talk in ClientOS sits beside the order it is about. You can quote work in the thread and have it accepted and paid in one click, and support tickets live in the same portal.',
    area: 'Areas 05 (Messages) and 06 (Support) of getclientos.com/features',
    anchor: 'messaging',
    docs: '/messaging',
    points: [
      {
        title: 'One thread per client, one per order',
        body:
          'Plus your team’s own channels and direct messages, so the internal conversation about a job sits next to the client one without leaking into it.',
      },
      {
        title: 'Custom offers, accepted in the thread',
        body:
          'Send a priced offer inside the conversation — line items, a discount, a total — and the client accepts and pays it in one click. No separate proposal tool.',
      },
      {
        title: 'Presence, typing and waiting reminders',
        body:
          'See who is online and who is typing, and get nudged when a client or a colleague has been waiting for a reply.',
      },
      {
        title: 'Saved replies, mentions and reactions',
        body:
          'One-click answers for the questions you get weekly, plus mentions, reactions and files in the thread.',
      },
      {
        title: 'A help desk in the same portal',
        body:
          'A ticket queue with statuses, priority, assignee and search; internal notes; merge and snooze; auto-reply, auto-close and a rating when a ticket closes.',
      },
      {
        title: 'Response targets in your business hours',
        body:
          'First-response targets count only the hours you actually work, so a Friday-evening ticket is not already late on Monday morning.',
      },
      {
        title: 'Email arrives as tickets',
        body:
          'A client who replies by email lands in the queue rather than in one person’s inbox. Files are private, reached through signed links that expire.',
      },
    ],
  },
  {
    slug: 'leads-and-growth',
    nav: 'Leads and growth',
    h1: 'A lead pipeline, forms and tracking from first visit to paid',
    title: 'Lead Pipeline & Tracking — Agency Client Portal',
    description:
      'Capture leads from your website, work them through a pipeline with source and value, track short links and a funnel to paid, and reward the partners who send you work.',
    lede:
      'The growth side of ClientOS answers one question: where did the money come from? Leads carry their source, short links show the funnel to paid, and partners get paid for what they send.',
    area: 'Area 09 (Growth) of getclientos.com/features',
    anchor: 'growth',
    docs: '/leads-tracking',
    points: [
      {
        title: 'A pipeline with the source of every lead',
        body:
          'New, contacted, qualified, proposal, won and lost, with open value, won value and win rate — and where each lead came from: search, social, a tracking link or direct.',
      },
      {
        title: 'Your website’s forms send leads straight in',
        body:
          'A capture key and a snippet on your own site put submissions into the pipeline, protected against spam, without an integration platform in the middle.',
      },
      {
        title: 'Follow-up emails that send themselves',
        body:
          'A thank-you, then days 2, 5 and 10 — so a lead that arrives on a Friday is not waiting until someone remembers.',
      },
      {
        title: 'Short links and a funnel to paid',
        body:
          'Create a tracking link for a post or a campaign and see visited, stayed, clicked checkout and paid, for every source.',
      },
      {
        title: 'Conversions back to the ad platforms',
        body:
          'Send paid orders to the Meta Conversions API, and export offline conversions for Google Ads.',
      },
      {
        title: 'A referral programme',
        body:
          'Partner links, commissions and recorded payouts, so the people sending you work can see and be paid for it.',
      },
      {
        title: 'A form builder with 17 field types',
        body:
          'Client-profile fields, project-data fields and layout utilities, with rules and multi-page forms — for lead capture, enquiries and client onboarding.',
      },
    ],
  },
  {
    slug: 'self-hosting-and-install',
    nav: 'Self-hosting',
    h1: 'Self-hosting without the server headache',
    title: 'Self-Hosted Install: One Command, One Server — ClientOS',
    description:
      'One A record, one command, and ClientOS runs on your own Linux VPS: Docker, PostgreSQL, file storage and automatic HTTPS. Update, back up and roll back with one command each.',
    lede:
      'There are no Docker files to write, no environment variables to fill in and no proxy to configure. If you can paste a command into a terminal, you can run ClientOS.',
    area: 'Area 12 (Self-hosted) of getclientos.com/features, plus the installation docs',
    anchor: 'platform',
    docs: '/installation',
    points: [
      {
        title: 'One domain, one A record',
        body:
          'Point one address — clients.youragency.com, say — at your server with a single A record. The portal is at /, the admin at /admin and the API at /v1, all on that one domain.',
      },
      {
        title: 'One command installs everything',
        body:
          'The installer checks the server and your license, installs Docker if it is missing, generates every password, downloads ClientOS with every file verified, and turns on HTTPS through Caddy and Let’s Encrypt.',
      },
      {
        title: 'Finish in the browser',
        body:
          'A setup page, guarded by a key only your terminal has seen, takes your agency name, region, two brand colours and the owner account. Seven short steps.',
      },
      {
        title: 'A modest server is enough',
        body:
          'Ubuntu 22.04 or 24.04, or Debian 12, with 2 GB of memory minimum and 4 GB recommended, 1–2 vCPU and 10 GB of free disk. Hetzner, DigitalOcean, Vultr, Linode and AWS Lightsail are all named in the docs.',
      },
      {
        title: 'One command each, after that',
        body:
          'clientos update backs up, downloads and restarts; clientos rollback goes back one release; clientos backup writes the database, files and settings into a folder you can copy anywhere.',
      },
      {
        title: 'Nothing else to schedule',
        body:
          'Renewals, reminders, auto-approvals and overdue chasing run inside the API, claimed in PostgreSQL. There is no separate worker and no system cron to set up.',
      },
      {
        title: 'Switch off what you do not use',
        body:
          'Seven modules — help desk, messages, coupons, subscriptions, forms, traffic tracking and the referral programme — can each be turned off. The menus disappear and the data stays.',
      },
    ],
  },
  {
    slug: 'security-and-data-ownership',
    nav: 'Security and data',
    h1: 'Your clients’ data never touches someone else’s server',
    title: 'Security & Data Ownership — Self-Hosted Client Portal',
    description:
      'Clients, orders, invoices and files stay in your own PostgreSQL database. AES-256-GCM sealed keys, expiring signed file links, 2FA, 122 permissions and an audited read-only sign-in-as.',
    lede:
      'This is the reason to self-host. Every client, order, message, invoice and file lives in a database on a server you rent and control, and the only thing that leaves it is a licence check-in.',
    area: 'Area 11 (Security) and the "Self-hosted, for real" section of getclientos.com',
    anchor: 'security',
    docs: '/team-permissions',
    points: [
      {
        title: 'Three things leave your server, and that is all',
        body:
          'The emails you send through your own Resend account or SMTP server, the payments going to your own gateways, and a licence check-in twice a day carrying the signed licence and the version you run — no client, order or invoice data.',
      },
      {
        title: 'Keys sealed with AES-256-GCM',
        body:
          'Gateway, email and storage credentials are encrypted in the database with a secret that exists only on your server, and the docs describe how to rotate it.',
      },
      {
        title: 'A least-privilege database login',
        body:
          'The API cannot change the schema, and refuses to start as a superuser or as the table owner.',
      },
      {
        title: 'Private files behind expiring links',
        body:
          'Every file except your logo is private and reached through a signed link that expires — 15 minutes by default.',
      },
      {
        title: '122 permissions and six built-in roles',
        body:
          'Owner, ops manager, account manager, writer, outreach and finance, plus roles you build yourself. Clients get their own per-company roles: owner, admin, member and viewer.',
      },
      {
        title: 'Two-factor, and an audited "sign in as"',
        body:
          'Passwordless sign-in codes, Google sign-in and 2FA that can be required for the whole team. Viewing a client’s portal is read-only, time-limited to 30 minutes, and your reason and every page you open are logged.',
      },
      {
        title: 'HTTPS, HSTS and two open ports',
        body:
          'Certificates are issued and renewed automatically; only ports 80 and 443 are open; and every release file is checked against its SHA-256 before it is installed.',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Stack — getclientos.com/features and the docs introduction
// ---------------------------------------------------------------------------

export const stack = [
  { name: 'Next.js 16', role: 'Portal and admin' },
  { name: 'React 19', role: 'Interface' },
  { name: 'Tailwind CSS 4', role: 'Themed from your two brand colours' },
  { name: 'TypeScript', role: 'Typed end to end' },
  { name: 'NestJS on Fastify', role: 'The API' },
  { name: 'PostgreSQL 18', role: 'All of your data' },
  { name: 'Redis 7', role: 'Live presence only' },
  { name: 'Docker', role: 'Every part in its own container' },
  { name: 'Caddy', role: 'Automatic Let’s Encrypt HTTPS' },
  { name: 'Node.js', role: 'Runtime' },
] as const;

export const integrations = [
  'Stripe',
  'PayPal',
  'NOWPayments',
  'CoinGate',
  'BTCPay Server',
  'Resend',
  'Cloudflare R2',
  'Cloudflare Turnstile',
  'Google sign-in',
] as const;

// ---------------------------------------------------------------------------
// Server requirements — getclientos.com/docs/installation
// ---------------------------------------------------------------------------

export const serverSpec = [
  { resource: 'Operating system', min: 'Ubuntu 22.04 or Debian 12', rec: 'Ubuntu 24.04 LTS' },
  { resource: 'CPU', min: '1 vCPU', rec: '2 vCPU' },
  { resource: 'Memory', min: '2 GB', rec: '4 GB' },
  { resource: 'Free disk', min: '10 GB', rec: '20 GB or more, SSD' },
  { resource: 'Network', min: 'Public IPv4, ports 80 and 443 open', rec: '—' },
] as const;

// ---------------------------------------------------------------------------
// The demo — getclientos.com/demo
// ---------------------------------------------------------------------------

export const demo = {
  what: 'the full agency admin and client portal with sample data',
  readOnly: 'Read-only, so you can click anything',
  duration: 'Your login works for 3 days',
  cost: 'No call, no card.',
} as const;
