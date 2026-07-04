import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper/modules";
import useGlobalContext from "../../hook/useGlobalContext";
import VideoModal from "../common/VideoModal";

const TestimonialArea = () => {
    const {show,handleClose,handleShow} = useGlobalContext();
  const testimonialData = [
    {
      id: 1,
      clientImg: "assets/img/author/client-1.jpg",
      name: "Alonso D. Dowson",
    },
    {
      id: 2,
      clientImg: "assets/img/author/client-2.jpg",
      name: "Josep Andrew",
    },
    {
      id: 3,
      clientImg: "assets/img/author/client-3.jpg",
      name: "Maxson Dowson",
    },
    {
      id: 4,
      clientImg: "assets/img/author/client-4.jpg",
      name: "Nico Robin",
    },
  ];
  return (
    <>
      <section className="testimonial__area pt-250 pb-120 black-bg-3 fix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="testimonial__side-image w-img">
                <img src="assets/img/testimonial/ts-image-2.jpg" alt="testimonial-img"/>
                <div className="vide-button vide-button-3">
                  <button
                  onClick={handleShow}
                    href="https://www.youtube.com/watch?v=o4GuSJYSzrY"
                    className="popup-video"
                  >
                    <i className="fa-solid fa-play"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="testimonial__left-info-2">
                <div className="section__wrapper section__wrapper-2 mb-40">
                  <span className="st-meta-3 mb-20">Client Story</span>
                  <h4 className="sm-title-d">Hear from trusted clients</h4>
                </div>
                <div className="testimonial__slider-2 swiper-container p-relative">
                  <div className="testimonial__slider-2-wrapper">
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
                      loop={true}
                      autoplay={{ delay: 6000 }}
                      pagination={{
                        el: ".ts-pagination",
                        clickable: true,
                      }}
                      modules={[Navigation, Autoplay, Pagination]}
                      navigation={{
                        nextEl: ".bs-button-next",
                        prevEl: ".bs-button-prev",
                      }}
                    >
                      {testimonialData.map((testimonial) => {
                        return (
                          <SwiperSlide key={testimonial.id}>
                            <div className="testimonial__item testimonial__item-3 swiper-slide">
                              <p className="review__text">
                                “ I think Dikons is the best theme I ever seen
                                this year. Amazing design, easy to customize and
                                a design quality superlative account on its
                                cloud platform for the optimized performance ”
                              </p>
                              <div className="review__info mt-30">
                                <a href="#">
                                  <img src={testimonial.clientImg} alt=""/>
                                </a>
                                <div className="client__content">
                                  <h5 className="client__name">
                                    <a href="#">{testimonial.name}</a>
                                  </h5>
                                  <div className="client__designation">
                                    <p>
                                      Head Of Idea , <a href="#">Alonso Co.</a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="testimonial__icon-3">
                                <img src="assets/img/icon/quote-3.png" alt="quote-icon"/>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                  <div className="ts-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial__shape">
          <img src="assets/img/testimonial/ts-shape-1.png" alt="" />
        </div>
        <div className="testimonial__shape-2">
          <img src="assets/img/testimonial/ts-shape-2.png" alt="" />
        </div>
      </section>

      <VideoModal show={show} handleClose={handleClose} />
    </>
  );
};

export default TestimonialArea;
