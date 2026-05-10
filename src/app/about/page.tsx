import AboutCTA from '@/components/about/CTA';
import AboutHero from '@/components/about/AboutHero';
import OurSuccess from '@/components/about/OurSuccess';
import Testimonial from '@/components/home/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vergentos | A SaaS Development Agency for Founders',
  description: 'Vergentos is a remote-first SaaS development agency focused on bespoke platforms, AI tools, and dashboards. Built by senior engineers who ship.',
  keywords: 'SaaS development company, SaaS engineering team, founder-led SaaS development, custom SaaS agency',
  authors: [{ name: 'Vergentos', url: 'https://www.vergentos.com' }],
  creator: 'Vergentos',
  publisher: 'Vergentos',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.vergentos.com',
    siteName: 'Vergentos',
    title: 'About Vergentos | SaaS Development Agency',
    description: 'A remote-first SaaS development agency focused on bespoke platforms, AI tools, and data dashboards.',
    images: [
      {
        url: 'https://www.vergentos.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Vergentos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Vergentos | SaaS Development Agency',
    description: 'A remote-first SaaS development agency for ambitious founders.',
    images: ['https://www.vergentos.com/images/og-image.png'],
  },
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <AboutHero />
      <OurSuccess />
      <Testimonial />
      <AboutCTA />
    </main>
  );
};

export default page;
