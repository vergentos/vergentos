import ProcessImage from '@public/images/ns-img-49.png';
import ProcessDarkImage from '@public/images/ns-img-dark-28.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const ProcessOperation = () => {
  return (
    <section className="bg-background-1 dark:bg-background-6 space-y-[70px] py-[100px]">
      <div className="main-container space-y-[70px]">
        <div className="mx-auto max-w-[804px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan-v2">Getting Started</span>
          </RevealAnimation>
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2 className="mx-auto max-w-[624px]">Three simple steps to begin your project</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[802px]">
                Starting a technical project with Vergentos is straightforward. We've streamlined the initial engagement process so you can move from enquiry to kickoff quickly and confidently.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 items-center gap-y-14 md:gap-y-20 lg:gap-20 xl:gap-[100px]">
          <div className="col-span-12 lg:col-span-6 xl:col-span-5">
            <RevealAnimation delay={0.4}>
              <div>
                <figure className="mx-auto max-h-[547px] max-w-[478px] lg:mx-0">
                  <Image src={ProcessImage} alt="process" className="block h-full w-full object-cover dark:hidden" />
                  <Image
                    src={ProcessDarkImage}
                    alt="process"
                    className="hidden h-full w-full object-cover dark:block"
                  />
                </figure>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-7">
            <div className="space-y-5">
              <RevealAnimation delay={0.5}>
                <div className="bg-background-3 dark:bg-background-7 mx-auto flex items-start gap-4 rounded-2xl px-7 py-5 sm:max-w-[596px] sm:gap-[22px] sm:rounded-[20px] sm:px-[34px] sm:py-6 lg:mx-0">
                  <div>
                    <div className="bg-ns-yellow text-tagline-1 text-secondary flex size-10 shrink-0 items-center justify-center rounded-full font-semibold">
                      1
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-secondary dark:text-accent text-lg leading-[27px] font-medium">
                      Book a free consultation
                    </h3>
                    <p>
                      Schedule a 30-minute call with our lead engineer. We'll discuss your project, technical requirements, and whether we're the right fit for your business.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <div className="bg-background-3 dark:bg-background-7 mx-auto flex items-start gap-4 rounded-2xl px-7 py-5 sm:max-w-[596px] sm:gap-[22px] sm:rounded-[20px] sm:px-[34px] sm:py-6 lg:mx-0">
                  <div className="bg-ns-green text-tagline-1 text-secondary flex size-10 shrink-0 items-center justify-center rounded-full font-semibold">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-secondary dark:text-accent text-lg leading-[27px] font-medium">
                      Receive your fixed-price proposal
                    </h3>
                    <p>
                      Within 48 hours, you'll receive a detailed technical specification and fixed-price quote. No surprises, no hourly rate anxiety—just clarity.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <div className="bg-background-3 dark:bg-background-7 mx-auto flex items-start gap-4 rounded-2xl px-7 py-5 sm:max-w-[596px] sm:gap-[22px] sm:rounded-[20px] sm:px-[34px] sm:py-6 lg:mx-0">
                  <div className="bg-ns-red text-tagline-1 text-secondary flex size-10 shrink-0 items-center justify-center rounded-full font-semibold">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-secondary dark:text-accent text-lg leading-[27px] font-medium">Kick off your project</h3>
                    <p>
                      Once approved, we schedule a kickoff call, set up your project workspace, and begin the technical discovery phase. You're assigned a dedicated engineer from day one.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOperation;
