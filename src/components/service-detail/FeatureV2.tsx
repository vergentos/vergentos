import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const imageSets = {
  portfolio: "/images/portfolio-5.png",
  dashboard: "/images/ns-img-288.png",
  abstract: "/images/ns-img-499.png",
  infrastructure: "/images/ns-img-44.png",
};

interface FeatureV2Props {
  title?: string;
  description?: string;
  point1Title?: string;
  point1Desc?: string;
  point2Title?: string;
  point2Desc?: string;
  imageSet?: string;
}

const FeatureV2 = ({ title, description, point1Title, point1Desc, point2Title, point2Desc, imageSet = "dashboard" }: FeatureV2Props) => {
  const image = imageSets[imageSet as keyof typeof imageSets] || imageSets.dashboard;
  
  return (
    <RevealAnimation delay={0.1}>
      <section className="py-20 md:py-[100px] lg:py-[150px]">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-10 md:gap-10 lg:gap-[100px]">
            <div className="col-span-12 lg:col-span-5">
              <div className="space-y-7">
                <div className="space-y-3 md:max-w-[450px] lg:max-w-[521px]">
                  <RevealAnimation delay={0.1}>
                    <h2>{title || "Why choose this approach?"}</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p>{description || "Expert solutions designed to deliver measurable results for your business."}</p>
                  </RevealAnimation>
                </div>
                <div className="space-y-4">
                  <RevealAnimation delay={0.3}>
                    <div className="flex items-start gap-4 p-5 bg-background-2 dark:bg-background-8 rounded-xl border border-stroke-1 dark:border-stroke-5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <div>
                        <h5 className="text-heading-6 mb-1">{point1Title || "Key Benefit"}</h5>
                        <p className="text-sm opacity-70">{point1Desc || "Description of this key benefit."}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <div className="flex items-start gap-4 p-5 bg-background-2 dark:bg-background-8 rounded-xl border border-stroke-1 dark:border-stroke-5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <div>
                        <h5 className="text-heading-6 mb-1">{point2Title || "Another Benefit"}</h5>
                        <p className="text-sm opacity-70">{point2Desc || "Description of another key benefit."}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <RevealAnimation delay={0.3} direction="left">
                <figure className="relative w-full">
                  <Image
                    src={image}
                    alt="Feature visualization"
                    width={668}
                    height={500}
                    className="h-full w-full object-contain"
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default FeatureV2;
