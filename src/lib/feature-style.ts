import type { IconName } from './icons';

/**
 * How each feature area looks: its icon, its two-stop colour, the product
 * screenshots in public/screens/ that show it, and one icon per entry in that
 * feature's `points` (same order as src/content/site.ts). Presentation only —
 * no fact lives here.
 */
export type FeatureStyle = {
  icon: IconName;
  from: string;
  to: string;
  screens: string[];
  points: IconName[];
};

export const featureStyle: Record<string, FeatureStyle> = {
  'service-store-and-checkout': {
    icon: 'store',
    from: '#ff8a4c',
    to: '#fd4105',
    screens: ['storefront', 'service-editor'],
    points: ['file', 'layers', 'shieldCheck', 'clipboard', 'percent', 'userPlus', 'chart'],
  },
  'orders-and-delivery': {
    icon: 'package',
    from: '#f46aa8',
    to: '#c2357a',
    screens: ['order-detail', 'todo'],
    points: ['route', 'clock', 'refresh', 'bell', 'undo', 'kanban', 'command'],
  },
  'invoicing-and-payments': {
    icon: 'receipt',
    from: '#3fcf98',
    to: '#1a8f63',
    screens: ['invoices', 'reports'],
    points: ['hash', 'link', 'receipt', 'repeat', 'trending', 'pie', 'download'],
  },
  'white-label-client-portal': {
    icon: 'palette',
    from: '#b08af5',
    to: '#6d4ae0',
    screens: ['client-portal', 'branding'],
    points: ['globe', 'palette', 'image', 'type', 'layout', 'mail', 'eyeOff'],
  },
  'messages-and-support': {
    icon: 'message',
    from: '#5f97ff',
    to: '#0057fc',
    screens: ['messages', 'tickets'],
    points: ['message', 'tag', 'users', 'reply', 'lifebuoy', 'timer', 'inbox'],
  },
  'leads-and-growth': {
    icon: 'trending',
    from: '#f7bf4f',
    to: '#de7f00',
    screens: ['leads'],
    points: ['funnel', 'code', 'send', 'link', 'target', 'gift', 'form'],
  },
  'self-hosting-and-install': {
    icon: 'server',
    from: '#56cfd0',
    to: '#1f8d93',
    screens: ['install-terminal', 'setup-wizard'],
    points: ['globe', 'terminal', 'browser', 'cpu', 'refresh', 'calendar', 'toggle'],
  },
  'security-and-data-ownership': {
    icon: 'shieldCheck',
    from: '#6b7392',
    to: '#12141c',
    screens: ['team'],
    points: ['server', 'key', 'database', 'fileLock', 'users', 'fingerprint', 'lock'],
  },
};

/** Inline custom properties that tint a block in the feature's colour. */
export function toneStyle(slug: string): string {
  const s = featureStyle[slug];
  return `--tone-a:${s.from};--tone-b:${s.to}`;
}
