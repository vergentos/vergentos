import { ICaseStudy } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import CaseStudyPaginationWrapper from './CaseStudyPaginationWrapper';

const Success = () => {
  const caseStudies = getMarkDownData<ICaseStudy & { [key: string]: unknown }>('src/data/case-study');
  return (
    <section className="py-[50px] lg:py-[100px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-3">More client success stories</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mx-auto max-w-[738px]">
                From Sage 50 integrations to AI-powered automation, explore how we've helped businesses 
                across the Southwest streamline operations and accelerate growth.
              </p>
            </RevealAnimation>
          </div>
          {/* success blog   */}
          <div className="space-y-14">
            {/*  pagination  */}
            <CaseStudyPaginationWrapper caseStudies={caseStudies} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
