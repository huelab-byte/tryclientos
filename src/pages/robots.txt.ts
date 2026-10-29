import type { APIRoute } from 'astro';

/**
 * Generated rather than kept in public/, so the sitemap line always points at
 * the host and base this build is for (see deploy-target.mjs).
 */
export const GET: APIRoute = ({ site }) => {
  const home = new URL(import.meta.env.BASE_URL, site);
  const sitemap = new URL('sitemap-index.xml', home.href.endsWith('/') ? home : `${home}/`);
  return new Response(`# ${home.href}\nUser-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
