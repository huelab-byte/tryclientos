/**
 * Renders one branded 1200×630 social card per page, plus a default and the
 * apple-touch-icon, into public/og/.
 *
 * SVG → PNG via resvg, with General Sans loaded from scripts/fonts/ — resvg
 * will not fetch a webfont, so the faces are passed in as files and no social
 * network ever sees a fallback typeface.
 *
 * The design is the ClientOS brand as audited: ink #12141c, accent #fd4105,
 * the real sparkle-disc mark, General Sans for the headline.
 *
 * Run with `pnpm og`. The PNGs are committed, so `pnpm build` and the CI
 * workflow never need the native resvg binary.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const outDir = join(root, 'public', 'og');
const fontDir = join(here, 'fonts');

const W = 1200;
const H = 630;

const INK = '#12141c';
const ACCENT = '#fd4105';
const PAPER = '#f4f5f9';
const MUTED = '#9ea3b8';

/* The ClientOS mark, copied path for path from getclientos.com/icon.svg. */
const MARK =
  'M232.18908725169763 63.98692481770175C221.65853658536616 45.43022378677392 207.26577822479294 31.158159416645674 189.07115916520002 21.140558209705773C170.84636660799606 11.15313050037713 150.4792557203923 6.174503394518439 128.00000000000023 6.174503394518439C105.52074427960792 6.174503394518439 85.15363339200417 11.153130500377117 66.92884083480021 21.140558209705773C48.70404827759626 31.158159416645674 34.34146341463429 45.43022378677392 23.810912748302826 63.98692481770175C13.280362081971361 82.5436258486296 8.0 103.81594166457126 8.0 127.7736987679155C8.0 151.73145587125973 13.129494593914842 173.39602715614788 23.38848378174498 191.8018606990194C33.61729947196386 210.2076942418909 47.7083228564245 224.5099321096304 65.66155393512713 234.61805380940407C83.58461151621827 244.75634900678907 103.64998742770922 249.82549660548156 125.8576816696002 249.82549660548156C148.06537591149117 249.82549660548156 168.91526276087507 244.75634900678907 187.56248428463664 234.61805380940407C206.2097058083982 224.5099321096304 220.93437264269528 210.14734724666837 231.76665828513956 191.59064621574052C242.56877042997235 173.03394518481264 248.0 151.76162936887096 248.0 127.7736987679155C248.0 103.78576816696003 242.71963791802864 82.54362584862957 232.18908725169717 63.98692481770175ZM127.78878551672142 197.98742770932867C124.28865979381476 180.245411113905 115.59869248177051 164.43449836560222 103.34825245159686 152.18405833542872C91.09781242142344 139.9336183052552 75.28689967312062 131.24365099321096 57.54488307769702 127.7736987679155C75.28689967312062 124.27357304500879 91.09781242142344 115.58360573296451 103.34825245159686 103.333165702791C115.59869248177051 91.0827256726175 124.28865979381476 75.27181292431476 127.78878551672142 57.52979632889108C131.2889112396283 75.27181292431479 139.97887855167255 91.0827256726175 152.22931858184597 103.333165702791C164.44958511440836 115.58360573296451 180.26049786271096 124.27357304500879 198.03268795574604 127.7736987679155C162.51848126728737 134.74377671611768 134.78903696253496 162.5033945184813 127.78878551672165 197.98742770932867Z';

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/**
 * Greedy wrap by estimated advance width. General Sans at weight 700 runs a
 * little under 0.52em average, so this is close enough for a 2–3 line headline
 * and is checked by eye on the rendered PNGs.
 */
function wrap(text, size, maxWidth, maxLines) {
  const perChar = size * 0.52;
  const limit = Math.floor(maxWidth / perChar);
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';

  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > limit && line) {
      lines.push(line);
      line = word;
      if (lines.length === maxLines) break;
    } else {
      line = next;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);
  return lines;
}

/* Fixed rows, so a one-line and a three-line headline sit in the same frame:
   the logo at the top, the eyebrow always at EYEBROW_Y, the headline block
   optically centred on BLOCK_MID, and the footer on the baseline above the
   accent rule. Nothing is positioned relative to anything that can grow. */
const EYEBROW_Y = 215;
const BLOCK_MID = 365;

