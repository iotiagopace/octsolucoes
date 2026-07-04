const Testimonial = () => {
  return (
    <>
      <section className="testimonial__area-2 pt-110 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="testimonial__right-image w-img">
                <img src="assets/img/testimonial/testimonial-img-2.jpg" alt=""/>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="testimonial__left-info">
                <div className="section-2__wrapper mb-55">
                  <span className="st-1">Testimonials</span>
                  <h5 className="section__title-sd">1000+ Users Feedback</h5>
                </div>
                <div className="testimonial-2__slider ">
                  <div className="wrapper">
                    <div className="testimonial__item-2 mb-60">
                      <div className="tclient__details">
                        <div className="tclient__image mb-20">
                          <img src="assets/img/testimonial/client-1.jpg" alt=""/>
                        </div>
                        <div className="tclient__designation">
                          <h5>Iqbal Gazi</h5>
                          <span>CEO </span>
                        </div>
                      </div>
                      <div className="review__text-2">
                        <p>
                          “ Is generally the detailed organization and
                          implementation of a complex operation. In a general
                          business sense, logistics is the management system ”
                        </p>
                      </div>
                      <div className="quote-img">
                        <img src="assets/img/icon/quote-icon.png" alt="" />
                      </div>
                    </div>
                    <div className="testimonial__item-2 mb-60">
                      <div className="tclient__details">
                        <div className="tclient__image mb-20">
                          <img src="assets/img/testimonial/client-2.jpg" alt=""/>
                        </div>
                        <div className="tclient__designation">
                          <h5>Asomil L.</h5>
                          <span>Head of Idea</span>
                        </div>
                      </div>
                      <div className="review__text-2">
                        <p>
                          “ Is generally the detailed organization and
                          implementation of a complex operation. In a general
                          business sense, logistics is the management system ”
                        </p>
                      </div>
                      <div className="quote-img">
                        <img src="assets/img/icon/quote-icon.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
