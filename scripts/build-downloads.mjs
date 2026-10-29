/**
 * Writes the four templates to two places from the one source in
 * src/content/templates.ts:
 *
 *   templates/*.md          — the repo's own copy, browsable on GitHub
 *   public/downloads/*.md   — what the site serves as a download
 *
 * Run by `pnpm build` (prebuild), so the rendered page, the GitHub file and
 * the download can never disagree.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

/* The content file is TypeScript, but it is plain data plus one pure function,
   so Node 24's type stripping runs it directly — no build step for a build step. */
const { templates, toMarkdown } = await import(
  new URL('../src/content/templates.ts', import.meta.url).href
);

const targets = [join(root, 'templates'), join(root, 'public', 'downloads')];
for (const dir of targets) await mkdir(dir, { recursive: true });

for (const template of templates) {
  const markdown = toMarkdown(template);
  for (const dir of targets) {
    await writeFile(join(dir, template.file), markdown, 'utf8');
  }
}

console.log(
  `build-downloads: wrote ${templates.length} templates to templates/ and public/downloads/`,
);
