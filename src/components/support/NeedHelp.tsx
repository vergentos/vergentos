import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const NeedHelp = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="space-y-8 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary-v2">Client Support</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h1 className="mx-auto max-w-[810px]">How can we help you today?</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[600px]">
                Welcome to the Mediatopia Support Centre. Whether you need technical assistance, 
                have a question about your hosting, or want to discuss a new project, we&apos;re here to help.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <LinkButton
                href="tel:+441173326021"
                className="btn btn-xl hover:btn-secondary dark:hover:btn-accent btn-primary">
                Call 0117 332 6021
              </LinkButton>
              <LinkButton
                href="/contact-us"
                className="btn btn-xl btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                Contact Form
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default NeedHelp;
