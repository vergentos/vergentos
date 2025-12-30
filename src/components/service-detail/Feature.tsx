'use client';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Feature = ({ 
  title, box1Title, box1Sub, box2Title, box2Sub,
  c1Title, c1Desc, c2Title, c2Desc, c3Title, c3Desc, c4Title, c4Desc,
  imageSet = "dashboard"
}: any) => {
  return (
    <section className="bg-background-3 dark:bg-background-7 pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px]">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[650px] space-y-5 text-center">
          <RevealAnimation delay={0.2}><span className="badge badge-green">Core Excellence</span></RevealAnimation>
          <RevealAnimation delay={0.3}><h2>{title || "Everything you need to build & launch smarter"}</h2></RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* First bento card - wide with image below text */}
          <div className="col-span-12 xl:col-span-8">
            <RevealAnimation delay={0.3}>
              <div className="w-full p-8 rounded-[20px] bg-background-2 dark:bg-background-5 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-heading-5">{box1Title}</h3>
                  <p className="max-w-[352px] w-full">{box1Sub}</p>
                </div>
                <figure className="overflow-hidden rounded-2xl">
                  <Image 
                    src="/images/mediatopia-banner-2.png"
                    alt="Feature visual"
                    width={785}
                    height={221}
                    className="size-full object-cover dark:hidden"
                  />
                  <Image 
                    src="/images/mediatopia-banner-2-dark.png"
                    alt="Feature visual"
                    width={785}
                    height={221}
                    className="size-full object-cover hidden dark:block"
                  />
                </figure>
              </div>
            </RevealAnimation>
          </div>

          {/* Second bento card - narrower */}
          <div className="col-span-12 xl:col-span-4">
            <RevealAnimation delay={0.4}>
              <div className="w-full p-8 rounded-[20px] bg-background-2 dark:bg-background-5 h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="text-heading-5 text-primary-500">{box2Title}</h4>
                  <p>{box2Sub}</p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Bottom 4 cards with icons */}
          {[
            { id: "01", t: c1Title, d: c1Desc, icon: "ns-shape-19" },
            { id: "02", t: c2Title, d: c2Desc, icon: "ns-shape-35" },
            { id: "03", t: c3Title, d: c3Desc, icon: "ns-shape-4" },
            { id: "04", t: c4Title, d: c4Desc, icon: "ns-shape-21" }
          ].map((card, i) => (
            <div key={i} className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.5 + i * 0.1}>
                <div className="bg-background-2 dark:bg-background-5 rounded-[20px] p-6 h-full">
                  <span className={`block ${card.icon} text-[48px] text-primary-500 mb-4`} />
                  <p className="text-primary-500 font-bold mb-2">{card.id}</p>
                  <h5 className="mb-2 text-heading-6">{card.t}</h5>
                  <p className="text-sm opacity-70">{card.d}</p>
                </div>
              </RevealAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
