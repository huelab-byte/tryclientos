/**
 * Post-build sanity check over dist/:
 *
 *   1. every internal link resolves to a file that exists
 *   2. every page has a canonical, a description and an OG image that exists
 *   3. no page contains a rating, review or star claim — getclientos.com
 *      publishes none, so one here would be invented
 *
 * Exits non-zero on any failure, so it is safe to wire into CI later.
 */
import { readFile, readdir, stat } from 'node:fs/promises';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
import { base as BASE } from '../deploy-target.mjs';

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const files = await walk(dist);
const present = new Set(files.map((f) => relative(dist, f).split('\\').join('/')));
const pages = files.filter((f) => f.endsWith('.html'));

const problems = [];
let links = 0;

/** Map a site path to the dist file it should be served from. */
function resolveTarget(path) {
  if (path === BASE || path === `${BASE}/`) return 'index.html';
  if (!path.startsWith(`${BASE}/`)) return null;
  const rel = path.slice(BASE.length + 1);
  return rel.endsWith('/') ? `${rel}index.html` : rel;
}

for (const file of pages) {
  const from = relative(dist, file).split('\\').join('/');
  const html = await readFile(file, 'utf8');

  for (const [, href] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:|#)/.test(href)) continue;
    links += 1;
    const path = href.split('#')[0].split('?')[0];
    if (!path) continue;

    const target = resolveTarget(path);
    if (target === null) {
      problems.push(`${from}: "${href}" is not under ${BASE}`);
    } else if (!present.has(target)) {
      problems.push(`${from}: "${href}" → missing ${target}`);
    }
  }

  if (!/<link rel="canonical" href="https:\/\//.test(html)) {
    problems.push(`${from}: no canonical`);
  }
  const description = html.match(/<meta name="description" content="([^"]*)"/);
  if (!description || description[1].length < 50) {
    problems.push(`${from}: missing or very short meta description`);
  }
  const title = html.match(/<title>([^<]*)<\/title>/);
  if (!title || title[1].length > 70) {
    problems.push(`${from}: title missing or over 70 chars (${title?.[1].length})`);
  }
  if (!/<h1[ >]/.test(html)) problems.push(`${from}: no <h1>`);

  const og = html.match(/<meta property="og:image" content="https?:\/\/[^/"]+([^"]+)"/);
  if (!og) problems.push(`${from}: no og:image`);
  else {
    const target = resolveTarget(og[1]);
    if (!target || !present.has(target)) problems.push(`${from}: og:image → missing ${target}`);
  }

  if (/aggregateRating|ratingValue|reviewCount/i.test(html)) {
    problems.push(`${from}: contains a rating claim — getclientos.com publishes none`);
  }
}

await stat(join(dist, 'robots.txt'));
await stat(join(dist, 'sitemap-index.xml'));

console.log(`check-links: ${pages.length} pages, ${links} internal links`);
if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.log('check-links: no problems');
