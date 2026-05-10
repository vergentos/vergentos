import CaseStudy from '@/components/case-study/CaseStudy';
import Success from '@/components/case-study/Success';
import Feature from '@/components/case-study/Feature';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SaaS Development Case Studies | AI Tools & Dashboards',
  description: 'Real SaaS platforms, AI tools, and dashboards built by Vergentos. Case studies showing what production SaaS engineering delivers.',
  keywords: 'SaaS development case studies, AI tool development examples, SaaS dashboard examples, custom SaaS portfolio',
  authors: [{ name: 'Vergentos', url: 'https://www.vergentos.com' }],
  creator: 'Vergentos',
  publisher: 'Vergentos',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.vergentos.com',
    siteName: 'Vergentos',
    title: 'SaaS Development Case Studies | Vergentos',
    description: 'SaaS platforms, AI tools, and dashboards built by Vergentos for ambitious founders.',
    images: [
      {
        url: 'https://www.vergentos.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vergentos Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Development Case Studies | Vergentos',
    description: 'Real SaaS, AI, and dashboard projects shipped by Vergentos.',
    images: ['https://www.vergentos.com/images/og-image.png'],
  },
};

const CaseStudyPage = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <CaseStudy />
      <Success />
      <Feature />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="!badge-yellow-v2"
        badgeText="Start Your Project"
        ctaHeading="Ready to become our next success story?"
        description="Book a free consultation and let's discuss how we can transform your business."
        ctaBtnText="Book a Call"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        inputType="tel"
        inputPlaceholder="Enter your phone number"
      />
    </main>
  );
};
CaseStudyPage.displayName = 'CaseStudyPage';
export default CaseStudyPage;
