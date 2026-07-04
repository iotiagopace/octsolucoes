import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import SwiperCore, { Navigation } from "swiper/modules";

const RelatedService = () => {
  const serviceData = [
    {
      id: 1,
      img: "assets/img/portfolio/slider/ps-1.jpg",
      title: "Miranda Website Design",
    },
    {
      id: 2,
      img: "assets/img/portfolio/slider/ps-2.jpg",
      title: "Futexo Website Design",
    },
    {
      id: 3,
      img: "assets/img/portfolio/slider/ps-3.jpg",
      title: "Agronix Website Design",
    }
  ];
  return (
    <>
      <div className="related__services grey-bg-5 pt-115 pb-120">
        <div className="container">
          <h5 className="related__services-title mb-45">Related Works</h5>
          <div className="row">
            <div className="col-xl-12">
              <div className="related__services-slider swiper-container">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={3}
                  loop={true}
                  className="swiper-wrapper"
                  autoplay={{ delay: 4000 }}
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".services-button-next",
                    prevEl: ".services-button-prev",
                  }}
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
                      slidesPerView: 3,
                    },
                  }}
                >
                  {serviceData.map((service) => {
                    return (
                      <SwiperSlide key={service.id}>
                        <div className="portfolio-item swiper-slide">
                          <div className="portfolio-wrapper">
                            <div className="portfolio-image portfolio-image-2 w-img">
                              <img src={`${service.img}`} alt="" />
                            </div>
                            <div className="portfolio-caption-top portfolio-caption-top-2">
                              <p>
                                <Link href="/portfolio-details">
                                  Industry, Manufacturing
                                </Link>
                              </p>
                              <h6>
                                <Link href="/portfolio-details">
                                  {service.title}
                                </Link>
                              </h6>
                            </div>
                            <div className="portfolio-caption-bottom-2">
                              <Link href="/portfolio-details">
                                Portfolio Details
                              </Link>
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

          <div className="related__services-arrow">
            <div className="services-button-prev ms-button-4">
              <i className="far fa-long-arrow-left"></i>
            </div>
            <div className="services-button-next ms-button-4">
              <i className="far fa-long-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedService;
