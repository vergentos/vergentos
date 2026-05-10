import { Metadata } from 'next';

export const DEFAULT_URL = 'https://www.vergentos.com';
export const DEFAULT_TITLE = 'Vergentos: SaaS Development Agency for Modern Founders';
export const DEFAULT_DESCRIPTION =
  'Vergentos is a SaaS development agency building bespoke platforms, AI tools, and data dashboards for ambitious teams. From MVP to production-grade engineering.';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'Vergentos',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: 'en_GB',
    type: 'website',
    url: DEFAULT_URL,
  },
};

export const generateMetadata = (): Metadata => {
  return defaultMetadata;
};
