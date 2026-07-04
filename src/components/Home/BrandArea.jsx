import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/modules";

const BrandArea = () => {
  const brandImg = [
    {
      id: 1,
      img: "assets/img/brand/brand-1.png",
    },
    {
      id: 2,
      img: "assets/img/brand/brand-2.png",
    },
    {
      id: 3,
      img: "assets/img/brand/brand-3.png",
    },
    {
      id: 4,
      img: "assets/img/brand/brand-4.png",
    },
    {
      id: 5,
      img: "assets/img/brand/brand-5.png",
    },
    {
      id: 6,
      img: "assets/img/brand/brand-1.png",
    },
  ];
  return (
    <>
      <section className="brand__area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="brand__title text-center">
                <span>Happy Sponsor</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="brand__slider swiper-container">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={5}
                  loop={true}
                  className="banner__wrapper"
                  autoplay={{ delay: 6000 }}
                  modules={[Autoplay]}
                  breakpoints={{
                     0: {
                        slidesPerView: 2,
                     },
                     550: {
                        slidesPerView: 3,
                     },
                     768: {
                        slidesPerView: 4,
                     },
                     1200: {
                        slidesPerView: 5,
                     },
                     1400: {
                        slidesPerView: 5,
                        }
                   }}
                >
                  {brandImg.map((brand) => {
                    return (
                      <SwiperSlide key={brand.id}>
                        <div className="brand__slider-item">
                          <a href="#">
                            <img src={`${brand.img}`} alt="" />
                          </a>
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

export default BrandArea;
