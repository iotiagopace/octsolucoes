import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/modules";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      desc: "“ A user review is a review conducted by any person who has access to the internet and publishes their ux to a review site or social media platform ”",
      author: "assets/img/author/client-1.jpg",
      name: "Alonso Dowson",
      title: (
        <>
          <p>
            Head Of Idea , <a href="#">Alonso Co.</a>
          </p>
        </>
      ),
    },
    {
      id: 2,
      desc: "“ A user review is a review conducted by any person who has access to the internet and publishes their ux to a review site or social media platform ”",
      author: "assets/img/author/client-2.jpg",
      name: "Rosalina William",
      title: (
        <>
          <p>
            CEO , <a href="#">Rosa Corporation</a>
          </p>
        </>
      ),
    },
    {
      id: 3,
      desc: "“ Design quality superlative account on its cloud platform. Think Dikons is the best theme I ever seen this year. Amazing design, easy to customize a ”",
      author: "assets/img/author/client-3.jpg",
      name: "Iqbal Hossain",
      title: (
        <>
          <p>
            Founder , <a href="#">Gazi Company</a>
          </p>
        </>
      ),
    },
    {
      id: 4,
      desc: "“ Amazing design, easy to customize a design quality superlative account on its cloud platform. Think Dikons is the best theme I ever seen this year. ”",
      author: "assets/img/author/client-4.jpg",
      name: "Josep D. William",
      title: (
        <>
          <p>
            Head Of Idea , <a href="#">William Co.</a>
          </p>
        </>
      ),
    },
  ];
  return (
    <>
      <section className="testimonial__area grey-bg-5 pt-120 pb-120 fix">
        <div className="testimonial__right-bg">
          <img src="assets/img/testimonial/testimonial-bg-1.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="section__wrapper mb-45">
                <h4 className="section__title">
                  Best innovations in the metallurgy today
                </h4>
                <div className="r-text">
                  <span>feedback</span>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="testimonial__slider swiper-container">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={4}
                  loop={true}
                  className="swiper-wrapper"
                  autoplay={{ delay: 6000 }}
                  modules={[Autoplay]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    550: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                    1400: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {testimonialData.map((testimonial) => {
                    return (
                      <SwiperSlide key={testimonial.id}>
                        <div className="testimonial__item">
                          <p className="review__text">
                            {testimonial.desc}
                          </p>
                          <div className="review__info mt-30">
                            <a href="#">
                              <img src={`${testimonial.author}`} alt="" />
                            </a>
                            <div className="client__content">
                              <h5 className="client__name">
                                <a href="#">{testimonial.name}</a>
                              </h5>
                              <div className="client__designation">
                                {testimonial.title}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
