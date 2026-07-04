import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area black-bg-2 pt-100 fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4">
                <div className="footer__widget mb-40">
                  <div className="footer__logo">
                    <Link href="/">
                        <img src="assets/img/logo/footer-logo.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title">Main Links</h5>
                  <div className="footer__widget-content">
                    <div className="footer__links">
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title">Other Pages</h5>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                        <li>
                          <Link href="/blog">History</Link>
                        </li>
                        <li>
                          <Link href="/team">Team</Link>
                        </li>
                        <li>
                          <Link href="/services">Clients</Link>
                        </li>
                        <li>
                          <Link href="/blog-details">Testimonials</Link>
                        </li>
                        <li>
                          <Link href="/faq">Get Quote</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title">Our Services</h5>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                        <li>
                          <Link href="/services-details">Manufacturing</Link>
                        </li>
                        <li>
                          <Link href="/services-details">Engineering</Link>
                        </li>
                        <li>
                          <Link href="/services-details">Consctruction</Link>
                        </li>
                        <li>
                          <Link href="/services-details">Shipping</Link>
                        </li>
                        <li>
                          <Link href="/services-details">Rennovation</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-8 col-sm-8">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title">Connect with us</h5>
                  <div className="footer__widget-content">
                    <p className="ft-text mb-35">
                      Subscribe to out newsletter today to receive updates on
                      the latest news, releases and special offers. We respect
                      your privacy. Your information is safe.
                    </p>
                    <div className="footer__subscribe-form p-relative mb-30">
                      <form action="#">
                        <input type="email" placeholder="Email Address" />
                        <button type="submit" className="s-button">
                          Subscribe
                        </button>
                      </form>
                    </div>
                    <div className="footer__social">
                      <div className="footer__social-info">
                        <span>Social Network:</span>
                        <div className="footer__social-icon">
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__copyright white-bg mt-60">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="footer__copyright-text">
                    <p>
                      Copyright & Design By <a href="#">@ThemePure</a> - 2022
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="footer__copyright-links text-sm-end">
                    <Link href="/faq">Faq</Link>
                    <Link href="/contact">Careers </Link>
                    <Link href="/contact">Refund Policy</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__shape-1">
            <img src="assets/img/footer/footer-shape-1.png" alt="" />
          </div>
          <div className="footer__shape-2">
            <img src="assets/img/footer/footer-shape-2.png" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
