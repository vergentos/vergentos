import heroBg from '@public/images/ns-img-187.svg';
import heroImg01 from '@public/images/ns-img-188.png';
import heroImg06 from '@public/images/ns-img-189.svg';
import heroImg07 from '@public/images/ns-img-190.png';
import heroBgDark from '@public/images/ns-img-dark-126.svg';
import heroImg01Dark from '@public/images/ns-img-dark-127.png';
import heroImg06Dark from '@public/images/ns-img-dark-128.svg';
import heroImg07Dark from '@public/images/ns-img-dark-129.png';
import Image from 'next/image';
import RevealAnimation from '../../animation/RevealAnimation';
import LinkButton from '../../ui/button/LinkButton';

interface HeroDashboardProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

const HeroDashboard = ({ title, subtitle, badge }: HeroDashboardProps) => {
  return (
    <section className="overflow-hidden pt-[115px] pb-[97px]">
      <div className="mx-auto max-w-[1365px]">
        <div className="relative">
          {/* hero bg */}
          <figure className="absolute -top-5 left-[50%] z-0 h-full w-full max-w-[1365px] translate-x-[-50%] animate-pulse overflow-hidden">
            <Image src={heroBg} alt="Decorative background pattern" className="size-full object-cover dark:hidden" />
            <Image
              src={heroBgDark}
              alt="Decorative background pattern"
              className="hidden size-full object-cover dark:inline-block"
            />
          </figure>
          <div className="main-container">
            <div className="flex flex-col items-start justify-between gap-12 pt-4 pb-[110px] lg:flex-row lg:pt-[200px] xl:gap-0">
              {/* hero content */}
              <div className="w-full space-y-7 text-center md:text-left lg:max-w-[490px] lg:space-y-14 xl:max-w-[629px]">
                <div className="space-y-4">
                  <RevealAnimation delay={0.1}>
                    <span className="badge badge-primary">{badge || 'AI & Automation'}</span>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <h1>{title || 'Smart automation for your business'}</h1>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p className="max-w-[500px]">
                      {subtitle || 'Powerful AI-driven solutions designed to streamline your operations, empower your team, and accelerate growth.'}
                    </p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.4} className="w-full md:w-auto">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <LinkButton
                      href="/contact-us"
                      className="btn btn-lg btn-primary hover:btn-secondary dark:hover:btn-accent">
                      Book a Strategy Call
                    </LinkButton>
                    <LinkButton
                      href="/case-study"
                      className="btn btn-lg btn-white dark:btn-white-dark">
                      View Case Studies
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
              
              {/* Floating dashboard elements */}
              <div className="relative" aria-hidden="true">
                {/* main dashboard img */}
                <RevealAnimation delay={0.5}>
                  <figure className="dark:bg-background-9 relative top-[50px] left-[30px] w-full max-w-[280px] rounded-xl bg-white p-2.5 shadow-lg md:left-[100px] md:max-w-[403px] lg:top-[3px] lg:left-[-50px] xl:left-[0px] xl:max-w-[408px]">
                    <Image src={heroImg01} alt="Application dashboard interface" className="rounded-xl dark:hidden" />
                    <Image
                      src={heroImg01Dark}
                      alt="Application dashboard interface"
                      className="hidden rounded-xl dark:block"
                    />
                  </figure>
                </RevealAnimation>
                
                {/* floating card 1 */}
                <RevealAnimation delay={0.6} direction="right">
                  <figure className="shadow-lg absolute hidden max-w-[231px] overflow-hidden rounded-[10px] md:top-[-20px] md:right-[-150px] md:block lg:top-[-40px] lg:right-[-50px] xl:top-[-30px] xl:right-[0px]">
                    <Image
                      src={heroImg06}
                      alt="Dashboard metrics"
                      className="size-full object-cover dark:hidden"
                    />
                    <Image
                      src={heroImg06Dark}
                      alt="Dashboard metrics"
                      className="hidden size-full object-cover dark:block"
                    />
                  </figure>
                </RevealAnimation>
                
                {/* floating card 2 */}
                <RevealAnimation delay={0.7} direction="right" offset={80}>
                  <figure className="shadow-lg absolute top-[200px] right-[-50px] w-full max-w-[222px] overflow-hidden rounded-[10px] md:top-[250px] md:right-[-180px] lg:top-[180px] lg:right-[-80px] xl:top-[200px] xl:right-[-50px]">
                    <Image
                      src={heroImg07}
                      alt="Analytics chart"
                      className="size-full object-cover dark:hidden"
                    />
                    <Image
                      src={heroImg07Dark}
                      alt="Analytics chart"
                      className="hidden size-full object-cover dark:block"
                    />
                  </figure>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroDashboard.displayName = 'HeroDashboard';
export default HeroDashboard;
