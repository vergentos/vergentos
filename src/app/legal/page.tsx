import Content from '@/components/legal-notice/Content';
import Hero from '@/components/legal-notice/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Information | Vergentos',
  description: 'Legal information, business details, and regulatory disclosures for Vergentos.',
  keywords: 'Vergentos legal',
  authors: [{ name: 'Vergentos', url: 'https://www.vergentos.com' }],
  creator: 'Vergentos',
  publisher: 'Vergentos',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.vergentos.com',
    siteName: 'Vergentos',
    title: 'Legal Information | Vergentos',
    description: 'Vergentos legal information and business details.',
    images: [
      {
        url: 'https://www.vergentos.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vergentos Legal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Information | Vergentos',
    description: 'Vergentos legal information.',
    images: ['https://www.vergentos.com/images/og-image.png'],
  },
};

const page = () => {
  return (
    <main className="dark:bg-background-7 bg-white">
      <Hero />
      <Content />
    </main>
  );
};

export default page;
