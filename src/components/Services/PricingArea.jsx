import SinglePricingThree from "../common/SinglePricingThree";

const PricingArea = () => {
  return (
    <>
      <section className="pricing__area grey-bg-5 pt-120 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="section__wrapper mb-55">
                <h4 className="section__title">
                  Commercial Ministry to Hike Import Duty on Aluminium
                </h4>
                <div className="r-text">
                  <span>pricing</span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="pricing__tabs-2">
                <ul className="nav nav-tabs" id="priceTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link nav-button-one  active"
                      id="monthly-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#monthly"
                      type="button"
                      role="tab"
                      aria-controls="monthly"
                      aria-selected="true"
                    >
                      Monthly
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link nav-button-two"
                      id="yearly-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#yearly"
                      type="button"
                      role="tab"
                      aria-controls="yearly"
                      aria-selected="false"
                    >
                      Yearly
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content" id="priceTabContent">
            <div
              className="tab-pane fade active show"
              id="monthly"
              role="tabpanel"
              aria-labelledby="monthly-tab"
            >
              <div className="row">
                <SinglePricingThree
                  price={29.0}
                  disClassOne={true}
                  disClassTwo={true}
                  df={true}
                />
                <SinglePricingThree
                  price={39.0}
                  active={true}
                  disClassTwo={true}
                  df={true}
                />
                <SinglePricingThree price={99.0} df={true} />
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="yearly"
              role="tabpanel"
              aria-labelledby="yearly-tab"
            >
              <div className="row">
                <SinglePricingThree
                  price={50.0}
                  disClassOne={true}
                  disClassTwo={true}
                  yearly={true}
                  df={true}
                />
                <SinglePricingThree
                  price={70.0}
                  active={true}
                  disClassTwo={true}
                  yearly={true}
                  df={true}
                />
                <SinglePricingThree price={150.0} yearly={true} df={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingArea;
