import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import SwiperCore, { Autoplay, Navigation } from "swiper/modules";

const ProjectArea = () => {
  const projectData = [
    {
      id: 1,
      img: "assets/img/project/ps-01.jpg",
      subtitle: "Industry, Manufacturing",
      title: "Mixico Solid Still Solution",
    },
    {
      id: 2,
      img: "assets/img/project/ps-05.jpg",
      subtitle: "Industry, Energy",
      title: "Avrilox Luxury House Building",
    },
    {
      id: 3,
      img: "assets/img/project/ps-06.jpg",
      subtitle: "Industry, Financials",
      title: "Mixico Troma Center Making",
    },
    {
      id: 4,
      img: "assets/img/project/ps-02.jpg",
      subtitle: "Industry, Materials",
      title: "Building back sustainable sector",
    },
    {
      id: 5,
      img: "assets/img/project/ps-03.jpg",
      subtitle: "Industry, utility",
      title: "Gas shield solution developed sector",
    },
    {
      id: 6,
      img: "assets/img/project/ps-04.jpg",
      subtitle: "Industry, Real Estate",
      title: "Mixico Solid Still Solution",
    },
  ];
  return (
    <>
      <section className="project__area pt-120 pb-85 fix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="section__wrapper section__wrapper-2 mb-50">
                <span className="st-meta">Case Study</span>
                <h4 className="section__title">Our recent projects.</h4>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="project__slider-arrow-wrapper mb-50 text-sm-end">
                <div className="project__slider-arrow">
                  <div className="project-button-prev ms-button-3 ms-button-3-border">
                    <i className="far fa-long-arrow-left"></i> Prev
                  </div>
                  <div className="project-button-next ms-button-3">
                    Next <i className="far fa-long-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="project__slider project__slider-active swiper-container">
                <div className="project___slider-wrapper swiper-wrapper">
                  <Swiper
                    spaceBetween={40}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    modules={[Navigation]}
                    navigation={{
                      nextEl: ".project-button-next",
                      prevEl: ".project-button-prev",
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
                      992: {
                        slidesPerView: 3,
                      },
                      1200: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {projectData.map((project) => {
                      return (
                        <SwiperSlide key={project.id}>
                          <div className="project__slider-item swiper-slide">
                            <div
                              className="project__slider-item-image mb-30"
                              style={{
                                background: `url(${project.img})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                              }}
                            >
                              <div className="project__slider-item-overlay">
                                <Link href="/portfolio-details">
                                  <i className="fa-solid fa-plus"></i>
                                </Link>
                              </div>
                            </div>
                            <span>
                              <Link href="/portfolio-details">
                                {project.subtitle}
                              </Link>
                            </span>
                            <h5 className="project__slider-item-title">
                              <Link href="/portfolio-details">
                                {project.title}
                              </Link>
                            </h5>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectArea;
