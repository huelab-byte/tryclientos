import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { base, site } from './deploy-target.mjs';

/**
 * Static build for GitHub Pages (https://huelab-byte.github.io/tryclientos/)
 * or Vercel (served from the root) — deploy-target.mjs picks which.
 *
 * `site` is the origin and `base` the project path, which is the pairing
 * @astrojs/sitemap and `Astro.url` both read: every emitted URL is
 * site + base + route, so canonicals and the sitemap agree without a second
 * source of truth for the domain.
 */
export default defineConfig({
  site,
  base: base || '/',
  trailingSlash: 'always',
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      lastmod: new Date(),
    }),
  ],
});
