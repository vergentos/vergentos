import Contact from '@/components/faq/Contact';
import FaqTab from '@/components/faq/FaqTab';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SaaS Development FAQs | Pricing, Process & Timelines',
  description: 'Common questions about SaaS development pricing, timelines, and process at Vergentos. Fixed-price proposals for bespoke SaaS engineering.',
  keywords: 'SaaS development pricing, SaaS development cost, SaaS development timeline, SaaS development FAQ',
  authors: [{ name: 'Vergentos', url: 'https://www.vergentos.com' }],
  creator: 'Vergentos',
  publisher: 'Vergentos',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.vergentos.com',
    siteName: 'Vergentos',
    title: 'SaaS Development FAQs | Vergentos',
    description: 'Pricing, process, and timelines for bespoke SaaS development at Vergentos.',
    images: [
      {
        url: 'https://www.vergentos.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vergentos FAQs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Development FAQs | Vergentos',
    description: 'Common questions about Vergentos SaaS development services.',
    images: ['https://www.vergentos.com/images/og-image.png'],
  },
};

const FAQ = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <FaqTab />
      <Contact />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="!badge-cyan"
        badgeText="Still Have Questions?"
        ctaHeading="Let's talk through your project"
        description="Can't find what you're looking for? Book a free consultation and we'll answer all your technical questions."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Book a Call"
        inputType="tel"
        inputPlaceholder="Enter your phone number"
      />
    </main>
  );
};

export default FAQ;
