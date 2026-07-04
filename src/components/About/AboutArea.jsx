import Link from 'next/link';

const AboutArea = () => {
  return (
    <>
      <section className="about__area-2 pt-150 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="about__sm-image about__sm-image-df">
                    <div className="sm-image__item w-img mb-30">
                      <a href="#">
                        <img src="assets/img/about/2/about-img-2.jpg" alt="ab-img"/>
                      </a>
                    </div>
                    <div className="sm-image__item w-img mb-30">
                      <a href="#">
                        <img src="assets/img/about/2/about-img-3.jpg" alt="ab-img"/>
                      </a>
                      <div className="sm-image__content">
                        <div className="sm-number">
                          <a href="#">
                            30 <span>+</span>
                          </a>
                          <p>Year Of Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="about__sm-image">
                    <div className="sm-image__item w-img mb-30">
                      <a href="#">
                        <img src="assets/img/about/2/about-img-4.jpg" alt="ab-img"/>
                      </a>
                    </div>
                    <div className="sm-image__item w-img mb-30">
                      <a href="#">
                        <img src="assets/img/about/2/about-img-5.jpg" alt="ab-img"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ab-left-content">
                <div className="section__wrapper mb-30">
                  <h4 className="section__title">
                    We can take your business to the next level.
                  </h4>
                  <div className="r-text">
                    <span>about us</span>
                  </div>
                </div>
                <p className="abd-text">
                  We is the partner of choice for many of the world’s leading
                  enterprises, SMEs and technology challengers.
                </p>
                <div className="ab-author mb-30">
                  <h5>
                    Bhocherd Simon <span>- Founder</span>
                  </h5>
                </div>
                <p className="sm-text mb-45">
                  Our mission is to provide quality English language instruction
                  a variety of courses to international and local students in a
                  professional and supportive atmosphere .
                </p>
                <div className="ab-button mb-30">
                  <Link className="tp-btn-d" href="/about">
                    Learn More
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
