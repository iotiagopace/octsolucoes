import SinglePrice from "../common/SinglePrice";

const Pricing = () => {
  return (
    <>
      <section
        className="pricing__area-2 grey-bg-8 pt-110 pb-130 pricing__overlay"
        style={{
         background: `url(assets/img/bg/price-bg-1.jpg)`,
         backgroundRepeat: "no-repeat",
         backgroundPosition: "center",
         backgroundSize: "cover",
       }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-7">
              <div className="section-2__wrapper mb-55">
                <span className="st-1">Price & Plans</span>
                <h5 className="section__title-sd">Service Planing</h5>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-5">
              <div className="pricing__tabs">
                <ul className="nav nav-tabs" id="priceTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="monthly-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#monthly"
                      type="button"
                      role="tab"
                      aria-controls="monthly"
                      aria-selected="true"
                    >
                      Annual Plan
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="yearly-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#yearly"
                      type="button"
                      role="tab"
                      aria-controls="yearly"
                      aria-selected="false"
                    >
                      Monthly Plan
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
                <SinglePrice
                  title="Basic Plan"
                  num1="01"
                  num2="02"
                  num3="05"
                  num4="10+"
                  price={49.0}
                />

                <SinglePrice
                  title="Team Plan"
                  num1="01"
                  num2="02"
                  num3="05"
                  num4="10+"
                  price={99.0}
                  active={true}
                />

                <SinglePrice
                  title="Advanced Plan"
                  num1="10"
                  num2="20"
                  num3="50"
                  num4="100+"
                  price={120.0}
                />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="yearly"
              role="tabpanel"
              aria-labelledby="yearly-tab"
            >
              <div className="row">
                <SinglePrice
                  title="Standard Plan"
                  num1="01"
                  num2="02"
                  num3="05"
                  num4="10+"
                  price={50.0}
                />

                <SinglePrice
                  title="Premium Plan"
                  num1="01"
                  num2="02"
                  num3="05"
                  num4="10+"
                  price={100.0}
                  active={true}
                />

                <SinglePrice
                  title="Platinum Plan"
                  num1="10"
                  num2="20"
                  num3="50"
                  num4="100+"
                  price={150.0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
