import CTA from '@/components/shared/cta/CTA';
import TermsConditionContent from '@/components/terms-conditions/TermsConditionContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Vergentos',
  description: 'Terms and conditions for using Vergentos services and engaging with our SaaS development engagements.',
  keywords: 'Vergentos terms, service agreement',
  authors: [{ name: 'Vergentos', url: 'https://www.vergentos.com' }],
  creator: 'Vergentos',
  publisher: 'Vergentos',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.vergentos.com',
    siteName: 'Vergentos',
    title: 'Terms & Conditions | Vergentos',
    description: 'Vergentos terms and conditions for services.',
    images: [
      {
        url: 'https://www.vergentos.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vergentos Terms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Vergentos',
    description: 'Vergentos terms and conditions.',
    images: ['https://www.vergentos.com/images/og-image.png'],
  },
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <TermsConditionContent />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-cyan"
        badgeText="Get Started"
        ctaHeading="Ready to discuss your project?"
        description="Contact our  team to discuss your technical requirements."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Start Project"
      />
    </main>
  );
};

export default page;
