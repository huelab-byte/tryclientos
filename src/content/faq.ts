/**
 * The FAQ. Every answer is a restatement of something on getclientos.com — the
 * homepage FAQ, the pricing section or the docs — and nothing here adds a fact
 * those pages do not state. `source` names where to check it.
 *
 * Used both by /faq/ and by the FAQPage JSON-LD on the pages that carry one.
 */

export type FaqItem = {
  q: string;
  /** Answer as plain text. No markup: it goes into JSON-LD as well as the page. */
  a: string;
  source: string;
};

export const faq: FaqItem[] = [
  {
    q: 'What does self-hosted mean in practice?',
    a: 'ClientOS runs on a Linux server you rent and control, with its own PostgreSQL database, its own file storage and its own HTTPS certificates. Email goes out through your Resend account or your own SMTP server, and payments go straight to your gateway accounts. The only thing that leaves your server is a licence check-in twice a day, carrying your signed licence and the version you run — no client, order or invoice data.',
    source: 'getclientos.com FAQ and the "Self-hosted, for real" section',
  },
  {
    q: 'How much does ClientOS cost?',
    a: 'It is a one-time licence, one per domain: Start-up $490 with 3 months of updates, Standard $990 with 12 months, Premium $1,790 with 2 years and two agency licences, and a quoted Custom package with lifetime updates. There is no monthly fee, no per-seat pricing and no cut of your payments. Your only running cost is the server, which the site puts at about $10 a month.',
    source: 'getclientos.com #pricing',
  },
  {
    q: 'What happens when my updates run out?',
    a: 'Nothing stops. ClientOS keeps running on the version you have, and you can renew to get newer releases. Lifetime updates come with the Custom package.',
    source: 'getclientos.com FAQ',
  },
  {
    q: 'What do I need to run it?',
    a: 'A Linux VPS with 2 to 4 GB of RAM running Ubuntu 22.04 or 24.04 or Debian 12, a domain you can add one A record to, your licence key, and an email account to send from — Resend or your own SMTP server. One command installs everything else, including Docker, PostgreSQL, file storage and HTTPS.',
    source: 'getclientos.com FAQ and docs/installation',
  },
  {
    q: 'How long does installing it take?',
    a: 'The docs put the install at about 10 minutes — one command, then connecting your domain in the browser — and the setup page that follows at about two minutes. Allow 20 to 40 minutes in total for first run, because most of that time is spent in your email provider’s dashboard adding SPF and DKIM records.',
    source: 'getclientos.com docs/installation and docs/first-run',
  },
  {
    q: 'I am not technical. Can someone set it up for me?',
    a: 'Yes. Installing is one command, but on the Premium and Custom packages the ClientOS team installs it on your server, connects email and payments, and hands over a working portal.',
    source: 'getclientos.com FAQ',
  },
  {
    q: 'Can I move over from my current client portal?',
    a: 'On Start-up and Standard you bring your clients in yourself from a CSV file, with column mapping. On Premium and Custom the ClientOS team moves your data for you, or builds a migration tool for it. Their published Dot Mirror case study describes a Wayfront importer bringing over clients, orders, messages, invoices and files.',
    source: 'getclientos.com FAQ and the Dot Mirror case study',
  },
  {
    q: 'Which payment methods can my clients use?',
    a: 'Cards and wallets through Stripe, PayPal, crypto through NOWPayments, CoinGate or your own BTCPay Server, manual payments to your own wallets, and account credit. Money goes straight to your accounts and ClientOS takes no cut.',
    source: 'getclientos.com FAQ and /features area 02',
  },
  {
    q: 'Is it really white-label?',
    a: 'It runs on your own domain with your logos, two brand colours, your client-facing words and your email templates. The ClientOS name is not shown to clients anywhere — not in the portal, not in the emails and not on the invoices.',
    source: 'getclientos.com FAQ and /features area 10',
  },
  {
    q: 'Can the ClientOS team see my clients or their data?',
    a: 'No. ClientOS runs entirely on your server, and your database and files never leave it. The only thing it sends is a licence check-in twice a day: the signed licence and the version you run.',
    source: 'getclientos.com FAQ',
  },
  {
    q: 'What happens if my server cannot reach the licence server?',
    a: 'ClientOS keeps working and your team sees a warning saying when the grace period ends, which is seven days after the last successful check-in. After that — or immediately if the key is revoked or released — the admin becomes read-only. The client portal keeps working, checkout and webhooks keep working, and nothing is deleted.',
    source: 'getclientos.com docs/operations',
  },
  {
    q: 'Do I get the source code? Is ClientOS open source?',
    a: 'No. ClientOS is delivered as ready-built, SHA-256-verified Docker images with a one-command installer, which is what keeps installing and updating to a single command. It is self-hosted but not open source. Custom work is available if you need a change.',
    source: 'getclientos.com FAQ',
  },
  {
    q: 'How many clients and staff can I have?',
    a: 'Every package states unlimited clients, staff and orders. The licence is counted per domain, not per seat: Start-up and Standard cover one agency, Premium covers two, and each extra install is its own licence.',
    source: 'getclientos.com #pricing',
  },
  {
    q: 'Who is ClientOS for?',
    a: 'Teams that sell defined services — design, development, marketing, SEO, content, video or consulting, one-off or on retainer. The docs describe it as built for agencies and freelancers who sell services as products: fixed packages, clear deliverables, a delivery time and a price.',
    source: 'getclientos.com FAQ and docs introduction',
  },
  {
    q: 'What languages does the portal support?',
    a: 'The interface is in English. You can rename the words your clients see, such as menu labels and headings, from the settings.',
    source: 'getclientos.com FAQ',
  },
  {
    q: 'Can I try it before buying?',
    a: 'Yes. The instant demo emails you a login to a live ClientOS with sample clients, orders and invoices — the full agency admin and the client portal. It is read-only and works for 3 days. No call, no card.',
    source: 'getclientos.com/demo',
  },
  {
    q: 'Do backups happen automatically?',
    a: 'No, and this is worth knowing before you go live. One command — clientos backup — writes the database, your files and your settings into a folder, but the docs are explicit that nothing runs it for you until you schedule it. They give a cron line for a daily 03:00 backup and tell you to copy the folder off the server.',
    source: 'getclientos.com docs/operations',
  },
  {
    q: 'Who makes ClientOS?',
    a: 'Vibemonk. Licence keys are issued in a vibemonk.com account under Licenses, together with the installer download.',
    source: 'getclientos.com footer and docs/installation',
  },
];
