import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Static build for GitHub Pages at https://huelab-byte.github.io/tryclientos/.
 *
 * `site` is the origin and `base` the project path, which is the pairing
 * @astrojs/sitemap and `Astro.url` both read: every emitted URL is
 * site + base + route, so canonicals and the sitemap agree without a second
 * source of truth for the domain.
 */
export default defineConfig({
  site: 'https://huelab-byte.github.io',
  base: '/tryclientos',
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
