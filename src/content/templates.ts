/**
 * The four free agency templates. The body of each is the markdown that
 * templates/*.md holds, so the rendered page and the download are one source —
 * scripts/build-downloads.mjs writes public/downloads/ from this file.
 *
 * Deliberately vendor-neutral: these work with any client portal, or none.
 */

export type TemplateBlock =
  | { kind: 'h2'; text: string }
  | { kind: 'p'; text: string }
  | { kind: 'checklist'; items: string[] }
  | { kind: 'numbered'; items: string[] }
  | { kind: 'bullets'; items: string[] }
  | { kind: 'table'; head: string[]; rows: string[][] }
  | { kind: 'note'; text: string };

export type Template = {
  slug: string;
  /** The markdown filename in templates/ and in public/downloads/. */
  file: string;
  nav: string;
  h1: string;
  title: string;
  description: string;
  lede: string;
  /** Why this exists and how to use it — page only, not in the download. */
  howToUse: string;
  blocks: TemplateBlock[];
};

export const templates: Template[] = [
  {
    slug: 'client-onboarding-checklist',
    file: 'client-onboarding-checklist.md',
    nav: 'Client onboarding checklist',
    h1: 'Client onboarding checklist',
    title: 'Free Client Onboarding Checklist for Agencies',
    description:
      'A free, vendor-neutral client onboarding checklist for agencies: contract and payment, access and assets, kickoff, and the first 30 days. Copy it or download the markdown.',
    lede:
      'Everything that has to be true before work starts, in the order it has to be true. Most onboarding goes wrong in the gap between "they signed" and "we have what we need" — this list closes it.',
    howToUse:
      'Copy it into whatever your team already uses: a portal checklist, a project template, a task list. The four groups are deliberately sequential — nothing in "Kickoff" works until "Access & assets" is done. Delete the lines that do not apply to your service; a checklist with items nobody ticks stops being read.',
    blocks: [
      { kind: 'h2', text: 'Before kickoff' },
      {
        kind: 'checklist',
        items: [
          'Contract or SOW signed; scope, deliverables, revision limits and timeline agreed',
          'First invoice or deposit sent and paid',
          'Main contact, decision-maker and billing contact recorded',
          'Client added to the portal or project tool; welcome email sent',
          'Kickoff call scheduled; kickoff questionnaire sent',
        ],
      },
      { kind: 'h2', text: 'Access and assets' },
      {
        kind: 'checklist',
        items: [
          'Brand assets: logo files, fonts, colours, guidelines',
          'Logins and access shared through a password manager or an invite — never plain email',
          'Analytics, CMS, ad accounts, hosting and domain or DNS access, as relevant',
          'Previous work, reports and research',
        ],
      },
      { kind: 'h2', text: 'Kickoff' },
      {
        kind: 'checklist',
        items: [
          'Goals and success metrics confirmed',
          'Communication channel, response times and meeting cadence agreed',
          'Approval process agreed, and who signs off named',
          'Project plan and first milestones shared',
        ],
      },
      { kind: 'h2', text: 'First 30 days' },
      {
        kind: 'checklist',
        items: [
          'First deliverable or quick win delivered',
          'Check-in on satisfaction and on the process itself',
          'Recurring reporting set up',
        ],
      },
      {
        kind: 'note',
        text: 'Two lines carry most of the value: naming the decision-maker, and agreeing the approval process before the first deliverable. An approval nobody owns is the most common reason a project sits still.',
      },
    ],
  },

  {
    slug: 'project-kickoff-questionnaire',
    file: 'project-kickoff-questionnaire.md',
    nav: 'Project kickoff questionnaire',
    h1: 'Project kickoff questionnaire',
    title: 'Free Project Kickoff Questionnaire for Agencies',
    description:
      'Fifteen questions to ask a new client before work starts: business, project, brand and process. Free, vendor-neutral, CC0. Copy it or download the markdown.',
    lede:
      'Fifteen questions that between them prevent most revision rounds. Send it with the kickoff invitation, not after the call — a client who has answered question 12 in writing is a different client on the call.',
    howToUse:
      'Paste it into your intake form, your portal’s requirements form, or a shared document. Keep the question numbers: they make it easy to say "you answered 6 as X" in a later conversation. Questions 12 to 14 are the ones agencies skip and then wish they had asked, so resist cutting them to make the form shorter.',
    blocks: [
      { kind: 'h2', text: 'Business' },
      {
        kind: 'numbered',
        items: [
          'Describe your business and what makes it different, in two or three sentences.',
          'Who are your ideal customers?',
          'Who are your main competitors? What do you like or dislike about what they do?',
        ],
      },
      { kind: 'h2', text: 'Project' },
      {
        kind: 'numbered',
        items: [
          'What problem should this project solve?',
          'What does success look like in 3 months and in 12? Which metrics matter?',
          'What are the must-haves, and what are the nice-to-haves?',
          'Are there hard deadlines or launch dates?',
          'What is the budget range, and are there constraints we should know about?',
        ],
      },
      { kind: 'h2', text: 'Brand and style' },
      {
        kind: 'numbered',
        items: [
          'Three words that describe your brand.',
          'Examples you like — and dislike — with the reason for each.',
          'Existing guidelines, assets or copy we have to use?',
        ],
      },
      { kind: 'h2', text: 'Process' },
      {
        kind: 'numbered',
        items: [
          'Who gives feedback, and who has final approval?',
          'Preferred channel and meeting frequency?',
          'Anything that went wrong with a past vendor that we should avoid?',
          'Anything else we should know?',
        ],
      },
      {
        kind: 'note',
        text: 'Question 10 — the examples they dislike, with reasons — saves more revision rounds than any other question here. Taste is easier to read from rejections than from approvals.',
      },
    ],
  },

  {
    slug: 'agency-sop-client-communication',
    file: 'sop-client-communication.md',
    nav: 'Client communication SOP',
    h1: 'Agency SOP: client communication',
    title: 'Free Agency SOP Template: Client Communication (CC0)',
    description:
      'A standard operating procedure for agency client communication: channels, response times, cadence, written rules and escalation. Free, vendor-neutral, CC0.',
    lede:
      'One page your account managers can actually follow, so every client gets the same experience whoever is handling them. Adjust the response times to your own SLA before you publish it — the numbers here are a starting point, not a standard.',
    howToUse:
      'Put it where the team will see it: your wiki, your portal’s internal notes, your onboarding doc. Then do the part that makes it real — agree the response times with the people who have to hit them, and make sure the client-facing version of those numbers matches what your contracts promise.',
    blocks: [
      {
        kind: 'p',
        text: '**Purpose:** consistent, predictable communication with every client. **Owner:** the account manager.',
      },
      { kind: 'h2', text: 'Channels' },
      {
        kind: 'bullets',
        items: [
          'Project updates, files and approvals: the client portal or project tool — the single source of truth',
          'Quick questions: the agreed chat channel; decisions get logged back to the portal',
          'Urgent issues: phone first, then a written follow-up',
        ],
      },
      { kind: 'h2', text: 'Response times, in business hours' },
      {
        kind: 'table',
        head: ['Kind of message', 'Respond within'],
        rows: [
          ['Urgent — site down, campaign broken', '2 hours'],
          ['Normal questions', '1 business day'],
          ['Change requests', 'Acknowledge in 1 business day, estimate in 3'],
        ],
      },
      { kind: 'p', text: 'Adjust all three to your own SLA.' },
      { kind: 'h2', text: 'Cadence' },
      {
        kind: 'bullets',
        items: [
          'Weekly: a short written status update — done, next, blocked, needs the client',
          'Monthly: the report, plus a review call',
          'Quarterly: a strategy review',
        ],
      },
      { kind: 'h2', text: 'Rules' },
      {
        kind: 'numbered',
        items: [
          'Confirm every decision in writing.',
          'Out-of-scope requests get a written estimate before any work starts.',
          'Bad news early, with a proposed fix.',
          'Every action item has a named owner and a date.',
          'Log holidays and out-of-office ahead of time, with a backup contact.',
        ],
      },
      { kind: 'h2', text: 'Escalation' },
      {
        kind: 'p',
        text: 'Account manager → project lead → agency owner. Record the issue, the resolution and the follow-up.',
      },
      {
        kind: 'note',
        text: 'Rule 2 is the one that protects margin. An out-of-scope request answered with "sure, we will fit it in" is the single most common way a profitable retainer stops being profitable.',
      },
    ],
  },

  {
    slug: 'monthly-client-report',
    file: 'monthly-client-report.md',
    nav: 'Monthly client report',
    h1: 'Monthly client report outline',
    title: 'Free Monthly Client Report Template for Agencies',
    description:
      'An eight-section monthly client report outline for agencies: summary, KPIs, work completed, results, risks, next month, client requests and budget. Free, CC0.',
    lede:
      'Eight sections, in the order a client reads them. The summary goes first because for many clients it is the only part they read — which is also why sections 5 and 7 have to be in it.',
    howToUse:
      'Fill it in the same order every month and keep the headings stable, so a client can compare March with April without re-learning the document. Section 7 is the one that earns the report: a report that asks the client for nothing tends to produce a month where nothing was unblocked.',
    blocks: [
      {
        kind: 'p',
        text: 'Title it: **Monthly client report — [Client] — [Month YYYY]**',
      },
      { kind: 'h2', text: '1. Summary' },
      {
        kind: 'p',
        text: 'Three to five bullets: top wins, key numbers against target, the main issue, and next month’s focus.',
      },
      { kind: 'h2', text: '2. Goals and KPIs' },
      {
        kind: 'table',
        head: ['KPI', 'Target', 'This month', 'Last month', 'Change'],
        rows: [['', '', '', '', '']],
      },
      { kind: 'h2', text: '3. Work completed' },
      { kind: 'p', text: 'Deliverables shipped, with links.' },
      { kind: 'h2', text: '4. Results and insights' },
      { kind: 'p', text: 'What worked, what did not, and why.' },
      { kind: 'h2', text: '5. Issues and risks' },
      {
        kind: 'p',
        text: 'Blockers, items waiting on the client, and a proposed fix for each.',
      },
      { kind: 'h2', text: '6. Next month’s plan' },
      { kind: 'p', text: 'Priorities, owners, dates.' },
      { kind: 'h2', text: '7. Requests for the client' },
      {
        kind: 'p',
        text: 'Approvals, access or input you need, each with a due date.',
      },
      { kind: 'h2', text: '8. Budget and hours' },
      { kind: 'p', text: 'Used against planned, and any out-of-scope work.' },
      {
        kind: 'note',
        text: 'If a KPI moved the wrong way, it goes in section 1, not buried in section 4. A client who finds bad news on page three stops trusting page one.',
      },
    ],
  },
];

