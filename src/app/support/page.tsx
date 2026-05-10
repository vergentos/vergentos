import CTA from '@/components/shared/cta/CTA';
import Contact from '@/components/support/Contact';
import NeedHelp from '@/components/support/NeedHelp';
import Services from '@/components/support/Services';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Support | Vergentos -  Web Engineering & AI Consultancy',
  description: 'Get technical support from Vergentos. Contact our  team for hosting issues, website queries, or to discuss your next project.',
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
