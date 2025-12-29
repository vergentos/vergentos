import CTA from '@/components/service-detail/CTA';
import Feature from '@/components/service-detail/Feature';
import FeatureV2 from '@/components/service-detail/FeatureV2';
import Hero from '@/components/service-detail/Hero';
import HeroHosting from '@/components/service-detail/heroes/HeroHosting';
import Integration from '@/components/service-detail/Integration';
import Publish from '@/components/service-detail/Publish';
import Steps from '@/components/service-detail/Steps';

// Standard shared components and data library
import ReviewsV3 from '@/components/shared/reviews/ReviewsV3';
import { servicesData } from '@/data/services-data'; 
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: 'Service | Mediatopia' };
  return { title: service.title };
}

// Hero component selector based on heroType
const getHeroComponent = (heroType: string, service: any) => {
  switch (heroType) {
    case 'hosting':
      return <HeroHosting title={service.heroTitle} subtitle={service.heroSub} badge={service.heroBadge} />;
    case 'security':
      // TODO: Create HeroSecurity component
      return <HeroHosting title={service.heroTitle} subtitle={service.heroSub} badge={service.heroBadge} />;
    case 'dashboard':
      // TODO: Create HeroDashboard component
      return <Hero title={service.heroTitle} subtitle={service.heroSub} />;
    case 'portfolio':
      // TODO: Create HeroPortfolio component
      return <Hero title={service.heroTitle} subtitle={service.heroSub} />;
    case 'support':
      // TODO: Create HeroSupport component
      return <Hero title={service.heroTitle} subtitle={service.heroSub} />;
    case 'audit':
      // TODO: Create HeroAudit component
      return <Hero title={service.heroTitle} subtitle={service.heroSub} />;
    default:
      return <Hero title={service.heroTitle} subtitle={service.heroSub} />;
  }
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const service = servicesData[slug];

  // If the service doesn't exist in our data library, show 404
  if (!service) notFound();

  return (
    <main className="dark:bg-background-6">
      {/* 1. Hero Section */}
      {getHeroComponent(service.heroType || 'default', service)}
      
      {/* 2. Integration Section */}
      <Integration 
        badge={service.intBadge}
        title={service.intTitle}
        description={service.intDesc}
      />
      
      {/* 3. Feature Bento Grid */}
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
      />
      
      {/* 4. Steps Section */}
      <Steps 
        title={service.stepsTitle}
        step1Title={service.step1Title} step1Desc={service.step1Desc}
        step2Title={service.step2Title} step2Desc={service.step2Desc}
        step3Title={service.step3Title} step3Desc={service.step3Desc}
      />
      
      {/* 5. Feature V2 Section */}
      <FeatureV2
        title={service.v2Title}
        description={service.v2Desc}
        point1Title={service.v2P1Title}
        point1Desc={service.v2P1Desc}
        point2Title={service.v2P2Title}
        point2Desc={service.v2P2Desc}
      />
      
      {/* 6. Reviews Section */}
      <ReviewsV3 />
      
      {/* 7. Publish Section */}
      <Publish
        title={service.pubTitle}
        description={service.pubDesc}
        f1Title={service.f1Title}
        f1Desc={service.f1Desc}
        f2Title={service.f2Title}
        f2Desc={service.f2Desc}
        f3Title={service.f3Title}
        f3Desc={service.f3Desc}
        f4Title={service.f4Title}
        f4Desc={service.f4Desc}
      />
      
      {/* 8. CTA Section */}
      <CTA />
    </main>
  );
};

export default Page;
