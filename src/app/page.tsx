import Counter from '@/components/home/Counter';
import Faq from '@/components/home/Faq';
import IntegrationCloud from '@/components/home/IntegrationCloud';
import AboutCTA from '@/components/home/CTA';
import Feature from '@/components/home/Feature';
import Hero from '@/components/home/Hero';
import Integration from '@/components/home/Integration';
import Pricing from '@/components/home/Pricing';
import Projects from '@/components/home/Projects';
import Services from '@/components/home/Services';
import Testimonial from '@/components/home/Testimonial';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vergentos | Bespoke Next.js & AI-Powered Web Engineering ',
  description: '\'s trusted web engineering consultancy. High-performance Next.js applications, SaaS platforms, and AI automation. Serving  for 22 years.',
  keywords: 'Next.js development , SaaS development , web engineering , app development Bath, React development , AI automation ',
  authors: [{ name: 'Vergentos', url: 'https://www.vergentos.com' }],
  creator: 'Vergentos',
  publisher: 'Vergentos',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.vergentos.com',
    siteName: 'Vergentos',
    title: 'Vergentos | Bespoke Next.js & SaaS Development ',
    description: '\'s trusted web engineering consultancy. High-performance Next.js applications, SaaS platforms, and AI automation for ambitious UK businesses.',
    images: [
      {
        url: 'https://www.vergentos.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vergentos -  Web Engineering & AI Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vergentos | Bespoke Next.js & SaaS Development ',
    description: '\'s trusted web engineering consultancy. 22 years of excellence.',
    images: ['https://www.vergentos.com/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.vergentos.com',
  },
  other: {
    'geo.region': 'GB-BST',
    'geo.placename': '',
    'geo.position': '51.4545;-2.5879',
    'ICBM': '51.4545, -2.5879',
  },
};

const Page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <Hero />
      <Feature />
      <IntegrationCloud />
      <Services />
      <Integration />
      <Projects />
      <Counter />
      <Testimonial />
      <Pricing />
      <Faq />
      <AboutCTA />
    </main>
  );
};

export default Page;
