import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Content = () => {
  return (
    <section className="xl:pb-28 lg:pb-20 pb-16">
      <div className="main-container">
        <div className="max-w-[950px] mx-auto w-full">
          <RevealAnimation delay={0.1}>
            <div className="py-8 space-y-3">
              <h2 className="text-heading-4 font-normal">Company Information</h2>
              <p>
                The{' '}
                <Link href="/" className="text-primary-500">
                  https://www.vergentos.com
                </Link>{' '}
                website is published by: <br />
                <br />
                <strong>Vergentos</strong> <br />
                [ADDRESS-REMOVED] <br />
                  <br />
                United Kingdom <br />
                <br />
                Telephone:{' '}
                <a href="tel:+44 (0) [PHONE-TO-CONFIRM]" className="text-primary-500">
                  +44 (0) [PHONE-TO-CONFIRM]
                </a>
                <br />
                Email:{' '}
                <a href="mailto:hello@vergentos.com" className="text-primary-500">
                  hello@vergentos.com
                </a>
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="py-8 space-y-3">
              <h2 className="text-heading-4 font-normal">Managing Director</h2>
              <p></p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="py-8 space-y-3">
              <h2 className="text-heading-4 font-normal">Hosting Provider</h2>
              <p>
                This website is hosted by Vercel, Inc. <br />
                Headquarters: 440 N Barranca Ave #4133, Covina, CA 91723, USA
                <br />
                <br />
                Client websites hosted by Vergentos are hosted on secure UK-based servers.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="py-8 space-y-3">
              <h2 className="text-heading-4 font-normal">Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, 
                is the property of Vergentos or its content suppliers and is protected by UK and 
                international copyright laws.
                <br />
                <br />
                The Vergentos name and logo are trademarks of Vergentos. Unauthorised use of any 
                content from this website is strictly prohibited.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="py-8 space-y-3">
              <h2 className="text-heading-4 font-normal">Limitation of Liability</h2>
              <p>
                While we strive to ensure the information on this website is accurate and up-to-date, 
                Vergentos makes no warranties or representations about the accuracy or completeness 
                of the content. We shall not be liable for any damages arising from the use of this website.
                <br />
                <br />
                This website may contain links to external websites. Vergentos is not responsible 
                for the content or privacy practices of these external sites.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="py-8 space-y-3">
              <h2 className="text-heading-4 font-normal">Data Protection</h2>
              <p>
                For information about how we collect, use, and protect your personal data, 
                please see our{' '}
                <Link href="/privacy-policy" className="text-primary-500">
                  Privacy Policy
                </Link>.
                <br />
                <br />
                Vergentos is committed to complying with the UK General Data Protection Regulation 
                (UK GDPR) and the Data Protection Act 2018.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div className="py-8 space-y-3">
              <h2 className="text-heading-4 font-normal">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with 
                the laws of England and Wales. Any disputes arising from the use of this website 
                shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <div className="py-8 space-y-3">
              <h2 className="text-heading-4 font-normal">Contact</h2>
              <p>
                If you have any questions about this legal notice, please contact us:
                <br />
                <br />
                Email:{' '}
                <a href="mailto:hello@vergentos.com" className="text-primary-500">
                  hello@vergentos.com
                </a>
                <br />
                Telephone:{' '}
                <a href="tel:+44 (0) [PHONE-TO-CONFIRM]" className="text-primary-500">
                  +44 (0) [PHONE-TO-CONFIRM]
                </a>
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Content.displayName = 'Content';
export default Content;
