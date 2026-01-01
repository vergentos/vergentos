import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const TermsConditionContent = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <RevealAnimation delay={0.3}>
          <div className="space-y-3">
            <h1>Terms &amp; Conditions</h1>
            <div className="space-y-7">
              <p>
                This website, mediatopia.agency (hereafter referred to as Mediatopia, site, or website) is owned and operated by
                Mediatopia Ltd, a company registered in England and Wales, operating from 12 Whiteladies Road, Bristol BS8 1PD.
              </p>
              <p>
                Please carefully read and understand our Terms and Conditions before engaging our services or
                using this website. Your access to and use of this website indicates that you
                accept and agree to be bound by these terms and conditions.
              </p>
              <p>
                If you do not agree with these terms, please do not use this website or our services.
              </p>
            </div>
          </div>
        </RevealAnimation>
        <article className="terms-conditions-body">
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>1. Services</h3>
              <p>
                Mediatopia provides bespoke web design, Next.js development, Sage 50 API integration, AI automation, 
                and related technical consultancy services. All services are provided on a project-by-project basis 
                under individual agreements.
              </p>
              <p>
                Project scope, deliverables, timelines, and costs are defined in individual proposals and contracts 
                which must be agreed upon before work commences.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>2. Intellectual Property</h3>
              <p>
                Upon full payment, clients receive ownership of bespoke code, designs, and assets created specifically 
                for their project. Mediatopia retains the right to use anonymised examples of work in portfolios and 
                case studies unless otherwise agreed in writing.
              </p>
              <p>
                Third-party software, frameworks, libraries, and licensed assets remain subject to their respective 
                licence terms and are not transferred to the client.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>3. Payment Terms</h3>
              <p>
                Payment terms are specified in individual project proposals. Typically, projects require a deposit 
                before commencement with the balance due upon completion or in agreed milestones.
              </p>
              <p>
                Invoices are due within 14 days of issue unless otherwise agreed. Mediatopia reserves the right to 
                suspend work on projects with outstanding payments.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>4. Limitation of Liability</h3>
              <p>
                Mediatopia shall not be liable for any indirect, incidental, special, or consequential damages 
                arising from the use of our services or deliverables. Our total liability is limited to the 
                fees paid for the specific service in question.
              </p>
              <p>
                Clients are responsible for maintaining backups of their data and content. While we take reasonable 
                precautions, we cannot guarantee against data loss.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>5. Hosting and Maintenance</h3>
              <p>
                Hosting and ongoing maintenance services are provided under separate agreements with their own terms. 
                These services are typically billed monthly or annually in advance.
              </p>
              <p>
                Mediatopia reserves the right to suspend hosting services for accounts with payments overdue by more 
                than 30 days, after providing reasonable notice.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>6. Confidentiality</h3>
              <p>
                Both parties agree to keep confidential any proprietary information shared during the course of 
                a project. This includes business strategies, technical specifications, and client data.
              </p>
              <p>
                Mediatopia will not share client information with third parties except where necessary to deliver 
                the agreed services (e.g., domain registrars, hosting providers).
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>7. Termination</h3>
              <p>
                Either party may terminate a project agreement by providing written notice. In such cases, 
                the client is liable for payment of all work completed up to the termination date.
              </p>
              <p>
                Upon termination, Mediatopia will provide reasonable assistance in transitioning services 
                to the client or an alternative provider.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>8. Governing Law</h3>
              <p>
                These terms and conditions are governed by the laws of England and Wales. Any disputes shall 
                be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>9. Contact</h3>
              <p>
                For questions regarding these terms, please contact us at hello@mediatopia.co.uk or write to 
                Mediatopia, 12 Whiteladies Road, Bristol BS8 1PD.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <Link href="/privacy-policy" className="btn btn-xl dark:btn-accent hover:btn-primary btn-secondary">
              <span>Read our Privacy Policy</span>
            </Link>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default TermsConditionContent;
