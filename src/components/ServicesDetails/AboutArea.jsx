import Link from "next/link";

const AboutArea = () => {
  return (
    <>
      <section className="about__area pt-120 pb-155">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about__image about__image-2">
                <div className="about__image-big">
                  <img src="assets/img/about/about-img-7.jpg" alt="" />
                </div>
                <div className="about__image-small about__image-small-2">
                  <img src="assets/img/about/about-img-8.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about__right-2">
                <div className="about__info pb-20">
                  <div className="section-2__wrapper mb-30">
                    <h5 className="section__title-sm">
                      An effective business strategy for companies
                    </h5>
                  </div>
                  <p>
                    Can we help our clients succeed by creating brand identity,
                    digital experiences, and print materials. Financial
                    consulting slogans and Financial consu lting be used to
                    lients succeed by creatin communic.
                  </p>
                </div>
                <div className="proceess__list pt-30">
                  <div className="process__list-item mb-30">
                    <div className="process__list-info">
                      <div className="process__list-icon">
                        <i className="flaticon-pencil"></i>
                      </div>
                      <div className="process__list-content">
                        <h5 className="process__list-item-title">
                          Looking For A First Class For Business <br /> Plan
                          Consultant?
                        </h5>
                      </div>
                    </div>
                    <div className="process__list-sp-icon">
                      <Link href="/services-details">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <p className="process__text">
                  We help our clients succeed by creating brand clients
                  identities, digital IT and experiences IT and print materials.
                </p>
                <div className="about__button mt-35">
                  <Link className="tp-touch-btn" href="/about" >
                    Learn More <i className="fa-light fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
