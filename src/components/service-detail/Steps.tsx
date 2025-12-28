const Steps = ({ title, step1Title, step1Desc, step2Title, step2Desc, step3Title, step3Desc }: any) => {
  return (
    <section className="py-20 bg-background-2 dark:bg-background-8">
      <div className="main-container">
        <h2 className="text-center mb-16">{title || "Our Engineering Process"}</h2>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <h4 className="text-primary-500 mb-2">01. {step1Title}</h4>
            <p>{step1Desc}</p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <h4 className="text-primary-500 mb-2">02. {step2Title}</h4>
            <p>{step2Desc}</p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <h4 className="text-primary-500 mb-2">03. {step3Title}</h4>
            <p>{step3Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Steps;