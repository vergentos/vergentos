import CTA from '@/components/service-detail/CTA';
import Feature from '@/components/service-detail/Feature';
import FeatureV2 from '@/components/service-detail/FeatureV2';
import Hero from '@/components/service-detail/Hero';
import HeroHosting from '@/components/service-detail/heroes/HeroHosting';
import HeroDashboard from '@/components/service-detail/heroes/HeroDashboard';
import HeroSupport from '@/components/service-detail/heroes/HeroSupport';
import HeroAudit from '@/components/service-detail/heroes/HeroAudit';
import HeroSecurity from '@/components/service-detail/heroes/HeroSecurity';
import HeroPortfolio from '@/components/service-detail/heroes/HeroPortfolio';
import Integration from '@/components/service-detail/Integration';
import Publish from '@/components/service-detail/Publish';
import Steps from '@/components/service-detail/Steps';

import Testimonial from '@/components/home/Testimonial';
import { servicesData } from '@/data/services-data'; 
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: 'Service | Mediatopia' };
  return { title: service.title };
}

const getHeroComponent = (heroType: string, service: any) => {
  switch (heroType) {
    case 'hosting':
      return <HeroHosting title={service.heroTitle} subtitle={service.heroSub} badge={service.heroBadge} />;
    case 'security':
      return <HeroSecurity title={service.heroTitle} subtitle={service.heroSub} badge={service.heroBadge} />;
    case 'dashboard':
      return <HeroDashboard title={service.heroTitle} subtitle={service.heroSub} badge={service.heroBadge} />;
    case 'portfolio':
      return <HeroPortfolio title={service.heroTitle} subtitle={service.heroSub} badge={service.heroBadge} />;
    case 'support':
      return <HeroSupport title={service.heroTitle} subtitle={service.heroSub} badge={service.heroBadge} />;
    case 'audit':
      return <HeroAudit title={service.heroTitle} subtitle={service.heroSub} badge={service.heroBadge} />;
    default:
      return <Hero title={service.heroTitle} subtitle={service.heroSub} />;
  }
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) notFound();

  return (
    <main className="dark:bg-background-6">
      {getHeroComponent(service.heroType || 'default', service)}
      
      <Integration 
        badge={service.intBadge}
        title={service.intTitle}
        description={service.intDesc}
        card1Title={service.int1Title}
        card1Desc={service.int1Desc}
        card2Title={service.int2Title}
        card2Desc={service.int2Desc}
        card3Title={service.int3Title}
        card3Desc={service.int3Desc}
        card4Title={service.int4Title}
        card4Desc={service.int4Desc}
      />
      
      <Feature 
        title={service.bentoTitle}
        box1Title={service.box1Title} 
        box1Sub={service.box1Sub} 
        box2Title={service.box2Title} 
        box2Sub={service.box2Sub}
        c1Title={service.c1Title} c1Desc={service.c1Desc}
        c2Title={service.c2Title} c2Desc={service.c2Desc}
        c3Title={service.c3Title} c3Desc={service.c3Desc}
        c4Title={service.c4Title} c4Desc={service.c4Desc}
        imageSet={service.imageSet}
      />
      
      <Steps 
        title={service.stepsTitle}
        step1Title={service.step1Title} step1Desc={service.step1Desc}
        step2Title={service.step2Title} step2Desc={service.step2Desc}
        step3Title={service.step3Title} step3Desc={service.step3Desc}
      />
      
      <FeatureV2
        title={service.v2Title}
        description={service.v2Desc}
        point1Title={service.v2P1Title}
        point1Desc={service.v2P1Desc}
        point2Title={service.v2P2Title}
        point2Desc={service.v2P2Desc}
        imageSet={service.imageSet}
      />
      
      <Testimonial />
      
      <Publish
        title={service.pubTitle}
        desc={service.pubDesc}
        f1Title={service.f1Title}
        f1Desc={service.f1Desc}
        f2Title={service.f2Title}
        f2Desc={service.f2Desc}
        f3Title={service.f3Title}
        f3Desc={service.f3Desc}
        f4Title={service.f4Title}
        f4Desc={service.f4Desc}
      />
      
      <CTA />
    </main>
  );
};

export default Page;
