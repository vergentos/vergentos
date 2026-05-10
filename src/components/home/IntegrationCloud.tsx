import css3 from '@public/images/icons/css3.svg';
import figma from '@public/images/icons/figma.svg';
import google from '@public/images/icons/google.svg';
import html5 from '@public/images/icons/html5.svg';
import javascript from '@public/images/icons/javascript.svg';
import jquery from '@public/images/icons/jquery.svg';
import nextjs from '@public/images/icons/nextjs.svg';
import nodejs from '@public/images/icons/nodejs.svg';
import python from '@public/images/icons/python.svg';
import react from '@public/images/icons/react.svg';
import tailwind from '@public/images/icons/tailwind.svg';
import typescript from '@public/images/icons/typescript.svg';
import vercel from '@public/images/icons/vercel.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Integration = () => {
  return (
    <section className="pt-32 pb-20 sm:pt-36 md:pt-42 md:pb-28 lg:pb-44 xl:pt-[180px] xl:pb-[200px]">
      <RevealAnimation delay={0.1} offset={80}>
        <div className="dark:bg-background-6 relative z-10 mx-auto w-[95%] rounded-4xl bg-white px-10 py-[70px] md:min-h-[740px] md:px-[75px] 2xl:max-w-[1440px]">
          <div className="relative z-10 mx-auto w-fit max-w-[410px] text-center lg:mt-20">
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3">
                Modern SaaS Engineering Stack<br className="hidden lg:block" /> for Production Workloads
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mb-14">
                We engineer SaaS platforms on a battle-tested modern stack. Next.js, TypeScript, Postgres, and edge deployment, integrated with Stripe billing, OpenAI and Anthropic APIs, vector databases, and the AI tooling your product depends on.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div>
                <LinkButton
                  href="/contact-us"
                  className="btn btn-secondary btn-md hover:btn-primary dark:btn-accent inline-block">
                  See it in Action
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          {/* Left side icons */}
          <div className="bottom-0 left-5 hidden lg:absolute lg:top-0 lg:bottom-auto lg:left-10 lg:block lg:w-1/2 lg:max-w-[400px] xl:left-20 2xl:left-0 2xl:max-w-[582px]">
            <div className="relative flex h-full flex-row flex-wrap gap-5 py-10 lg:flex-col lg:gap-[40px] lg:py-[70px] 2xl:pl-[70px]">
              <RevealAnimation delay={0.4}>
                <div className="flex gap-5 lg:ml-[60px] lg:gap-8 xl:ml-[100px] xl:gap-[75px]">
                  <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                    <div className="dark:bg-background-8 size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                      <Image src={nextjs} className="size-full dark:invert" alt="Next.js" />
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <div className="flex gap-5 lg:gap-8 lg:self-start xl:gap-[75px]">
                  <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                    <div className="dark:bg-background-8 size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                      <Image src={react} className="size-full" alt="React" />
                    </div>
                  </figure>
                  <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                    <div className="dark:bg-background-8 size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                      <Image src={typescript} className="size-full" alt="TypeScript" />
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <div className="flex gap-5 lg:ml-[60px] lg:gap-8 xl:ml-[100px] xl:gap-[75px]">
                  <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                    <div className="dark:bg-background-8 size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                      <Image src={python} className="size-full" alt="Python" />
                    </div>
                  </figure>
                  <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                    <div className="dark:bg-background-8 size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                      <Image src={tailwind} className="size-full" alt="Tailwind CSS" />
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <div className="flex gap-5 lg:ml-[100px] lg:gap-8 xl:ml-[185px] xl:gap-[75px]">
                  <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                    <div className="dark:bg-background-8 size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                      <Image src={html5} className="size-full" alt="HTML5" />
                    </div>
                  </figure>
                  <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                    <div className="dark:bg-background-8 size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                      <Image src={css3} className="size-full" alt="CSS3" />
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
            </div>
          </div>
          {/* Right side icons */}
          <div className="right-5 bottom-0 hidden lg:absolute lg:top-0 lg:right-10 lg:bottom-auto lg:block lg:w-1/2 lg:max-w-[400px] xl:right-28 2xl:right-0 2xl:max-w-[582px]">
            <div className="relative flex h-full flex-row flex-wrap gap-5 py-10 lg:flex-col lg:gap-[40px] lg:py-[70px] 2xl:pr-[70px]">
              <RevealAnimation delay={0.4}>
                <div className="flex lg:mr-[60px] lg:self-end xl:mr-[100px]">
                  <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                    <div className="dark:bg-background-8 size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                      <Image src={vercel} className="size-full dark:invert" alt="Vercel" />
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <div className="flex gap-8 lg:gap-[50px] lg:self-end xl:gap-[75px]">
                  <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                    <div className="dark:bg-background-8 size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                      <Image src={nodejs} className="size-full" alt="Node.js" />
                    </div>
                  </figure>
                  <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                    <div className="dark:bg-background-8 size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                      <Image src={javascript} className="size-full" alt="JavaScript" />
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <div className="flex gap-8 lg:mr-[60px] lg:gap-[50px] lg:self-end xl:mr-[100px] xl:gap-[75px]">
                  <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                    <div className="dark:bg-background-8 size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                      <Image src={google} className="size-full" alt="Google" />
                    </div>
                  </figure>
                  <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                    <div className="dark:bg-background-8 size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                      <Image src={jquery} className="size-full" alt="jQuery" />
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <div className="flex gap-8 self-end lg:mr-[100px] lg:gap-[50px] xl:mr-[185px] xl:gap-[75px]">
                  <figure className="bg-background-2 dark:bg-background-7 flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                    <div className="dark:bg-background-8 size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                      <Image src={figma} className="size-full" alt="Figma" />
                    </div>
                  </figure>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* Mobile view */}
          <div className="integration-list-1 mt-8 flex flex-wrap items-center justify-center gap-4 px-6 sm:px-10 md:mt-20 lg:hidden">
            <RevealAnimation delay={0.4}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-14 items-center justify-center rounded-full sm:size-[75px]">
                <div className="dark:bg-background-6 size-10 rounded-full bg-white p-2 sm:size-[60px]">
                  <Image src={nextjs} className="size-full dark:invert" alt="Next.js" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-14 items-center justify-center rounded-full sm:size-[75px]">
                <div className="dark:bg-background-6 size-10 rounded-full bg-white p-2 sm:size-[60px]">
                  <Image src={react} className="size-full" alt="React" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-14 items-center justify-center rounded-full sm:size-[75px]">
                <div className="dark:bg-background-6 size-10 rounded-full bg-white p-2 sm:size-[60px]">
                  <Image src={typescript} className="size-full" alt="TypeScript" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-14 items-center justify-center rounded-full sm:size-[75px]">
                <div className="dark:bg-background-6 size-10 rounded-full bg-white p-2 sm:size-[60px]">
                  <Image src={python} className="size-full" alt="Python" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-14 items-center justify-center rounded-full sm:size-[75px]">
                <div className="dark:bg-background-6 size-10 rounded-full bg-white p-2 sm:size-[60px]">
                  <Image src={tailwind} className="size-full" alt="Tailwind CSS" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-14 items-center justify-center rounded-full sm:size-[75px]">
                <div className="dark:bg-background-6 size-10 rounded-full bg-white p-2 sm:size-[60px]">
                  <Image src={html5} className="size-full" alt="HTML5" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-14 items-center justify-center rounded-full sm:size-[75px]">
                <div className="dark:bg-background-6 size-10 rounded-full bg-white p-2 sm:size-[60px]">
                  <Image src={css3} className="size-full" alt="CSS3" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-14 items-center justify-center rounded-full sm:size-[75px]">
                <div className="dark:bg-background-6 size-10 rounded-full bg-white p-2 sm:size-[60px]">
                  <Image src={vercel} className="size-full dark:invert" alt="Vercel" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-14 items-center justify-center rounded-full sm:size-[75px]">
                <div className="dark:bg-background-6 size-10 rounded-full bg-white p-2 sm:size-[60px]">
                  <Image src={nodejs} className="size-full" alt="Node.js" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-14 items-center justify-center rounded-full sm:size-[75px]">
                <div className="dark:bg-background-6 size-10 rounded-full bg-white p-2 sm:size-[60px]">
                  <Image src={javascript} className="size-full" alt="JavaScript" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-14 items-center justify-center rounded-full sm:size-[75px]">
                <div className="dark:bg-background-6 size-10 rounded-full bg-white p-2 sm:size-[60px]">
                  <Image src={google} className="size-full" alt="Google" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-14 items-center justify-center rounded-full sm:size-[75px]">
                <div className="dark:bg-background-6 size-10 rounded-full bg-white p-2 sm:size-[60px]">
                  <Image src={jquery} className="size-full" alt="jQuery" />
                </div>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.7}>
              <figure className="bg-background-2 dark:bg-background-7 flex size-14 items-center justify-center rounded-full sm:size-[75px]">
                <div className="dark:bg-background-6 size-10 rounded-full bg-white p-2 sm:size-[60px]">
                  <Image src={figma} className="size-full" alt="Figma" />
                </div>
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Integration;
