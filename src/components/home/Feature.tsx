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
        <div className="mb-10 grid grid-cols-12 gap-8 xl:mb-18">
          <RevealAnimation delay={0.5} className="col-span-12 md:col-span-6 lg:col-span-8">
            <div className="bg-background-3 dark:bg-background-7 space-y-6 rounded-[20px] p-8">
              <div className="space-y-2">
                <h3 className="text-heading-5 max-sm:text-heading-6">Bespoke CMS & Application Development.</h3>
                <p className="max-w-[450px]">
                  We build custom content management systems and web applications tailored to your unique workflow, ensuring total control, speed, and unlimited scalability.
                </p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature1}
                  alt="Bespoke CMS and web application development"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                  className="hidden w-full rounded-2xl object-cover dark:block"
                />
                <Image
                  src={feature1Dark}
                  alt="Bespoke CMS and web application development"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                  className="block w-full rounded-2xl object-cover dark:hidden"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6} className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-background-3 dark:bg-background-7 space-y-6 rounded-[20px] p-8 h-full">
              <div className="space-y-2">
                <h3 className="text-heading-5 max-sm:text-heading-6">API & Sage Integrations.</h3>
                <p className="max-w-[220px]">Connect your digital ecosystem with robust API developments and Sage 50 online integrations for real-time data sync.</p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature2}
                  alt="API and Sage 50 integration services"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                  className="block w-full rounded-2xl object-cover dark:hidden"
                />
                <Image
                  src={feature2Dark}
                  alt="API and Sage 50 integration services"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                  className="hidden w-full rounded-2xl object-cover dark:block"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7} className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-background-3 dark:bg-background-7 space-y-6 rounded-[20px] p-8 h-full">
              <div className="space-y-2">
                <h3 className="text-heading-5 max-sm:text-heading-6">Conversion-Driven UI/UX Design.</h3>
                <p>Transform visitors into customers with intuitive user interfaces and branding that commands authority and professional trust.</p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature3}
                  alt="Conversion-driven UI and UX design"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                  className="block w-full rounded-2xl object-cover dark:hidden"
                />
                <Image
                  src={feature3Dark}
                  alt="Conversion-driven UI and UX design"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                  className="hidden w-full rounded-2xl object-cover dark:block"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8} className="col-span-12 md:col-span-6 lg:col-span-8">
            <div className="bg-background-3 dark:bg-background-7 space-y-6 rounded-[20px] p-8">
              <div className="max-w-[285px] space-y-2">
                <h3 className="text-heading-5 max-sm:text-heading-6">Managed Hosting & Proactive Support.</h3>
                <p className="max-w-[311px]">
                  Benefit from high-speed, secure UK-based hosting with dedicated support and maintenance to keep your platform running at peak performance 24/7.
                </p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature4}
                  alt="Managed UK hosting and proactive support"
                  className="block h-full w-full rounded-2xl object-cover dark:hidden"
                />
                <Image
                  src={feature4Dark}
                  alt="Managed UK hosting and proactive support"
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
