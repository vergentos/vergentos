import CTA from '@/components/shared/cta/CTA';
import TermsConditionContent from '@/components/terms-conditions/TermsConditionContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Mediatopia Bristol',
  description: 'Terms and conditions for Mediatopia web design and development services. Bristol-based technical consultancy.',
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
        description="Contact our Bristol team to discuss your technical requirements."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Start Project"
      />
    </main>
  );
};

export default page;
