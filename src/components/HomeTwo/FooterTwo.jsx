import Link from 'next/link';

const FooterTwo = () => {
  return (
    <>
      <footer>
        <div
          className="footer__area-2 pt-100"
          style={{
            background: `url(assets/img/footer/footer-bg.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="footer__widget footer__col-2 mb-40">
                  <div className="footer__logo mb-35">
                    <Link href="/">
                        <img src="assets/img/logo/footer-logo.png" alt="logo" />
                    </Link>
                  </div>
                  <div className="footer__widget-content">
                    <p className="f-text mb-40">
                      Organization that offers any combination of computer
                      hardware, software and consulting. In the past, a
                      solutions provider often built custom hardware &
                      developed.
                    </p>
                  </div>
                  <div className="footer__subscribe-form footer__subscribe-form-2 p-relative mb-30">
                    <form action="#">
                      <input type="email" placeholder="Email Address" />
                      <button type="submit" className="s-button-2">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title">Main Links</h5>
                  <div className="footer__widget-content">
                    <div className="footer__links footer__links-2 footer__links-d">
                      <ul>
                        <li>
                          <Link href="/about">Company</Link>
                        </li>
                        <li>
                        <Link href="/faq">Careers</Link>
                        </li>
                        <li>
                        <Link href="/contact">Press media</Link>
                        </li>
                        <li>
                          <Link href="/blog">Our Blog</Link>
                        </li>
                        <li>
                          <Link href="/faq">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="/pricing">Pricing</Link>
                        </li>
                        <li>
                          <Link href="/about">Why Choose</Link>
                        </li>
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/portfolio-details">Case Studies</Link>
                        </li>
                        <li>
                          <Link href="/services">Our Services</Link>
                        </li>
                        <li>
                          <Link href="/contact">Sitemap</Link>
                        </li>
                        <li>
                          <Link href="/faq">Careers</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6">
                <div className="footer__widget footer__col-3 mb-40">
                  <h5 className="footer__widget-title">Main Services</h5>
                  <div className="footer__widget-content">
                    <div className="footer__links footer__links-d">
                      <ul>
                        <li>
                          <Link href="/services-details">
                            Electronics Industry
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details">
                            Industrial & Manufacturing
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details">Semicon & Solar</Link>
                        </li>
                        <li>
                          <Link href="/services-details">Oil & Gas Cargo</Link>
                        </li>
                        <li>
                          <Link href="/services-details">Energy & Chemicals</Link>
                        </li>
                        <li>
                          <Link href="/services-details">Transportation</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-8 col-sm-12">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title">News & Feeds</h5>
                  <div className="footer__widget-content">
                    <div className="footer__post">
                      <div className="footer__post-item pb-20">
                        <div className="footer__post-item-image">
                          <Link href="/blog-details">
                            <img src="assets/img/blog/footer-post-1.jpg" alt="footer-post"/>
                          </Link>
                        </div>
                        <div className="footer__post-item-content">
                          <span>June 12, 2022</span>
                          <h5>
                            <Link href="/blog-details">
                              Chip startup says sensors may replace buttons on
                            </Link>
                          </h5>
                        </div>
                      </div>
                      <div className="footer__post-item footer__post-item-border pb-20">
                        <div className="footer__post-item-image">
                          <Link href="/blog-details">
                            <img src="assets/img/blog/footer-post-2.jpg" alt="footer-post"/>
                          </Link>
                        </div>
                        <div className="footer__post-item-content">
                          <span>June 14, 2022</span>
                          <h5>
                            <Link href="/blog-details">
                              Chip startup says sensors may replace buttons on
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright-2 black-bg pt-25 pb-25 mt-50">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="footer__copyright-text">
                    <p>
                      Copyright & Design By <a href="#">ThemePure</a> - 2022
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="footer__copyright-links text-sm-end">
                    <a href="#">Fb.</a>
                    <a href="#">Tw.</a>
                    <a href="#">Yt.</a>
                    <a href="#">Ln.</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
