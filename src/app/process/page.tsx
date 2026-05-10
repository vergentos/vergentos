import ProcessOperation from '@/components/process/ProcessOperation';
import ProcessStep from '@/components/process/ProcessStep';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Our Technical Process | Vergentos',
  description: 'From discovery to deployment, discover how Vergentos engineers your digital future. A transparent, collaborative process built for modern teams.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ProcessStep />
      <ProcessOperation />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeText="Start Your Project"
        badgeClass="!badge-cyan-v2"
        ctaHeading="Ready to engineer your digital future?"
        description="Book a free technical consultation with our  team. No obligation, just expert advice."
        ctaBtnText="Book a Call"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        inputType="tel"
        inputPlaceholder="Enter your phone number"
      />
    </main>
  );
};

export default page;
