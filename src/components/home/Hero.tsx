import heroBg from '@public/images/ns-img-150.png';
import heroImage from '@public/images/ns-img-151.png';
import heroBgDark from '@public/images/ns-img-dark-104.png';
import heroImageDark from '@public/images/ns-img-dark-105.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import GradientAnimation from './GradientAnimation';

const Hero = ({ title, subtitle }: { title?: any; subtitle?: string }) => {
  return (
    <section className="relative overflow-hidden pt-[150px] md:pt-[190px] lg:pt-[230px]">
      {/* Animated gradient lines background */}
      <RevealAnimation delay={0.6} offset={0}>
        <figure className="absolute top-0 left-1/2 z-0 h-full w-full max-w-[1390px] -translate-x-1/2 opacity-30">
          <GradientAnimation />
        </figure>
      </RevealAnimation>
      
      <RevealAnimation delay={0.3}>
        <div className="absolute top-20 left-1/2 -translate-x-1/2">
          <Image src={heroBg} alt="pattern" className="block object-cover dark:hidden" />
          <Image src={heroBgDark} alt="pattern" className="hidden object-cover dark:block" />
        </div>
      </RevealAnimation>
      <div className="main-container relative z-10">
        <div className="mb-14 flex flex-col items-center justify-center">
          <div className="mx-auto mb-14 w-full max-w-[1075px] space-y-4 text-center">
            <RevealAnimation delay={0.2}>
              <h1>{title || <>Bespoke <span className="text-primary-500">web design &amp; apps</span> built for growth</>}</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[650px]">
                {subtitle || "Based in Bristol, Mediatopia.agency delivers high-performance web development and AI-driven digital strategies."}
              </p>
            </RevealAnimation>
          </div>
          <ul className="flex flex-col gap-4 md:flex-row">
            <RevealAnimation delay={0.4}>
              <LinkButton href="/services/bespoke-consultancy" className="btn btn-xl btn-secondary dark:btn-accent">
                Start Your Project
              </LinkButton>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <LinkButton href="/blog" className="btn btn-xl btn-white dark:btn-white-dark">
                View Portfolio
              </LinkButton>
            </RevealAnimation>
          </ul>
        </div>
        <RevealAnimation delay={0.6}>
          <figure className="w-full max-w-[1290px] mx-auto">
            <Image src={heroImage} alt="hero" className="size-full object-cover dark:hidden" />
            <Image src={heroImageDark} alt="hero" className="hidden size-full object-cover dark:block" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;
