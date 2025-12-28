const FeatureV2 = ({ title, desc, p1Title, p1Desc, p2Title, p2Desc }: any) => {
  return (
    <section className="py-20">
      <div className="main-container grid grid-cols-12 gap-10 items-center">
        <div className="col-span-12 lg:col-span-6">
          <h3 className="mb-4">{title}</h3>
          <p>{desc}</p>
        </div>
        <div className="col-span-12 lg:col-span-6 space-y-6">
          <div className="p-6 bg-white dark:bg-background-8 rounded-xl border border-stroke-1">
            <h5 className="text-primary-500">{p1Title}</h5>
            <p>{p1Desc}</p>
          </div>
          <div className="p-6 bg-white dark:bg-background-8 rounded-xl border border-stroke-1">
            <h5 className="text-primary-500">{p2Title}</h5>
            <p>{p2Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeatureV2;