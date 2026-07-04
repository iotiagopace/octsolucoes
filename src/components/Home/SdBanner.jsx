import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from 'next/link';

const SdBanner = () => {
  const bannerData = [
    {
      id: 1,
      img: "assets/img/banner/banner-01.jpg",
      subtitle: "Genvar Eco Park",
    },
    {
      id: 2,
      img: "assets/img/banner/banner-02.jpg",
      subtitle: "Denvar Eco Park",
    },
    {
      id: 3,
      img: "assets/img/banner/banner-03.jpg",
      subtitle: "Natural Eco Park",
    },
    {
      id: 4,
      img: "assets/img/banner/banner-04.jpg",
      subtitle: "Angency Eco Park",
    },
  ];
  return (
    <>
      <section className="sd-banner-area pb-110">
        <div className="banner__slider swiper-container">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className="banner__wrapper"
            autoplay={{ delay: 4000 }}
            modules={[Autoplay]}
          >
            {bannerData.map((banner) => {
              return (
                <SwiperSlide key={banner.id}>
                  <div
                    className="sd-banner__item swiper-slide"
                    style={{
                      background: `url(${banner.img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="container-0">
                      <div className="row g-0">
                        <div className="col-xl-3 banner-slide-height d-none d-xl-block">
                          <div className="slide-border"></div>
                        </div>
                        <div className="col-xl-3 banner-slide-height">
                          <div className="slide-border"></div>
                          <div className="sd-content">
                            <span className="sd-meta">
                              Industry, Manufacturing
                            </span>
                            <h5>
                              <Link href="/portfolio-details">
                                Genvar Eco Park
                              </Link>
                            </h5>
                            <div className="project-info">
                              <Link href="/portfolio-details">
                               <i className="fal fa-plus"></i>
                              </Link>
                              <span>
                                <Link href="/portfolio-details">
                                  Project Details
                                </Link>
                              </span>
                            </div>
                            <div className="sd-bg-icon">
                              <i className="flaticon-industrial"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 banner-slide-height d-none d-xl-block">
                          <div className="slide-border"></div>
                        </div>
                        <div className="col-xl-3 banner-slide-height d-none d-xl-block">
                          <div className="slide-border"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

        </div>
      </section>
    </>
  );
};

export default SdBanner;
