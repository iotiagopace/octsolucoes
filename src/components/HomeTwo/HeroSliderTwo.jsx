import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper/modules";

const HeroSliderTwo = () => {
  const sliderDataTwo = [
    {
      id: 1,
      title: "Factory Solutions",
    },
    {
      id: 2,
      title: "Industrial Solutions",
    },
  ];

  return (
    <>
      <section className="slider__area grey-bg-8 pt-120 pb-120">
        <div className="container">
          <div className="slider__active swiper-container">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
              }}
              className="slider__wrapper swiper-wrapper"
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {sliderDataTwo.map((slider) => {
                return (
                  <SwiperSlide key={slider.id}>
                    <div className="slider__item">
                      <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 col-md-7">
                          <div className="slider__d-info">
                            <h4 className="slider__d-title">{slider.title}</h4>
                            <p className="slider__p-text mb-45">
                              The different modes of transport are air, water,
                              and land transport, which includes Rails or
                              railways.
                            </p>
                            <div className="subscribe-form subscribe-form-2 p-relative mb-30">
                              <form action="#">
                                <input
                                  type="email"
                                  placeholder="Email Address"
                                />
                                <button type="submit">
                                  Subscribe Now
                                  <i className="fal fa-long-arrow-right"></i>
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-5 d-none d-md-block">
                          <div className="slider__image text-center w-img">
                            <img
                              src="assets/img/slider/02/slider-02-1.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slider__circle-shape"></div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div className="swiper-button-prev ms-button-2">
          <i className="far fa-long-arrow-left"></i>
        </div>
        <div className="swiper-button-next ms-button-2">
          <i className="far fa-long-arrow-right"></i>
        </div>
      </section>
    </>
  );
};

export default HeroSliderTwo;
