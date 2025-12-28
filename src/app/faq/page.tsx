import Contact from '@/components/faq/Contact';
import FaqTab from '@/components/faq/FaqTab';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'FAQ | Bristol Web Design & Technical Questions | Mediatopia.agency',
  description: 'Answers to common questions about web development costs, Sage 50 integration, AI automation, and managed hosting services in Bristol.',
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
