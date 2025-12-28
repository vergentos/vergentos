'use client';
import RevealAnimation from '../animation/RevealAnimation';

const Feature = ({ 
  title, box1Title, box1Sub, box2Title, box2Sub,
  c1Title, c1Desc, c2Title, c2Desc, c3Title, c3Desc, c4Title, c4Desc 
}: any) => {
  return (
    <section className="bg-background-3 dark:bg-background-7 pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px]">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[650px] space-y-5 text-center">
          <RevealAnimation delay={0.2}><span className="badge badge-green">Core Excellence</span></RevealAnimation>
          <RevealAnimation delay={0.3}><h2>{title || "Everything you need to build & launch smarter"}</h2></RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7 bg-background-8 rounded-[32px] p-8 md:p-12 relative overflow-hidden min-h-[400px] flex flex-col justify-end">
             <div className="relative z-10">
                <h2 className="text-white mb-4">{box1Title}</h2>
                <p className="text-white/70 mb-6 max-w-[400px]">{box1Sub}</p>
             </div>
          </div>

          <div className="col-span-12 lg:col-span-5 bg-background-2 dark:bg-background-8 rounded-[32px] p-8 border border-stroke-1 dark:border-stroke-5">
             <h4 className="mb-4 text-primary-500">{box2Title}</h4>
             <p>{box2Sub}</p>
          </div>

          {/* Corrected Bottom 4 Cards - Mapping c1 to c4 */}
          {[
            { id: "01", t: c1Title, d: c1Desc },
            { id: "02", t: c2Title, d: c2Desc },
            { id: "03", t: c3Title, d: c3Desc },
            { id: "04", t: c4Title, d: c4Desc }
          ].map((card, i) => (
            <div key={i} className="col-span-12 md:col-span-6 lg:col-span-3 bg-background-2 dark:bg-background-8 rounded-[32px] p-8 border border-stroke-1 dark:border-stroke-5">
               <p className="text-primary-500 font-bold mb-2">{card.id}</p>
               <h4 className="mb-4 text-heading-6">{card.t}</h4>
               <p className="text-sm opacity-70">{card.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;