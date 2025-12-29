import hero from '@public/images/ns-img-199.jpg';
import gradient14 from '@public/images/ns-img-506.png';
import heroDark from '@public/images/ns-img-dark-137.jpg';
import Image from 'next/image';
import RevealAnimation from '../../animation/RevealAnimation';
import LinkButton from '../../ui/button/LinkButton';

interface HeroAuditProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

const HeroAudit = ({ title, subtitle, badge }: HeroAuditProps) => {
  return (
    <section
      className="relative pt-[150px] pb-20 sm:pt-[160px] sm:pb-[100px] md:pt-[180px] md:pb-[130px] lg:pt-[234px] xl:pb-[200px]"
      aria-label="Hero section">
      <div className="main-container space-y-[50px] md:space-y-[80px] lg:space-y-[100px]">
        <div className="space-y-10 text-center md:space-y-14">
          <div className="relative z-20 space-y-2 sm:space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary">{badge || 'Health & Performance'}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="mx-auto max-w-[450px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-full">
                {title || 'Comprehensive technical health audits'}
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto w-full max-w-[500px] md:max-w-[630px] xl:max-w-[802px]">
                {subtitle || 'In-depth analysis of your digital infrastructure to identify vulnerabilities, optimise performance, and ensure compliance with industry standards.'}
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.4}>
            <div className="relative z-20 flex flex-col sm:flex-row gap-4 justify-center">
              <LinkButton
                href="/contact-us"
                className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-accent mx-auto sm:mx-0 w-[90%] sm:w-auto"
                aria-label="Book a health audit">
                Book an Audit
              </LinkButton>
              <LinkButton
                href="/services"
                className="btn btn-white dark:btn-white-dark btn-xl mx-auto sm:mx-0 w-[90%] sm:w-auto"
                aria-label="View all services">
                View All Services
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
        <div className="relative z-10">
          <RevealAnimation delay={0.5}>
            <div className="absolute -top-[50%] left-1/2 -z-10 -translate-x-1/2 lg:-top-[35%]">
              <figure className="pointer-events-none mx-auto flex size-[350px] items-center justify-center select-none min-[425px]:size-[400px] sm:size-[550px] md:size-[650px] lg:size-[700px] xl:size-[897px]">
                <Image src={gradient14} alt="Decorative gradient background" className="h-full w-full object-cover" />
              </figure>
            </div>
          </RevealAnimation>
          <div>
            <RevealAnimation delay={0.6}>
              <figure className="mx-auto w-full max-w-[450px] overflow-hidden rounded-xl sm:max-w-[500px] md:max-w-[600px] md:rounded-[20px] lg:max-w-[800px] xl:max-w-[1170px]">
                <Image
                  src={hero}
                  alt="Audit dashboard interface"
                  className="size-full object-cover dark:hidden"
                />
                <Image
                  src={heroDark}
                  alt="Audit dashboard interface"
                  className="hidden size-full object-cover dark:block"
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroAudit.displayName = 'HeroAudit';
export default HeroAudit;
