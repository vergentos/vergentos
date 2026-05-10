import gradient5 from '@public/images/ns-img-497.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import SharedCTA from '../shared/cta/CTA';

const AboutCTA = () => {
  return (
    <section className="py-[50px] md:py-20 lg:py-[100px]">
      <div className="mx-auto px-5 lg:max-w-[980px] xl:max-w-[1260px]">
        <RevealAnimation delay={0.1}>
          <div className="bg-secondary dark:bg-background-7 relative overflow-hidden rounded-[20px] px-6 md:px-10 xl:px-20">
            <div className="pointer-events-none absolute -bottom-52 left-7 -z-0 h-[600px] w-[600px] -translate-x-1/2 rotate-[120deg]">
              <Image src={gradient5} alt="cta-bg" className="h-full w-full object-cover" />
            </div>
            <SharedCTA
              className="py-[50px] md:py-20 lg:py-[100px]"
              ctaHeading="Transform your business with bespoke technical engineering."
              ctaBtnText="Start Project"
              badgeText="Start Your Journey"
              badgeClass="badge badge-blur text-ns-green"
              description="Our remote-first team is ready to build your solution. Contact Vergentos today."
              headingClass="text-white dark:text-accent"
              descriptionClass="text-white/80 dark:text-accent/60"
              listTextClass="text-white/60 dark:text-accent/60"
              inputFieldClass="text-white placeholder:text-white/50 border-white/30"
            />
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default AboutCTA;
