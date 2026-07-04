import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import { Navigation, EffectFade, Autoplay} from "swiper/modules";

const HeroSlider = () => {

  const sliderData = [
    {
      id: 1,
      title: "Industrial",
      subtitle: "Metal Works",
      img: "assets/img/slider/slider-01.jpg",
    },
    {
      id: 2,
      title: "Construction",
      subtitle: "Oil Works",
      img: "assets/img/slider/slider-02.jpg",
    },
    {
      id: 3,
      title: "Architecture",
      subtitle: "Interior Works",
      img: "assets/img/slider/slider-03.jpg",
    },
    {
      id: 4,
      title: "Construction",
      subtitle: "Cotton Works",
      img: "assets/img/slider/slider-02.jpg",
    },
  ];

  return (
   <section className="slider-area fix">
        <div className="main-slider swiper-container-fade p-relative">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            effect={"fade"}
            modules={[Navigation,EffectFade,Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {sliderData.map((slider) => {
              return (
                <SwiperSlide key={slider.id}>
                  <div className="item-slider sliderm-height p-relative">
                    <div
                      className="slide-bg"
                      style={{
                        background: `url(${slider.img})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    ></div>

                    <div className="container">
                      <div className="row ">
                        <div className="col-lg-12">
                          <div className="slider-contant mt-25">
                            <span>{slider.title}</span>
                            <h2 className="slider-title">{slider.subtitle}</h2>
                            <div className="slider-button">
                              <Link className="tp-btn mr-30" href="/services-details">
                                Our Services
                                <i className="fal fa-angle-right"></i>
                              </Link>
                              <Link className="tp-btn-2" href="/about" >
                                Learn More                            
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="swiper-button-prev ms-button">
            <i className="far fa-long-arrow-left"></i>
          </div>
          <div className="swiper-button-next ms-button">
            <i className="far fa-long-arrow-right"></i>
          </div>
        </div>
      </section>
  );
};

export default HeroSlider;
