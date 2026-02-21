import { Metadata } from 'next';

export const DEFAULT_URL = 'https://aiwebdesigners.co.uk';
export const DEFAULT_TITLE = 'Mediatopia | Next.js & SaaS Development Bristol';
export const DEFAULT_DESCRIPTION =
  'Bristol web design consultancy specialising in Next.js development, Sage 50 API integration, and AI automation. 22 years of technical excellence serving Bristol, Bath, and Somerset businesses.';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
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