export function templateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}

// ---------------------------------------------------------------------------
// Markdown rendering, shared by the page and by the downloadable file.
// ---------------------------------------------------------------------------

/** Minimal inline markdown: **bold** only, which is all these templates use. */
export function inlineToHtml(text: string): string {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escaped.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

/** The template as a standalone markdown file — what public/downloads/ serves. */
export function toMarkdown(t: Template): string {
  const out: string[] = [`# ${t.h1}`, ''];
  out.push(t.lede, '');

  for (const block of t.blocks) {
    switch (block.kind) {
      case 'h2':
        out.push(`## ${block.text}`, '');
        break;
      case 'p':
        out.push(block.text, '');
        break;
      case 'note':
        out.push(`> ${block.text}`, '');
        break;
      case 'checklist':
        out.push(...block.items.map((i) => `- [ ] ${i}`), '');
        break;
      case 'bullets':
        out.push(...block.items.map((i) => `- ${i}`), '');
        break;
      case 'numbered':
        out.push(...block.items.map((i, n) => `${n + 1}. ${i}`), '');
        break;
      case 'table':
        out.push(`| ${block.head.join(' | ')} |`);
        out.push(`|${block.head.map(() => '---').join('|')}|`);
        out.push(...block.rows.map((r) => `| ${r.join(' | ')} |`), '');
        break;
    }
  }

  out.push(
    '---',
    '',
    'Free to use, change and republish: released under CC0 1.0 (public domain).',
    'From https://huelab-byte.github.io/tryclientos/templates/ — a free resource from the',
    'ClientOS team. ClientOS is a self-hosted, white-label client portal for service',
    'agencies: https://getclientos.com',
    '',
  );

  return out.join('\n');
}
