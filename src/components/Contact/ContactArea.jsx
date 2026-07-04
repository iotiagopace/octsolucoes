const ContactArea = () => {
  return (
    <>
      <section
        className="contact__area pt-120 pb-80"
        style={{
          background: `url(assets/img/bg/contact-bg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="contact__item text-center mb-30">
                <div className="contact__icon mb-35">
                  <i className="fal fa-envelope-open-text"></i>
                </div>
                <h5 className="contact__title mb-25">Email Address</h5>
                <div className="contact__text">
                  <p>
                    <a href="mailto:info@webmail.com">info@webmail.com</a>
                  </p>
                  <p>
                    <a href="mailto:jobs@websitehints.com">
                      jobs@websitehints.com
                    </a>
                  </p>
                </div>
                <div className="contact__button mt-30">
                  <a
                    href="mailto:jobs@websitehints.com"
                    className="tp-btn-white"
                  >
                    Email Us <i className="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact__item text-center mb-30">
                <div className="contact__icon mb-35">
                  <i className="fa-light fa-phone"></i>
                </div>
                <h5 className="contact__title mb-25">Phone Number</h5>
                <div className="contact__text">
                  <p>
                    <a href="tel:+78923656825">789. 236. 568. 25</a>
                  </p>
                  <p>
                    <a href="tel:+7892516563">789 (125) 165 63</a>
                  </p>
                </div>
                <div className="contact__button mt-30">
                  <a href="tel:+7892516563" className="tp-btn-white">
                    Call Us <i className="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact__item text-center mb-30">
                <div className="contact__icon mb-35">
                  <i className="fa-light fa-map-location-dot"></i>
                </div>
                <h5 className="contact__title mb-25">Office Address</h5>
                <div className="contact__text">
                  <p>
                    <a
                      href="https://goo.gl/maps/ZW5MZEgAG4zRJc6B7"
                      target="blank"
                    >
                      15 E Joseph St, Moonachie, <br /> NJ 07074, USA
                    </a>
                  </p>
                </div>
                <div className="contact__button mt-30">
                  <a
                    href="https://goo.gl/maps/ZW5MZEgAG4zRJc6B7"
                    target="blank"
                    className="tp-btn-white"
                  >
                    Direction <i className="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact__item text-center mb-30">
                <div className="contact__icon mb-35">
                  <i className="fa-light fa-bullseye-arrow"></i>
                </div>
                <h5 className="contact__title mb-25">Social Connect</h5>
                <div className="contact__social mt-30">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-behance"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
