'use client';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

interface IntegrationCard {
  icon: string;
  title: string;
  description: string;
}

interface IntegrationProps {
  badge?: string;
  title?: string;
  description?: string;
  card1Title?: string;
  card1Desc?: string;
  card2Title?: string;
  card2Desc?: string;
  card3Title?: string;
  card3Desc?: string;
  card4Title?: string;
  card4Desc?: string;
}

const Integration = ({ 
  badge, 
  title, 
  description,
  card1Title,
  card1Desc,
  card2Title,
  card2Desc,
  card3Title,
  card3Desc,
  card4Title,
  card4Desc,
}: IntegrationProps) => {
  const cards: IntegrationCard[] = [
    { icon: 'ns-shape-19', title: card1Title || 'SMEs & Local Business', description: card1Desc || 'Scalable solutions that grow with your business and budget.' },
    { icon: 'ns-shape-35', title: card2Title || 'E-commerce Brands', description: card2Desc || 'High-performance stores engineered to convert visitors into customers.' },
    { icon: 'ns-shape-4', title: card3Title || 'Growing Startups', description: card3Desc || 'From MVP to market-ready product in weeks, not months.' },
    { icon: 'ns-shape-21', title: card4Title || 'Established Enterprises', description: card4Desc || 'Legacy modernisation, system integration, and digital transformation.' },
  ];

  return (
    <section className="bg-background-4 dark:bg-background-5">
      <div className="main-container">
        <div className="flex flex-col items-start gap-y-10 pt-14 pb-14 md:gap-y-20 md:pt-16 md:pb-16 lg:flex-row lg:gap-[100px] lg:pt-[88px] lg:pb-[88px] xl:pt-[150px] xl:pb-[150px]">
          <div className="mx-auto w-full max-w-[520px] text-center lg:sticky lg:top-28 lg:mx-0 lg:max-w-full lg:flex-1 lg:text-left">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-green mb-5">{badge || "Who We Work With"}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3 whitespace-normal">
                {title || "Designed for ambitious brands"}
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mb-14 lg:max-w-[620px]">
                {description || "Built to support agile teams and visionary entrepreneurs. We turn ideas into strategic, user-first digital products."}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <LinkButton href="/contact-us" className="btn btn-secondary btn-md w-[85%] md:w-auto">
                Start Your Project
              </LinkButton>
            </RevealAnimation>
          </div>
          <StackCardWrapper topOffset="15vh" gap="24px" initDelay={100} className="mx-auto w-full max-w-[90%] md:max-w-[65%] lg:mx-0 lg:max-w-full lg:flex-1">
            {cards.map((card, index) => (
              <StackCardItem key={index + 1}>
                <div className="bg-background-1 dark:bg-background-6 border-stroke-1/90 dark:border-stroke-5 space-y-6 rounded-xl border p-8 max-sm:min-h-[255px]">
                  <span className={`block ${card.icon} text-heading-2 text-secondary dark:text-accent`} />
                  <div className="space-y-1">
                    <h5>{card.title}</h5>
                    <p>{card.description}</p>
                  </div>
                </div>
              </StackCardItem>
            ))}
          </StackCardWrapper>
        </div>
      </div>
    </section>
  );
};

export default Integration;
