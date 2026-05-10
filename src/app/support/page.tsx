import CTA from '@/components/shared/cta/CTA';
import Contact from '@/components/support/Contact';
import NeedHelp from '@/components/support/NeedHelp';
import Services from '@/components/support/Services';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SaaS Platform Support & Maintenance | Vergentos',
  description: 'Ongoing support and maintenance for SaaS platforms built by Vergentos. Performance monitoring, security patching, feature engineering.',
  keywords: 'SaaS support, SaaS maintenance, SaaS platform support, SaaS engineering retainer',
  authors: [{ name: 'Vergentos', url: 'https://www.vergentos.com' }],
  creator: 'Vergentos',
  publisher: 'Vergentos',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.vergentos.com',
    siteName: 'Vergentos',
    title: 'SaaS Support & Maintenance | Vergentos',
    description: 'Ongoing SaaS support and engineering retainers for production platforms.',
    images: [
      {
        url: 'https://www.vergentos.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vergentos Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Support & Maintenance | Vergentos',
    description: 'Ongoing SaaS support and engineering retainers.',
    images: ['https://www.vergentos.com/images/og-image.png'],
  },
};

const Support = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <NeedHelp />
      <Services />
      <Contact />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-green"
        badgeText="Start Your Project"
        ctaHeading="Ready to discuss your next project?"
        description="Whether you need technical support or want to explore a new build, our  team is here to help."
        ctaBtnText="Book a Call"
        inputType="tel"
        inputPlaceholder="Enter your phone number"
      />
    </main>
  );
};

export default Support;
