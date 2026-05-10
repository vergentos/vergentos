import ContactInfo from '@/components/contact-page/ContactInfo';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Vergentos | SaaS Development & AI Consultancy',
  description: 'Get in touch with our remote-first technical team. Book a free consultation for web engineering, AI implementation, or Sage 50 integration projects.',
};

const ContactUs = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ContactInfo />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Prefer a Call?"
        ctaBtnText="Request Callback"
        ctaHeading="We'll call you back"
        description="Leave your number and we'll get back to you within 2 hours during business hours."
        inputType="tel"
        inputPlaceholder="Enter your phone number"
      />
    </main>
  );
};

export default ContactUs;
