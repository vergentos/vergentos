import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface HeroProps {
  title?: string;
  subtitle?: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <section className="relative overflow-hidden pt-[180px] pb-20 lg:pt-[220px] lg:pb-[100px]">
      <div className="main-container relative z-10">
        <div className="mx-auto max-w-[800px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary mb-5">Expert Solutions</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="mb-6">{title || "Technical Excellence"}</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mb-10 text-lg">{subtitle || "Enterprise-grade solutions for ambitious brands."}</p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4">
              <LinkButton href="/contact-us" className="btn btn-primary btn-lg">
                Start Your Project
              </LinkButton>
              <LinkButton href="/case-study" className="btn btn-outline btn-lg">
                View Case Studies
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
