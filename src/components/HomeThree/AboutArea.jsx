import Link from 'next/link';

const AboutArea = () => {
  return (
    <>
      <section className="about__area pt-120 pb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="abs__info mb-30">
                <div className="abs__image-1 w-img">
                  <img src="assets/img/about/about-6.jpg" alt="" />
                </div>
                <div className="abs__image-2 w-img">
                  <img src="assets/img/about/about-4.jpg" alt="" />
                </div>
                <div className="abs__image-3 w-img">
                  <img src="assets/img/about/about-5.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ab-left-content">
                <div className="section__wrapper section__wrapper-2 mb-30">
                  <span className="st-meta">Explore About Us</span>
                  <h4 className="section__title">
                    We can take your business to the next level.
                  </h4>
                </div>
                <div className="st-right-border">
                  <p className="abd-text">
                    Dikons is the partner of choice for many of the world’s
                    leading enterprises, SMEs and technology challengers.
                  </p>
                  <div className="ab-author ab-author-2 mb-30">
                    <h5>
                      Bhocherd Simon <span>- Founder</span>
                    </h5>
                  </div>
                </div>
                <p className="sm-text mb-45">
                  Our mission is to provide quality English language instruction
                  a variety of courses to international and local students in a
                  professional and supportive atmosphere .
                </p>
                <div className="ab-button">
                  <Link className="tp-btn-3" href="/about" >
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
