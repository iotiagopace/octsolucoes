import SingleCompanyAbout from "../common/SingleCompanyAbout";

const CompanyAbout = () => {
  return (
    <>
      <section className="company__about">
        <div className="row g-0">
          <div className="col-xl-12">
            <div className="company__about-tab">
              <ul className="nav nav-tabs about-tabs" id="myTab" role="tablist">
                <li
                  className="nav-item abst-item abst-item"
                  role="presentation"
                >
                  <button
                    className="nav-link abst-item-link"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    company vision
                    <i className="fa-light fa-arrow-down-long"></i>
                  </button>
                </li>
                <li className="nav-item abst-item" role="presentation">
                  <button
                    className="nav-link active abst-item-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    company values
                    <i className="fa-light fa-arrow-down-long"></i>
                  </button>
                </li>
                <li className="nav-item abst-item" role="presentation">
                  <button
                    className="nav-link abst-item-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    company mission
                    <i className="fa-light fa-arrow-down-long"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="tab-content company__about-tabs-content"
              id="myTabContent"
            >
              <div
                className="tab-pane fade pt-90 pb-40"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-xl-8">
                    <div className="company__sm-about text-center">
                      <span className="animate">Dustrilox</span>
                      <p>
                        Dustrilox company value is to provide quality English
                        language instruction avariety of courses to
                        international and local students in a professional and
                        supportive atmosphere If You Need Any Industrial
                        Solution.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-50 mb-50">
                  <SingleCompanyAbout
                    icon="flaticon-pumpjack"
                    title="Pumpjack Mechanics"
                  />
                  <SingleCompanyAbout
                    icon="flaticon-lever"
                    title="Lever Technology"
                  />
                  <SingleCompanyAbout
                    icon="flaticon-crusher"
                    title="Crusher Delivery"
                  />
                </div>
              </div>
              <div
                className="tab-pane fade show active pt-90 pb-40"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-xl-8">
                    <div className="company__sm-about text-center">
                      <span className="animate">Dustrilox</span>
                      <p>
                        Dustrilox company value is to provide quality English
                        language instruction avariety of courses to
                        international and local students in a professional and
                        supportive atmosphere If You Need Any Industrial
                        Solution.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-50 mb-50">
                  <SingleCompanyAbout
                    icon="flaticon-engineering"
                    title="Certified Mechanics"
                  />
                  <SingleCompanyAbout
                    icon="flaticon-industrial-robot-1"
                    title="Advanced Technology"
                  />
                  <SingleCompanyAbout
                    icon="flaticon-pushcart"
                    title="Worldwide Delivery"
                  />
                </div>
              </div>
              <div
                className="tab-pane fade pt-90 pb-40"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-xl-8">
                    <div className="company__sm-about text-center">
                      <span className="animate">Dustrilox</span>
                      <p>
                        Dustrilox company value is to provide quality English
                        language instruction avariety of courses to
                        international and local students in a professional and
                        supportive atmosphere If You Need Any Industrial
                        Solution.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-50 mb-50">
                  <SingleCompanyAbout
                    icon="flaticon-stock"
                    title="Bulding Mechanics"
                  />
                  <SingleCompanyAbout
                    icon="flaticon-tank-truck"
                    title="Water Tank"
                  />
                  <SingleCompanyAbout
                    icon="flaticon-container-1"
                    title="Container Delivery"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyAbout;
