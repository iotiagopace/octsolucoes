import BlogData from "../../data/blogData";
import Link from "next/link";

const BlogArea = () => {
  return (
    <>
      <section className="blog__area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__wrapper section__wrapper-2 mb-30 text-center">
                <span className="st-meta">News</span>
                <h4 className="section__title">Company blog & insights</h4>
              </div>
            </div>
          </div>
          <div className="row mt-25">
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
