import PrivacyContent from '@/components/privacy/PrivacyContent';
import CTA from '@/components/shared/cta/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Mediatopia - Bristol Web Design',
  description: 'How Mediatopia collects, uses, and protects your personal data. GDPR compliant privacy policy for our web design and development services.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <PrivacyContent />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Get In Touch"
        ctaHeading="Ready to discuss your project?"
        description="Contact us for a free consultation and fixed-price quote."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Contact us"
        btnHref="/contact-us"
        showPhoneInput={true}
      />
    </main>
  );
};

export default page;
