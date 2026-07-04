import Link from 'next/link';
import BlogData from "../../data/blogData";
import BlogRightSide from "../common/BlogRightSide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useGlobalContext from "../../hook/useGlobalContext";
import VideoModal from "../common/VideoModal";

const BlogArea = () => {
const {show,handleClose,handleShow} = useGlobalContext();

  return (
    <>
      <div className="blog__area pt-120 pb-65">
        <div className="container custom-container-3">
          <div className="row">
            <div className="col-lg-8">
              <div className="tp-blog__wrapper mb-50">
                {BlogData.slice(0, 3).map((blog) => {
                  const { video, slider,author,titleTwo,date } = blog;
                  return (
                    <div key={blog.id} className="tp-blog mb-60">
                      <div className="tp-blog__thumb m-img mb-35">
                        {video ? (
                          <>
                            <Link href="/blog-details">
                              <img src="assets/img/blog/blog-d-2.jpg" alt="blog-img"/>
                            </Link>
                            <div className="vide-button vide-button-3">
                              <button
                              onClick={handleShow}
                                href="https://www.youtube.com/watch?v=o4GuSJYSzrY"
                                className="popup-video"
                              >
                                <i className="fa-solid fa-play"></i>
                              </button>
                            </div>
                          </>
                        ) : slider ? (
                          <div className="tp-blog__slider swiper-container p-relative">
                            <Swiper
                              spaceBetween={0}
                              slidesPerView={1}
                              loop={true}
                              className="swiper-wrapper"
                              modules={[Navigation]}
                              navigation={{
                                nextEl: ".tp-blog-button-next",
                                prevEl: ".tp-blog-button-prev",
                              }}
                            >
                              <SwiperSlide>
                                <div className="tp-blog__slider-item">
                                  <img src="assets/img/blog/blog-d-4.jpg" alt="" />
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="tp-blog__slider-item">
                                  <img src="assets/img/blog/blog-d-5.jpg" alt=""/>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="tp-blog__slider-item">
                                  <img src="assets/img/blog/blog-d-6.jpg" alt="" />
                                </div>
                              </SwiperSlide>
                            </Swiper>

                            <div className="tp-blog-nav">
                              <button className="tp-blog-button-next">
                                <i className="fal fa-arrow-right"></i>
                              </button>
                              <button className="tp-blog-button-prev">
                                <i className="fal fa-arrow-left"></i>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <Link href="/blog-details">
                               <img src="assets/img/blog/blog-d-1.jpg" alt="blog-img"/>
                          </Link>
                        )}
                      </div>
                      <div className="tp-blog__content">
                        <div className="tp-blog__meta mb-15">
                          <span>
                            <a href="#">
                              <i className="fal fa-clock"></i> {date}
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="far fa-user"></i> {author}
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="far fa-comments"></i> 2 Comments
                            </a>
                          </span>
                        </div>
                        <h3 className="tp-blog__title mb-15">
                          <Link href="/blog-details">
                            {titleTwo}
                          </Link>
                        </h3>
                        <p>
                          Nancy boy Charles down the pub get stuffed mate easy
                          peasy brown bread car boot squiffy loo, blimey arse
                          over tit it’s your round cup of char horse play
                          chimney pot old. Chip shop bonnet barney owt to do
                          with me what a plonker hotpot loo that gormless off
                          his nut a blinding.
                        </p>
                        <div className="tp-blog-btn mt-25">
                          <Link className="tp-btn" href="/blog-details">
                            Read More                            
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="tp-pagination">
                  <nav>
                    <ul>
                      <li>
                        <Link href="/blog">
                          <i className="far fa-angle-left"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">1</Link>
                      </li>
                      <li>
                        <span className="current">2</span>
                      </li>
                      <li>
                        <Link href="/blog">3</Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          <i className="far fa-angle-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* blog right side */}
            <BlogRightSide />
            {/* blog right side */}
          </div>
        </div>
      </div>

      {/* video modal */}
      <VideoModal show={show} handleClose={handleClose} />
    </>
  );
};

export default BlogArea;
