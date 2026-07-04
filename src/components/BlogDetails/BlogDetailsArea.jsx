import BlogRightSide from "../common/BlogRightSide";

const BlogDetailsArea = () => {
  return (
    <>
      <div className="blog__details-area pt-120 pb-70">
        <div className="container custom-container-3">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog__wrapper mb-50">
                <div className="tp-blog mb-50">
                  <div className="tp-blog__thumb m-img mb-35">
                    <img src="assets/img/blog/blog-d-1.jpg" alt="blog-img" />
                  </div>
                  <div className="tp-blog__meta mb-15">
                    <span>
                      <a href="#">
                        <i className="fal fa-clock"></i> October 30, 2021
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="far fa-user"></i> Iqbal
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="far fa-comments"></i> 2 Comments
                      </a>
                    </span>
                  </div>
                  <p>
                    Leading will always depend on your chosen font size and
                    measure (or line length). In general, the longer the
                    measure, the longer the leading should be. Therefore,
                    presenting a chart of the most popular choices for leading
                    in pixels wouldn’t make sense here. More appropriate would
                    be for you to use a relative unit, such as an em or
                    percentage value, that determines the relation between
                    leading and measure and between leading and font size.
                  </p>

                  <p>
                    Note that 1.5 is a value that is commonly recommended in
                    classic typographic books, so our study backs up this rule
                    of thumb. Very few websites use anything less than that. The
                    number of websites that go above 1.48 decreases as you get
                    further from this value.
                  </p>

                  <blockquote>
                    <p>
                      Tosser argy-bargy mush loo at public school Elizabeth up
                      the duff buggered chinwag on your bike mate don’t get
                      shirty with me super, Jeffrey bobby Richard cheesed off
                      spend a penny a load of old tosh blag horse.
                    </p>

                    <p>
                      <span>Kane Willamson</span>
                    </p>
                  </blockquote>
                  <p className="b-text mb-30">
                    Heeky bugger cracking goal starkers lemon squeezy lost the
                    plot pardon me no biggie the BBC burke gosh boot so I said
                    wellies, zonked a load of old tosh bodge barmy skive off he
                    legged it morish spend a penny my good sir wind up
                    hunky-dory. Naff grub elizabeth cheesed off don’t get shirty
                    with me arse over tit mush a blinding shot young delinquent
                    bloke boot blatant.
                  </p>
                  <div className="blog__d-image m-img mb-30">
                    <img src="assets/img/blog/blog-d-4.jpg" alt="" />
                  </div>
                  <h5 className="tp-blog__sm-title mb-20">
                    Dustrilox is the only theme you will ever need
                  </h5>
                  <p className="b-text mb-25">
                    According to a classic rule of Web typography, 55 to 75 is
                    an optimal number of characters per line. Surprisingly, our
                    study shows that most websites have a higher number. We
                    counted how many characters could fit on one line using the
                    design’s default font size. The result, which is an average
                    of 88.74 characters per line (maximum), is extremely high.
                    Of course, this maximal number is different from the average
                    number of characters per line, which in general ranges
                    between 75 and 85 characters per line. Still, the range is
                    way above the conventional range – quite peculiar.
                  </p>
                  <div className="tp-blog__tag">
                    <span>Post Tags : </span>
                    <a href="#" rel="tag">
                      Brand
                    </a>
                    <a href="#" rel="tag">
                      Business
                    </a>
                  </div>
                </div>
                <div className="post-comments mb-55">
                  <div className="post-comment-title mb-40">
                    <h3>Comments</h3>
                  </div>
                  <div className="latest-comments">
                    <ul>
                      <li>
                        <div className="comments-box">
                          <div className="comments-avatar">
                            <img src="assets/img/author/author-4.jpg" alt="" />
                          </div>
                          <div className="comments-text">
                            <div className="avatar-name">
                              <h5>David Angel Makel</h5>
                              <span className="post-meta">
                                October 26, 2020
                              </span>
                            </div>
                            <p>
                              The bees knees bite your arm off bits and bobs he
                              nicked it gosh gutted mate blimey, old off his nut
                              argy bargy vagabond buggered dropped.
                            </p>
                            <a href="#" className="comment-reply">
                              Reply
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="children">
                        <div className="comments-box">
                          <div className="comments-avatar">
                            <img src="assets/img/author/author-5.jpg" alt="" />
                          </div>
                          <div className="comments-text">
                            <div className="avatar-name">
                              <h5>Bailey Wonger</h5>
                              <span className="post-meta">
                                October 27, 2020
                              </span>
                            </div>
                            <p>
                              Do one say wind up buggered bobby bite your arm
                              off gutted mate, David victoria sponge cup of char
                              chap fanny around.
                            </p>
                            <a href="#" className="comment-reply">
                              {" "}
                              Reply
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="children">
                        <div className="comments-box">
                          <div className="comments-avatar">
                            <img src="assets/img/author/author-6.jpg" alt="" />
                          </div>
                          <div className="comments-text">
                            <div className="avatar-name">
                              <h5>Hilary Ouse</h5>
                              <span className="post-meta">
                                October 28, 2020
                              </span>
                            </div>
                            <p>
                              Baking cakes is cobblers wellies William geeza
                              bits and bobs what a plonker its your round,
                            </p>
                            <a href="#" className="comment-reply">
                              Reply
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="post-comment-form">
                  <h4>Leave a Reply </h4>
                  <span>Your email address will not be published.</span>
                  <form action="#">
                    <div className="row">
                      <div className="col-xl-6 col-md-6">
                        <div className="post-input">
                          <input type="text" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-6">
                        <div className="post-input">
                          <input type="email" placeholder="Your Email" />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="post-input">
                          <input type="text" placeholder="Website" />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="post-input">
                          <textarea placeholder="Your message..."></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="tp-btn">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* blog right side */}
            <BlogRightSide />
            {/* blog right side */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsArea;