function card({ eyebrow, title, footer }) {
  /* Drop a size step at a time rather than letting a long headline overflow. */
  let size = 72;
  let lines = wrap(title, size, 1000, 3);
  while (lines.join(' ').length < title.length && size > 44) {
    size -= 6;
    lines = wrap(title, size, 1000, 4);
  }

  const lineHeight = Math.round(size * 1.16);
  /* +0.34em lifts the baseline so the cap-height block, not the baseline
     block, is what reads as centred. */
  const blockTop = Math.round(
    BLOCK_MID - ((lines.length - 1) * lineHeight) / 2 + size * 0.34,
  );

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="General Sans">
  <defs>
    <radialGradient id="glow" cx="0.86" cy="1.08" r="0.72">
      <stop offset="0" stop-color="${ACCENT}" stop-opacity="0.42"/>
      <stop offset="0.6" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="${INK}"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect y="${H - 8}" width="${W}" height="8" fill="${ACCENT}"/>

  <g transform="translate(88 70) scale(0.1875)">
    <path d="${MARK}" fill="${ACCENT}" fill-rule="evenodd"/>
  </g>
  <text x="146" y="99" font-size="27" font-weight="600" fill="${PAPER}" letter-spacing="-0.4">ClientOS</text>

  ${
    eyebrow
      ? `<text x="88" y="${EYEBROW_Y}" font-size="23" font-weight="500" fill="${ACCENT}" letter-spacing="2.6">${esc(
          eyebrow.toUpperCase(),
        )}</text>`
      : ''
  }

  <text x="88" y="${blockTop}" font-size="${size}" font-weight="700" fill="#ffffff" letter-spacing="-${(
    size * 0.022
  ).toFixed(2)}">
    ${lines
      .map((l, i) => `<tspan x="88" dy="${i === 0 ? 0 : lineHeight}">${esc(l)}</tspan>`)
      .join('\n    ')}
  </text>

  <text x="88" y="${H - 62}" font-size="24" font-weight="400" fill="${MUTED}">${esc(footer)}</text>
</svg>`;
}

function appleIcon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 256 256">
  <rect width="256" height="256" rx="56" fill="${INK}"/>
  <g transform="translate(32 32) scale(0.75)">
    <path d="${MARK}" fill="${ACCENT}" fill-rule="evenodd"/>
  </g>
</svg>`;
}

/* ------------------------------------------------------------------ render */

const fonts = await Promise.all(
  ['GeneralSans-Regular.ttf', 'GeneralSans-Medium.ttf'].map((f) => readFile(join(fontDir, f))),
);

async function render(svg, name, width = W) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: width },
    font: {
      fontBuffers: fonts,
      defaultFontFamily: 'General Sans',
      loadSystemFonts: false,
    },
  });
  await writeFile(join(outDir, name), resvg.render().asPng());
  return name;
}

/* One card per page. Titles are short restatements of each page's H1 — a
   social card is read at thumbnail size, so these are deliberately not the
   SEO <title>. */
const { features } = await import(new URL('../src/content/site.ts', import.meta.url).href);
const { alternatives } = await import(
  new URL('../src/content/alternatives.ts', import.meta.url).href
);
const { templates } = await import(new URL('../src/content/templates.ts', import.meta.url).href);

const FOOT = 'huelab-byte.github.io/tryclientos';

const cards = [
  {
    name: 'default.png',
    eyebrow: 'Self-hosted · for agencies',
    title: 'Your client portal. Your server. Your data.',
    footer: `One-time licence · ${FOOT}`,
  },
  {
    name: 'features.png',
    eyebrow: 'Features',
    title: 'Everything an agency runs on, in one portal you own',
    footer: FOOT,
  },
  {
    name: 'pricing.png',
    eyebrow: 'Pricing',
    title: 'Pay once. Own it. From $490, no monthly fee.',
    footer: FOOT,
  },
  {
    name: 'alternatives.png',
    eyebrow: 'Alternatives',
    title: 'Hosted client portal, or one you own?',
    footer: FOOT,
  },
  {
    name: 'client-portal-software.png',
    eyebrow: 'The curated list',
    title: 'Client portal software for agencies',
    footer: `Self-hosted & white label · ${FOOT}`,
  },
  {
    name: 'templates.png',
    eyebrow: 'Free templates · CC0',
    title: 'Four templates that stop work from stalling',
    footer: FOOT,
  },
  {
    name: 'install.png',
    eyebrow: 'Install guide',
    title: 'What self-hosting actually involves',
    footer: FOOT,
  },
  {
    name: 'faq.png',
    eyebrow: 'FAQ',
    title: 'The questions agencies ask first',
    footer: FOOT,
  },
  ...features.map((f) => ({
    name: `feature-${f.slug}.png`,
    eyebrow: f.nav,
    title: f.h1,
    footer: `ClientOS · ${FOOT}`,
  })),
  ...alternatives.map((a) => ({
    name: `${a.slug}.png`,
    eyebrow: `ClientOS vs ${a.product}`,
    title: a.h1,
    footer: `Checked ${a.checked} · ${FOOT}`,
  })),
  ...templates.map((t) => ({
    name: `template-${t.slug}.png`,
    eyebrow: 'Free template · CC0',
    title: t.h1,
    footer: `No sign-up · ${FOOT}`,
  })),
];

await mkdir(outDir, { recursive: true });

for (const spec of cards) {
  await render(card(spec), spec.name);
}
await render(appleIcon(), 'apple-touch-icon.png', 180);

console.log(`generate-og: rendered ${cards.length} social cards + apple-touch-icon into public/og/`);
