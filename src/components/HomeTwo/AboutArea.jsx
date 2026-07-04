import Link from "next/link";

const AboutArea = () => {
  return (
    <>
      <section className="about__area pt-120 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about__right">
                <div className="about__info pb-20">
                  <div className="section-2__wrapper mb-30">
                    <span className="st-1">Since From 2000</span>
                    <h5 className="section__title-sd">About Our Industry</h5>
                  </div>
                  <p className="about__info-quote">
                    Software is a generic term used to refer to applications,
                    scripts & programs that run on a device.
                  </p>
                  <p>
                    Software is used to control a computer. There are different
                    types software that can run on a computer: system software,
                    utility software, & application software. Microsoft Word,
                    word-processor software.
                  </p>
                </div>
                <div className="about__list mt-40">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="about__list-item mb-30">
                        <i className="flaticon-pushcart"></i>
                        <h5 className="about__list-item-title">
                          100% Color volume for better quality
                        </h5>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="about__list-item mb-30">
                        <i className="flaticon-chip"></i>
                        <h5 className="about__list-item-title">
                          Over a 1.07 bilion colors provide
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about__button mt-20">
                  <Link className="tp-btn-d" href="/about">
                    Get Consultation
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about__image">
                <div className="about__image-big">
                  <img src="assets/img/about/about-2.jpg" alt="" />
                </div>
                <div className="about__image-small">
                  <img src="assets/img/about/about-3.jpg" alt="" />
                </div>
                <div className="about__image-shape">
                  <span></span>
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
