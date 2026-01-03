import gradient6 from '@public/images/ns-img-498.png';
import hero from '@public/images/ns-img-98.svg';
import heroDark from '@public/images/ns-img-dark-71.svg';
import Image from 'next/image';
import RevealAnimation from '../../animation/RevealAnimation';
import LinkButton from '../../ui/button/LinkButton';

interface HeroSecurityProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

const HeroSecurity = ({ title, subtitle, badge }: HeroSecurityProps) => {
  return (
    <section className="py-[60px] sm:py-[100px]">
      <div className="border-stroke-1 sm:bg-background-2 sm:dark:bg-background-5 dark:border-stroke-5 relative mx-auto w-full max-w-[600px] space-y-10 overflow-hidden rounded-4xl px-6 pt-[120px] pb-[50px] sm:border sm:pt-[150px] sm:pb-[100px] md:max-w-[700px] lg:max-w-[980px] lg:space-y-[70px] xl:max-w-[1240px]">
        {/* Gradient backgrounds */}
        <RevealAnimation delay={0.3} direction="up">
          <div className="pointer-events-none absolute -top-[29%] left-[7%] -z-0 h-full w-full -rotate-[326deg] select-none sm:-top-[50%] sm:-left-[30%]">
            <Image src={gradient6} alt="" />
          </div>
        </RevealAnimation>
        <RevealAnimation delay={0.3} direction="up">
          <div className="pointer-events-none absolute -top-[65%] -right-[57%] -z-0 h-full w-full -rotate-[75deg] select-none">
            <Image src={gradient6} alt="" className="rotate-180" />
          </div>
        </RevealAnimation>
        
        <div className="relative z-10">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary">{badge || 'Cyber Security'}</span>
            </RevealAnimation>
            <div className="mx-auto max-w-[400px] space-y-4 sm:max-w-[500px] lg:max-w-[690px]">
              <RevealAnimation delay={0.2}>
                <h1>{title || 'Enterprise-grade cyber security'}</h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p>
                  {subtitle || 'Comprehensive protection for your digital assets with advanced threat detection, vulnerability assessments, and 24/7 monitoring by UK-based security experts.'}
                </p>
              </RevealAnimation>
            </div>
            <ul className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-14">
              <RevealAnimation delay={0.4} direction="left" offset={50}>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-accent w-[90%] sm:w-auto">
                    Get Security Assessment
                  </LinkButton>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.5} direction="left" offset={50}>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="/services"
                    className="btn hover:btn-primary dark:btn-transparent btn-white btn-xl w-[90%] sm:w-auto">
                    View All Services
                  </LinkButton>
                </li>
              </RevealAnimation>
            </ul>
          </div>
        </div>
        
        {/* Hero image */}
        <div className="relative z-10">
          <RevealAnimation delay={0.6} direction="up">
            <figure className="mx-auto max-w-[380px] overflow-hidden rounded-[20px] xl:max-w-[500px]">
              <Image src={hero} alt="Security dashboard" className="size-full object-cover dark:hidden" />
              <Image src={heroDark} alt="Security dashboard" className="hidden size-full object-cover dark:block" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

HeroSecurity.displayName = 'HeroSecurity';
export default HeroSecurity;
