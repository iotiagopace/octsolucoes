import SinglePricingThree from "../common/SinglePricingThree";

const PricingArea = () => {
  return (
    <>
      <div className="pricing__area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <SinglePricingThree price={29.0} disClassOne={true} disClassTwo={true}/>
            <SinglePricingThree price={39.0} active={true} disClassTwo={true} />
            <SinglePricingThree price={99.0} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingArea;
