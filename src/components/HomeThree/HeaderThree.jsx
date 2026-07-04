import Link from "next/link";
import useSticky from "../../hook/use-sticky";
import useGlobalContext from "../../hook/useGlobalContext";
import Sidebar from "../common/Sidebar";

const HeaderThree = () => {
  const { headerSticky } = useSticky();
  const { setShowSidebar } = useGlobalContext();
  return (
    <>
      <header
        id="header-sticky"
        className={`header__area-3 pt-40 pb-40 
      ${headerSticky && "header__sticky"}`}
      >
        <div className="container custom-container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-12">
              <div className="header__side">
                <div
                  onClick={() => setShowSidebar(true)}
                  className="header__side-icon info-toggle-btn sidebar-toggle-btn"
                >
                  <span className="bar1"></span>
                  <span className="bar2"></span>
                  <span className="bar3"></span>
                </div>
                <div className="header__side-logo">
                  <Link href="/">
                      <img src="assets/img/logo/logo-black.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-2 col-md-1 col-sm-1">
              <div className="main-menu-3 menu-counter">
                <nav id="mobile-menu-2" className="d-none d-xl-block">
                  <ul>
                    <li className="has-dropdown">
                      <Link href="/">Home</Link>
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
                      <Link href="/portfolio">Portfolio</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                          <Link href="/portfolio-details">
                            Portfolio Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link href="/services">Services</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/services">Services</Link>
                        </li>
                        <li>
                          <Link href="/services-details">Services Details</Link>
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
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-5">
              <div className="header__smcontact-list header__smcontact-list-3">
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
      </header>

      {/* Sidebar */}
      <Sidebar sidebarTwo={true} />
      {/* Sidebar */}
    </>
  );
};

export default HeaderThree;
