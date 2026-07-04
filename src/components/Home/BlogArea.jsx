import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/modules";
import blogData from "../../data/blogData";

const BlogArea = () => {
  return (
    <>
      <section className="blog__area grey-bg-5 pb-120 pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="section__wrapper mb-55">
                <h4 className="section__title">
                  Best innovations in the metallurgy today
                </h4>
                <div className="r-text">
                  <span>insights</span>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="blog-slider__active swiper-container">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={4}
                  loop={true}
                  className="blog-slider__wrapper swiper-wrapper"
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
                    992: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                    1400: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {blogData.map((blog) => {
                    return (
                      <SwiperSlide key={blog.id}>
                        <div className="blog__item fix">
                          <div
                            className="blog__thumb"
                            style={{
                              background: `url(${blog.img})`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <div className="blog__content">
                            <div className="blog__meta">
                              <div className="blog__author">
                                <i className="fal fa-calendar-alt"></i>
                                <span>{blog.date}</span>
                              </div>
                              <div className="blog__catagory">
                                <span>Industry</span>
                              </div>
                            </div>
                            <h5 className="blog__sm-title">
                              <Link href="/blog-details">{blog.title}</Link>
                            </h5>
                            <div className="blog__btn mt-120">
                              <Link className="link-btn" href="/blog-details">
                                Read more
                                <i className="fal fa-long-arrow-right"></i>
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
        </div>
      </section>
    </>
  );
};

export default BlogArea;
