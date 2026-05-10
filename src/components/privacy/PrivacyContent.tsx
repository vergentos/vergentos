import RevealAnimation from '../animation/RevealAnimation';

interface PrivacySection {
  title: string;
  content: string;
}

interface ListSection {
  title: string;
  description?: string;
  items: ListItem[];
}

interface ListItem {
  title?: string;
  content: string;
}

const personalInfoSection: PrivacySection = {
  title: 'Personal information we collect',
  content:
    'When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and cookies installed on your device. Additionally, as you browse the Site, we collect information about the individual pages you view, what websites or search terms referred you to the Site, and how you interact with the Site. We call this automatically-collected information <span class="text-secondary dark:text-accent">"Device Information."</span>',
};

const deviceInfoItems: ListItem[] = [
  {
    title: 'Cookies',
    content:
      'Data files placed on your device, often including an anonymous unique identifier. Learn more about cookies and how to disable them at <a href="http://www.allaboutcookies.org" class="text-secondary dark:text-accent">allaboutcookies.org</a>',
  },
  {
    title: 'Log Files',
    content:
      'Track actions on the Site and collect IP address, browser type, ISP, referring/exit pages, and timestamps.',
  },
  {
    title: 'Web Beacons, Tags, and Pixels',
    content: 'Electronic files to monitor site usage and interaction.',
  },
  {
    title: 'Google Analytics',
    content: 'Collect traffic-related information and interaction behaviour to help us improve our services.',
  },
];

const contactInfoItems: ListItem[] = [
  { content: 'Your name' },
  { content: 'Email address' },
  { content: 'Phone number' },
  { content: 'Business name and website' },
  { content: 'Project requirements and messages you send us' },
];

const useInfoSection: ListSection = {
  title: 'How we use your personal information',
  description: 'We use the collected information to:',
  items: [
    { content: 'Respond to your enquiries and provide quotes' },
    { content: 'Deliver the services you have requested' },
    { content: 'Communicate with you about your project' },
    { content: 'Send invoices and process payments' },
    { content: 'Provide ongoing support and maintenance services' },
    { content: 'Improve and optimise our website experience' },
    { content: 'Send you information about our services, where you have opted in to receive this' },
  ],
};

const sharingInfoSection: ListSection = {
  title: 'Sharing your personal information',
  description:
    'We share your Personal Information with trusted third-party service providers to help us operate effectively:',
  items: [
    { content: 'Google Analytics – to understand how visitors use our website' },
    { content: 'Payment processors (Stripe, PayPal) – to process payments securely' },
    { content: 'Email service providers – to send project communications' },
    { content: 'Hosting providers – to deliver our website and client services' },
  ],
};

const rightsSection: ListSection = {
  title: 'Your rights under GDPR',
  description: 'Under the General Data Protection Regulation (GDPR), you have the right to:',
  items: [
    { content: 'Access the personal data we hold about you' },
    { content: 'Request correction of inaccurate personal data' },
    { content: 'Request deletion of your personal data' },
    { content: 'Object to processing of your personal data' },
    { content: 'Request restriction of processing your personal data' },
    { content: 'Request transfer of your personal data' },
    { content: 'Withdraw consent at any time' },
  ],
};

const simpleSections: PrivacySection[] = [
  {
    title: 'Data retention',
    content: 'We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Project files and communications are typically retained for 7 years for legal and accounting purposes. You may request deletion of your data at any time by contacting us.',
  },
  {
    title: 'Data security',
    content: 'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. This includes secure hosting, encrypted communications, and restricted access to personal data.',
  },
  {
    title: 'Cookies',
    content: 'Our website uses cookies to enhance your browsing experience. You can control cookies through your browser settings. Disabling cookies may affect some functionality of our website.',
  },
  {
    title: 'Third-party links',
    content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any websites you visit.',
  },
  {
    title: 'Children',
    content: 'Our website and services are not intended for individuals under the age of 18.',
  },
  {
    title: 'Changes to this policy',
    content: 'We may update this Privacy Policy periodically to reflect changes to our practices or for legal, operational, or regulatory reasons. The updated policy will be posted on this page with a revised effective date.',
  },
];

