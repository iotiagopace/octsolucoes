import Link from 'next/link';
import BlogData from "../../data/blogData";

const BlogArea = () => {
  return (
    <>
      <section className="blog__area pt-120 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="section__wrapper mb-40">
                <h4 className="section__title">
                  Best innovations in the metallurgy today
                </h4>
                <div className="r-text">
                  <span>news Info</span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="team__buttons text-lg-end">
                <Link className="tp-join-btn" href="/blog-details" >
                  Related News
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-40">
            {BlogData.slice(0, 3).map((blog) => {
              return (
                <div key={blog.id} className="col-xl-4 col-lg-4 col-md-6">
                  <div className="blog__item-2 blog__item-2-df mb-40">
                    <div className="blog__item-2-image">
                      <div className="blog__item-2-image-inner w-img">
                        <Link href="/blog-details">
                          <img src={`${blog.imgTwo}`} alt="blog-img" />
                        </Link>
                      </div>
                      <div className="blog__item-2-date blog__item-2-date-df">
                        <a href="#" className="month">
                          {blog.date.substring(4, 6)}
                          <span>{blog.date.substring(0, 3)}</span>
                        </a>
                      </div>
                    </div>
                    <div className="blog__item-2-content">
                      <div className="blog__meta">
                        <div className="blog__author">
                          <i className="fal fa-user"></i>
                          <span>
                            <a href="#">{blog.authorThree}</a>
                          </span>
                        </div>
                        <div className="blog__catagory">
                          <span>Industry</span>
                        </div>
                      </div>
                      <h5 className="blog__sm-title">
                        <Link href="/blog-details">{blog.title}</Link>
                      </h5>
                    </div>
                    <div className="blog__btn-2">
                      <Link className="link-btn" href="/blog-details">
                       Read more <i className="fal fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;
