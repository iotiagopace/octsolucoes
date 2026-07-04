import SinglePricingThree from "../common/SinglePricingThree";

const PricingThree = () => {
  return (
    <>
      <section className="pricing__area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="section__wrapper section__wrapper-2 mb-30 text-center">
              <span className="st-meta">Pricing</span>
              <h4 className="section__title">Flexible pricing options</h4>
            </div>
          </div>
          <div className="row mt-20">
              
            <SinglePricingThree price={29.00} disClassOne={true} disClassTwo={true}/>
            <SinglePricingThree price={39.00} active={true} disClassTwo={true} />
            <SinglePricingThree price={99.00} />

          </div>
        </div>
      </section>
    </>
  );
};

export default PricingThree;