const PrivacyContent = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="privacy-policy space-y-[75px] max-w-4xl">
          {/* Header Section */}
          <div className="space-y-2">
            <RevealAnimation delay={0.1}>
              <h2>Privacy Policy</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}><div className="space-y-4">
              <p>
                <span className="text-secondary dark:text-accent">Vergentos</span> is committed to protecting your privacy and handling your information transparently. This policy explains how we collect, use, and protect your personal data.
              </p>
              <p className="mt-4">
                <strong>Effective date:</strong> January 2025<br />
                <strong>Data Controller:</strong> Vergentos, [ADDRESS-REMOVED]<br />
                <strong>Contact:</strong> <a href="mailto:hello@vergentos.com" className="text-secondary dark:text-accent">hello@vergentos.com</a>
              </p>
            </div></RevealAnimation>
          </div>

          {/* Personal Information Collection */}
          <div className="space-y-6">
            <RevealAnimation delay={0.3}>
              <div className="space-y-2">
                <h4>{personalInfoSection.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: personalInfoSection.content }} />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.4}><div>
              <p className="text-secondary dark:text-accent">We collect Device Information using:</p>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal mt-3">
                {deviceInfoItems.map((item, index) => (
                  <li key={index + 1}>
                    <strong className="text-secondary dark:text-accent font-normal">{item.title} – </strong>
                    <span dangerouslySetInnerHTML={{ __html: item.content }} />
                  </li>
                ))}
              </ul>
            </div></RevealAnimation>
          </div>

          {/* Contact Information */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Information you provide to us</h4>
                <p>When you contact us through our website, request a quote, or engage our services, we collect:</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                {contactInfoItems.map((item, index) => (
                  <li key={index + 1}>{item.content}</li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* How We Use Information */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>{useInfoSection.title}</h4>
                <p>{useInfoSection.description}</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                {useInfoSection.items.map((item, index) => (
                  <li key={index + 1}>{item.content}</li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Legal Basis */}
          <RevealAnimation delay={0.65}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Legal basis for processing</h4>
                <p>We process your personal data on the following legal bases:</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                <li><strong className="text-secondary dark:text-accent font-normal">Contract –</strong> To perform our contractual obligations to you</li>
                <li><strong className="text-secondary dark:text-accent font-normal">Legitimate interests –</strong> To operate and improve our business</li>
                <li><strong className="text-secondary dark:text-accent font-normal">Consent –</strong> Where you have given explicit consent for marketing communications</li>
                <li><strong className="text-secondary dark:text-accent font-normal">Legal obligation –</strong> To comply with legal requirements</li>
              </ul>
            </div>
          </RevealAnimation>

          {/* Sharing Information */}
          <RevealAnimation delay={0.7}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>{sharingInfoSection.title}</h4>
                <p>{sharingInfoSection.description}</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                {sharingInfoSection.items.map((item, index) => (
                  <li key={index + 1}>{item.content}</li>
                ))}
              </ul>
              <p className="mt-4">We do not sell your personal information to third parties. We may also share your information to comply with applicable laws, respond to legal requests, or protect our rights.</p>
            </div>
          </RevealAnimation>

          {/* Your Rights */}
          <RevealAnimation delay={0.75}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>{rightsSection.title}</h4>
                <p>{rightsSection.description}</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                {rightsSection.items.map((item, index) => (
                  <li key={index + 1}>{item.content}</li>
                ))}
              </ul>
              <p className="mt-4">To exercise any of these rights, please contact us at <a href="mailto:hello@vergentos.com" className="text-secondary dark:text-accent">hello@vergentos.com</a>. We will respond to your request within 30 days.</p>
            </div>
          </RevealAnimation>

          {/* Simple Sections */}
          {simpleSections.map((section, index) => (
            <RevealAnimation key={section.title} delay={0.8 + index * 0.05}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4>{section.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              </div>
            </RevealAnimation>
          ))}

          {/* Contact Section */}
          <RevealAnimation delay={1.1}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Contact us</h4>
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <p className="mt-4">
                  <strong>Vergentos</strong><br />
                  [ADDRESS-REMOVED]<br />
                   <br />
                  <a href="mailto:hello@vergentos.com" className="text-secondary dark:text-accent">hello@vergentos.com</a><br />
                  <a href="tel:+44 (0) [PHONE-TO-CONFIRM]" className="text-secondary dark:text-accent">+44 (0) [PHONE-TO-CONFIRM]</a>
                </p>
                <p className="mt-4">You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) if you believe your data protection rights have been violated.</p>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
