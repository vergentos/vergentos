import feature1 from '@public/images/ns-img-175.png';
import feature2 from '@public/images/ns-img-176.png';
import feature3 from '@public/images/ns-img-177.png';
import feature4 from '@public/images/ns-img-178.png';
import feature1Dark from '@public/images/ns-img-dark-119.png';
import feature2Dark from '@public/images/ns-img-dark-120.png';
import feature3Dark from '@public/images/ns-img-dark-121.png';
import feature4Dark from '@public/images/ns-img-dark-122.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Feature = () => {
  return (
    <section className="bg-white pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[100px] xl:pb-[100px] dark:bg-black">
      <div className="main-container">
        <div className="mx-auto mb-10 max-w-[750px] space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Our Expertise</span>
          </RevealAnimation>
          <div>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3">Digital solutions that drive business growth.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-secondary/60 dark:text-accent/60 mx-auto max-w-[600px]">
                From bespoke web development to AI-driven automation, Mediatopia.agency provides the technical infrastructure and creative design needed to dominate your market.
              </p>
            </RevealAnimation>
          </div>
        </div>
        {/* feature Items */}
        <div className="mb-10 grid grid-cols-12 space-y-8 md:gap-8 md:space-y-0 xl:mb-18">
          <RevealAnimation delay={0.5}>
            <div className="bg-background-3 dark:bg-background-7 col-span-12 space-y-6 rounded-[20px] p-8 md:col-span-6 lg:col-span-8">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">Bespoke CMS & Application Development.</h5>
                <p className="max-w-[450px]">
                  We build custom content management systems and web applications tailored to your unique workflow, ensuring total control, speed, and unlimited scalability..
                </p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature1}
                  alt="feature image"
                  className="hidden w-full rounded-2xl object-cover dark:block"
                />
                <Image
                  src={feature1Dark}
                  alt="feature image"
                  className="block w-full rounded-2xl object-cover dark:hidden"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="bg-background-3 dark:bg-background-7 col-span-12 space-y-6 rounded-[20px] p-8 md:col-span-6 lg:col-span-4">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">API & Sage Integrations.</h5>
                <p className="max-w-[220px]">Connect your digital ecosystem with robust API developments and Sage 50 online integrations for real-time data sync.</p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature2}
                  alt="feature image"
                  className="block w-full rounded-2xl object-cover dark:hidden"
                />
                <Image
                  src={feature2Dark}
                  alt="feature image"
                  className="hidden w-full rounded-2xl object-cover dark:block"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div className="bg-background-3 dark:bg-background-7 col-span-12 space-y-6 rounded-[20px] p-8 md:col-span-6 lg:col-span-4">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">Conversion-Driven UI/UX Design.</h5>
                <p className="">Transform visitors into customers with intuitive user interfaces and branding that commands authority and professional trust.</p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature3}
                  alt="feature image"
                  className="block w-full rounded-2xl object-cover dark:hidden"
                />
                <Image
                  src={feature3Dark}
                  alt="feature image"
                  className="hidden w-full rounded-2xl object-cover dark:block"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <div className="bg-background-3 dark:bg-background-7 col-span-12 space-y-6 rounded-[20px] p-8 md:col-span-6 lg:col-span-8">
              <div className="max-w-[285px] space-y-2">
                <h5 className="max-sm:text-heading-6">Managed Hosting & Proactive Support.</h5>
                <p className="max-w-[311px]">
                  Benefit from high-speed, secure UK-based hosting with dedicated support and maintenance to keep your platform running at peak performance 24/7.
                </p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature4}
                  alt="feature image"
                  className="block h-full w-full rounded-2xl object-cover dark:hidden"
                />
                <Image
                  src={feature4Dark}
                  alt="feature image"
                  className="hidden h-full w-full rounded-2xl object-cover dark:block"
                />
              </figure>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Feature;
