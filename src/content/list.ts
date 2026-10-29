/**
 * The curated list — the awesome-list content this repo started as, kept as
 * data so the page, the README and the GitHub list cannot drift apart.
 *
 * Rules, same as CONTRIBUTING.md: one short neutral line per tool, no
 * superlatives, inclusion is not an endorsement, and affiliation is disclosed.
 */

export type Entry = {
  name: string;
  url: string;
  blurb: string;
  /** Set only where this repo's maintainers have a stake in the tool. */
  disclosure?: string;
  /** An extra link, e.g. the docs. */
  extra?: { label: string; url: string };
};

export type Section = {
  id: string;
  title: string;
  intro?: string;
  entries: Entry[];
};

export const listIntro =
  'Client portal software for agencies: self-hosted and white-label portals, Wayfront (Service Provider Pro) alternatives, plus the onboarding, proposal, project-management, invoicing and reporting tools that sit around them.';

export const listDisclosure =
  'Listings are short and neutral. Inclusion is not an endorsement, and nothing here is ranked. Check each vendor’s current features and pricing yourself before you buy — plans change. This list is maintained by the ClientOS team, and the ClientOS entry is marked as such.';

export const sections: Section[] = [
  {
    id: 'self-hosted-client-portals',
    title: 'Self-hosted client portals',
    intro: 'You run it on your own server; client data stays in your own database.',
    entries: [
      {
        name: 'ClientOS',
        url: 'https://getclientos.com/',
        blurb:
          'Self-hosted, white-label client portal for productized service agencies: service pages, payments (Stripe, PayPal, crypto), briefs, delivery approvals and invoicing on your own server. One-time licence, no monthly fee. Not open source — delivered as verified Docker images.',
        disclosure: 'Disclosure: maintained by the ClientOS team, who also maintain this list.',
        extra: { label: 'Docs', url: 'https://getclientos.com/docs' },
      },
    ],
  },
  {
    id: 'hosted-saas-white-label-client-portals',
    title: 'Hosted (SaaS) white-label client portals',
    intro: 'Subscription portals hosted by the vendor, on their infrastructure.',
    entries: [
      {
        name: 'Wayfront',
        url: 'https://wayfront.com/',
        blurb:
          'Hosted client portal for productized agencies. Formerly Service Provider Pro (spp.co); the footer on wayfront.com states the rename.',
      },
      {
        name: 'SuiteDash',
        url: 'https://suitedash.com/',
        blurb: 'All-in-one hosted client portal and CRM with white-label options.',
      },
      {
        name: 'Assembly',
        url: 'https://assembly.com/',
        blurb: 'Hosted CRM and branded client portal for professional service firms.',
      },
      {
        name: 'Agency Handy',
        url: 'https://agencyhandy.com/',
        blurb: 'Hosted client portal and service management for agencies.',
      },
      {
        name: 'Zendo',
        url: 'https://getzendo.io/',
        blurb:
          'Hosted platform to sell and deliver productized, subscription and custom services.',
      },
      {
        name: 'Clientjoy',
        url: 'https://clientjoy.io/',
        blurb: 'Client management suite for agencies and freelancers.',
      },
      {
        name: 'Moxie',
        url: 'https://www.moxie.com/',
        blurb: 'Client management for freelancers and small agencies.',
      },
      {
        name: 'Plutio',
        url: 'https://www.plutio.com/',
        blurb: 'Business management and client portal for freelancers and teams.',
      },
      {
        name: 'Bonsai',
        url: 'https://www.bonsai.com/',
        blurb: 'Practice management for agencies and freelancers.',
      },
    ],
  },
  {
    id: 'client-onboarding-intake-forms',
    title: 'Client onboarding and intake forms',
    entries: [
      {
        name: 'HoneyBook',
        url: 'https://www.honeybook.com/',
        blurb: 'Client flow management for independent businesses.',
      },
      {
        name: 'Dubsado',
        url: 'https://www.dubsado.com/',
        blurb: 'Client workflows, forms and contracts.',
      },
      {
        name: 'Typeform',
        url: 'https://www.typeform.com/',
        blurb: 'Conversational forms for intake and questionnaires.',
      },
      {
        name: 'Jotform',
        url: 'https://www.jotform.com/',
        blurb: 'Form builder with a large template library.',
      },
      {
        name: 'Tally',
        url: 'https://tally.so/',
        blurb: 'Simple form builder with a generous free tier.',
      },
    ],
  },
  {
    id: 'proposals-e-signatures',
    title: 'Proposals and e-signatures',
    entries: [
      {
        name: 'Proposify',
        url: 'https://www.proposify.com/',
        blurb: 'Proposal software for sales teams and agencies.',
      },
      {
        name: 'Qwilr',
        url: 'https://qwilr.com/',
        blurb: 'Interactive web-page proposals and quotes.',
      },
      {
        name: 'Better Proposals',
        url: 'https://betterproposals.io/',
        blurb: 'Proposal templates and tracking.',
      },
      {
        name: 'DocuSeal',
        url: 'https://www.docuseal.com/',
        blurb: 'Open source document signing, self-hostable.',
      },
      {
        name: 'Portant',
        url: 'https://www.portant.co/',
        blurb: 'Document generation and workflows for Google Workspace.',
      },
    ],
  },
  {
    id: 'project-management',
    title: 'Project management',
    entries: [
      { name: 'Asana', url: 'https://asana.com/', blurb: 'Work and project management.' },
      {
        name: 'Basecamp',
        url: 'https://basecamp.com/',
        blurb: 'Projects with client access built in.',
      },
      { name: 'ClickUp', url: 'https://clickup.com/', blurb: 'Tasks, docs and goals in one app.' },
      {
        name: 'Notion',
        url: 'https://www.notion.com/',
        blurb: 'Docs and wikis; widely used for client hubs.',
      },
      {
        name: 'Teamwork.com',
        url: 'https://www.teamwork.com/',
        blurb: 'Project management built for client work.',
      },
      { name: 'Trello', url: 'https://trello.com/', blurb: 'Kanban boards.' },
    ],
  },
  {
    id: 'invoicing-payments',
    title: 'Invoicing and payments',
    entries: [
      {
        name: 'FreshBooks',
        url: 'https://www.freshbooks.com/',
        blurb: 'Invoicing and accounting for small businesses.',
      },
      {
        name: 'Zoho Invoice',
        url: 'https://www.zoho.com/invoice/',
        blurb: 'Invoicing app from Zoho.',
      },
      {
        name: 'Wave',
        url: 'https://www.wave.com/en/',
        blurb: 'Accounting and invoicing for small businesses.',
      },
      {
        name: 'Stripe Invoicing',
        url: 'https://stripe.com/invoicing',
        blurb: 'Create and send invoices on Stripe.',
      },
    ],
  },
  {
    id: 'scheduling-async-communication',
    title: 'Scheduling and async communication',
    entries: [
      { name: 'Calendly', url: 'https://calendly.com/', blurb: 'Meeting scheduling links.' },
      { name: 'Cal.com', url: 'https://cal.com/', blurb: 'Open source scheduling, self-hostable.' },
      {
        name: 'Loom',
        url: 'https://www.loom.com/',
        blurb: 'Async screen-recorded video updates.',
      },
    ],
  },
  {
    id: 'client-reporting',
    title: 'Client reporting',
    entries: [
      {
        name: 'AgencyAnalytics',
        url: 'https://agencyanalytics.com/',
        blurb: 'Reporting dashboards for marketing agencies.',
      },
      {
        name: 'Looker Studio',
        url: 'https://lookerstudio.google.com/',
        blurb: 'Free Google dashboards and reports.',
      },
    ],
  },
];

/** Total entries, for the page intro — kept derived so it can never be stale. */
export const entryCount = sections.reduce((n, s) => n + s.entries.length, 0);
