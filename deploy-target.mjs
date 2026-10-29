/**
 * Where this build will be served from, decided once and read by both
 * astro.config.mjs and scripts/check-links.mjs.
 *
 * The same code deploys to two hosts:
 *
 *   GitHub Pages  https://huelab-byte.github.io/tryclientos/   base '/tryclientos'
 *   Vercel        https://<project>.vercel.app/                base '/'
 *
 * Vercel sets VERCEL=1 during its build, which is how it is told apart.
 * Two optional overrides, for a custom domain or anywhere else:
 *
 *   SITE_URL   the origin, e.g. https://portals.example.com
 *   BASE_PATH  the path the site lives under, e.g. / or /tryclientos
 *
 * SITE_URL is also what canonicals and the sitemap point at, so setting it to
 * one host on both deployments tells search engines which copy is the original.
 */
const env = process.env;
const onVercel = Boolean(env.VERCEL);

const vercelOrigin = env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
  : env.VERCEL_URL
    ? `https://${env.VERCEL_URL}`
    : undefined;

export const site = env.SITE_URL || (onVercel && vercelOrigin) || 'https://huelab-byte.github.io';

/** Always without a trailing slash; '' when the site sits at the root. */
export const base = (env.BASE_PATH ?? (onVercel ? '/' : '/tryclientos')).replace(/\/+$/, '');
