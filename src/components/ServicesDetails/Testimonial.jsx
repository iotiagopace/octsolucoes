import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/modules";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      authorImg: "assets/img/author/author-7.jpg",
      desc: "“ The completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.”",
      name: "Miranda H. Halim",
    },
    {
      id: 2,
      authorImg: "assets/img/author/author-6.jpg",
      desc: "“ Professionally cultivate one-to-one customer service with robust ideas. The completely synergize resource taxing relati in the patnership uou join via premier niche markets.”",
      name: "Iqbal Hossain",
    },
    {
      id: 3,
      authorImg: "assets/img/author/author-5.jpg",
      desc: "“ The completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.”",
      name: "Nico Robin",
    },
  ];
  return (
    <>
      <div className="testimonial__area">
        <div className="container">
          <div className="testimonial__slider-3 swiper-container white-bg pt-100 pb-110">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
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
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 2,
                },
                1400: {
                  slidesPerView: 2,
                },
              }}
            >
              {testimonialData.map((testimonial) => {
                return (
                  <SwiperSlide key={testimonial.id}>
                    <div className="swiper-slide testimonial__slider-3-item">
                      <div className="testimonial__item-box text-center">
                        <div className="testimonail__quote-img mb-30">
                          <img src="assets/img/testimonial/quote-img-4.png" alt=""/>
                        </div>
                        <p className="quote__text mb-30">
                         {testimonial.desc}
                        </p>
                        <div className="author__info">
                          <div className="author__image">
                            <a href="#">
                              <img src={`${testimonial.authorImg}`} alt="author"/>
                            </a>
                          </div>
                          <div className="author__content">
                            <h5>{testimonial.name}</h5>
                            <span>Head of Idea</span>
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
    </>
  );
};

export default Testimonial;
