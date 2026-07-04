import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import SwiperCore, { Navigation, Autoplay } from "swiper/modules";

const ServicesArea = () => {
  return (
    <>
      <section className="services-area grey-bg-5 pt-120 pb-115 fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="ab-left-content">
                <div className="section__wrapper mb-30">
                  <h4 className="section__title">
                    Dont need to look very far to get a better perspective
                  </h4>
                  <div className="r-text">
                    <span>services</span>
                  </div>
                </div>
                <p className="sm-text mb-45">
                  Our mission is to provide quality English language instruction
                  a variety of courses to international and local students in a
                  professional and supportive atmosphere .
                </p>
                <div className="ab-button mb-30">
                  <Link className="tp-btn-ts" href="/about">
                    Get In Touch <i className="fal fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="services__slider swiper-container">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={3}
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
                      slidesPerView: 3,
                      }
                  }}
                >
                  <SwiperSlide>
                    <div className="single-services swiper-slide">
                      <h5>Strategy</h5>
                      <div className="services-list pb-10">
                        <ul>
                          <li>
                            <span>Aptitude for Technology</span>
                          </li>
                          <li>
                            <span>Attention to Detail</span>
                          </li>
                          <li>
                            <span>Strong Communication</span>
                          </li>
                          <li>
                            <span>Market Assesment</span>
                          </li>
                          <li>
                            <span>Quallity Guarantee</span>
                          </li>
                        </ul>
                      </div>
                      <div className="sr-button">
                        <Link href="/services-details">Read More</Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="single-services swiper-slide">
                      <h5>Assesment</h5>
                      <div className="services-list pb-10">
                        <ul>
                          <li>
                            <span>Quallity Guarantee</span>
                          </li>
                          <li>
                            <span>Market Assesment</span>
                          </li>
                          <li>
                            <span>Strong Communication</span>
                          </li>
                          <li>
                            <span>Attention to Detail</span>
                          </li>
                          <li>
                            <span>Aptitude for Technology</span>
                          </li>
                        </ul>
                      </div>
                      <div className="sr-button">
                        <Link href="/services-details">Read More</Link>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="single-services swiper-slide">
                      <h5>Development</h5>
                      <div className="services-list pb-10">
                        <ul>
                          <li>
                            <span>Strong Communicatione</span>
                          </li>
                          <li>
                            <span>Quallity Guarantee</span>
                          </li>
                          <li>
                            <span>Aptitude for Technology</span>
                          </li>
                          <li>
                            <span>Market Assesment</span>
                          </li>
                          <li>
                            <span>Attention to Detail</span>
                          </li>
                        </ul>
                      </div>
                      <div className="sr-button">
                        <Link href="/services-details">Read More</Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesArea;
