import { Pathnames } from 'next-intl/navigation';

export const locales = ['es', 'en'] as const;

export const pathnames = {
  '/': '/',
  '/store': {
    es: '/tienda',
    en: '/store',
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
