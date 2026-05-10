import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container">
        <div className="text-center max-w-[649px] mx-auto">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green mb-5">Strategic Partnership</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="mb-3">
              Ready to engineer
              <span className="text-primary-500"> your next success?</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mb-6">
              Book a technical consultation with lead technical consultants to discuss your bespoke engineering requirements.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="md:inline-block text-center">
              <LinkButton
                href="/contact-us"
                className="btn btn-secondary hover:btn-white dark:hover:btn-accent dark:btn-transparent btn-md w-[85%] md:w-auto">
                Schedule Your Consultation
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTA;