/**
 * JSON-LD builders. `@context` is added by Base.astro, so nothing here repeats it.
 *
 * One deliberate omission: **no aggregateRating and no review anywhere.**
 * getclientos.com publishes no rating or review score, so inventing one would
 * be both a false claim and a structured-data violation.
 */

import { packages, shortDescription, site, stack } from '../content/site';
import type { FaqItem } from '../content/faq';

/** The product itself. Mirrors the SoftwareApplication JSON-LD on getclientos.com. */
export function softwareApplication(url: string) {
  return {
    '@type': 'SoftwareApplication',
    name: 'ClientOS',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Client portal software',
    operatingSystem: 'Linux (Docker)',
    description: shortDescription,
    url: site.official,
    softwareHelp: { '@type': 'CreativeWork', url: site.docs },
    publisher: {
      '@type': 'Organization',
      name: 'Vibemonk',
      url: 'https://vibemonk.com',
    },
    softwareRequirements:
      'A Linux VPS running Ubuntu 22.04/24.04 or Debian 12, 2–4 GB RAM, a public IPv4 address and one A record pointing a domain at it.',
    featureList: [
      'Self-hosted on your own Linux server',
      'White-label client portal on your own domain',
      'Service store with five pricing models, packages and add-ons',
      'Checkout via Stripe, PayPal, NOWPayments, CoinGate or BTCPay Server',
      'Order delivery with briefs, revisions and auto-approval',
      'Invoices, credit notes, pay links and subscriptions',
      'Built-in help desk and client messaging',
      'Lead pipeline, forms and traffic tracking',
      'Profit and loss, expenses and margin by service',
      '122 staff permissions with six built-in roles',
    ],
    offers: packages
      .filter((p) => p.priceNumber !== null)
      .map((p) => ({
        '@type': 'Offer',
        name: `ClientOS ${p.name}`,
        price: p.priceNumber,
        priceCurrency: 'USD',
        url: p.buyUrl ?? `${site.official}/#pricing`,
        availability: 'https://schema.org/InStock',
        description: `One-time license, ${p.updates.toLowerCase()}.`,
      })),
    isAccessibleForFree: false,
    mainEntityOfPage: url,
  };
}

/** FAQPage. Only ever built from the vetted answers in content/faq.ts. */
export function faqPage(items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/** A content page that is primarily an article, e.g. a comparison. */
export function webPage({
  url,
  name,
  description,
  modified,
}: {
  url: string;
  name: string;
  description: string;
  modified: string;
}) {
  return {
    '@type': 'WebPage',
    '@id': url,
    url,
    name,
    description,
    dateModified: modified,
    isPartOf: {
      '@type': 'WebSite',
      name: site.name,
      url: new URL(import.meta.env.BASE_URL, import.meta.env.SITE).href,
    },
    publisher: { '@type': 'Organization', name: 'Vibemonk', url: 'https://vibemonk.com' },
  };
}

/** The curated list and the template index are both ItemLists. */
export function itemList(name: string, items: { name: string; url: string }[]) {
  return {
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: it.url,
    })),
  };
}

/** A downloadable template. */
export function howToTemplate({
  url,
  name,
  description,
  download,
}: {
  url: string;
  name: string;
  description: string;
  download: string;
}) {
  return {
    '@type': 'CreativeWork',
    '@id': url,
    url,
    name,
    description,
    encodingFormat: 'text/markdown',
    license: 'https://creativecommons.org/publicdomain/zero/1.0/',
    isAccessibleForFree: true,
    associatedMedia: { '@type': 'MediaObject', contentUrl: download },
  };
}

/** Exported so the stack list on /features/ and the schema cannot diverge. */
export const stackNames = stack.map((s) => s.name);
