import { Metadata } from 'next';

export const DEFAULT_URL = 'https://mediatopia.agency';
export const DEFAULT_TITLE = 'Mediatopia | Next.js & SaaS Development Bristol';
export const DEFAULT_DESCRIPTION =
  'Bristol web design consultancy specialising in Next.js development, Sage 50 API integration, and AI automation. 22 years of technical excellence serving Bristol, Bath, and Somerset businesses.';

export const defaultMetadata: Metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    siteName: 'Mediatopia',
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
