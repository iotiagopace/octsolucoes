import Link from "next/link";
import useSticky from "../../hook/use-sticky";
import useGlobalContext from "../../hook/useGlobalContext";
import Sidebar from "../common/Sidebar";

const HeaderTwo = () => {
  const { headerSticky } = useSticky();
  const { setShowSidebar } = useGlobalContext();
  return (
    <>
      <header className="header__area">
        <div className="header__top theme-bg d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="header__top-info">
                  <p className="header__top-info-text">
                    <span>Feed:</span> Our company is one of the
                  </p>
                  <p>
                    <a href="#">Deliver the sustainable success</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5">
                <div className="header__top-right">
                  <div className="header__sm-links">
                    <Link href="/faq">Faq</Link>
                    <Link href="/contact">Careers</Link>
                  </div>
                  <div className="header__lang">
                    <select>
                      <option>English</option>
                      <option>Bangla</option>
                      <option>French</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__inner grey-bg-5 p-relative z-index-1 d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-3">
                <div className="header__logo-overlay">
                  <Link href="/">
                      <img src="assets/img/logo/logo-black.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-9">
                <div className="header__smcontact">
                  <div className="header__smcontact-list">
                    <div className="sm-clist__icon">
                      <i className="flaticon-location-pin"></i>
                    </div>
                    <div className="sm-clist__text">
                      <h4>
                        <a
                          href="https://goo.gl/maps/2McRmWEFCW8nj9p16"
                          target="_blank"
                          rel="noreferrer"
                        >
                          16/A, New York, US
                        </a>
                      </h4>
                      <span>Contact Us</span>
                    </div>
                  </div>
                  <div className="header__smcontact-list">
                    <div className="sm-clist__icon">
                      <i className="flaticon-telephone-call"></i>
                    </div>
                    <div className="sm-clist__text">
                      <h4>
                        <a href="tel:+78690989067">786. 909. 890. 67</a>
                      </h4>
                      <span>Get Support</span>
                    </div>
                  </div>
                  <div className="header__smcontact-list header__smcontact-list-df">
                    <div className="sm-clist__text sm-clist__text-2">
                      <span>Get A Quote</span>
                      <h4>
                        <Link href="/contact">Make Request</Link>
                      </h4>
                    </div>
                    <div className="sm-clist__icon sm-clist__icon-2">
                      <Link href="/contact">
                        <i className="fal fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="header-sticky"
          className={`${
            headerSticky
              ? "header__bottom-2 black-bg-2 header__sticky"
              : "header__bottom-2 black-bg-2"
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-10 col-lg-10 col-md-6 col-6">
                <div className="main-menu main-menu-2">
                  <nav id="mobile-menu" className="d-none d-lg-block">
                    <ul>
                      <li className="has-dropdown">
                        <Link className="active" href="/" >
                          Home
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/">Home One </Link>
                          </li>
                          <li>
                            <Link href="/home-two">Home Two</Link>
                          </li>
                          <li>
                            <Link href="/home-three">Home Three</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/services">Services</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/services">Services</Link>
                          </li>
                          <li>
                            <Link href="/services-details">
                              Services Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/about">Pages</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/team">Team</Link>
                          </li>
                          <li>
                            <Link href="/team-details">Team Details</Link>
                          </li>
                          <li>
                            <Link href="/portfolio">Cases</Link>
                          </li>
                          <li>
                            <Link href="/portfolio-details">Cases Details</Link>
                          </li>
                          <li>
                            <Link href="/pricing">pricing Page</Link>
                          </li>
                          <li>
                            <Link href="/faq">FAQ Page</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/blog">News</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/blog">News</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">News Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="mobile-logo d-lg-none">
                  <Link href="/">
                    <img src="assets/img/logo/logo-white.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                <div className="header__sm-action">
                  <div className="header__sm-action-item right-border">
                    <button
                      onClick={() => setShowSidebar(true)}
                      className="info-toggle-btn f-right sidebar-toggle-btn"
                    >
                      <i className="fal fa-bars"></i>
                    </button>
                  </div>
                  <div className="header__sm-action-item right-border">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#search-modal"
                      href="#"
                      className="search"
                    >
                      <i className="fal fa-search"></i>
                    </a>
                  </div>
                  <div className="header__sm-action-item">
                    <Link href="/about">
                      <i className="fa-light fa-user"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* modal-search-start */}
      <div
        className="modal fade"
        id="search-modal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <button
          type="button"
          className="close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form>
              <input type="text" placeholder="Search here..." />
              <button>
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* modal-search-end */}

      {/* sidebar */}
      <Sidebar />
      {/* sidebar */}
    </>
  );
};

export default HeaderTwo;
