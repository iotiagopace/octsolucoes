import Link from "next/link";
import dynamic from 'next/dynamic';
import useSticky from "../../hook/use-sticky";
import useGlobalContext from "../../hook/useGlobalContext";
import Sidebar from "./Sidebar";

const Header = () => {
  const { headerSticky } = useSticky();
  const { setShowSidebar } = useGlobalContext();
  return (
    <>
      <header
        id="header-sticky"
        className={`${ headerSticky ? "header-area header__sticky" : "header-area"}`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
              <div className="logo-area">
                <div className="logo">
                  <Link href="/">
                      <img src="assets/img/logo/logo-white.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-6 col-6">
              <div className="menu-area menu-padding">
                <div className="main-menu">
                  <nav id="mobile-menu" className="d-none d-lg-block">
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
                            <Link href="/about">About Us</Link>
                          </li>
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
              </div>
              <div
                onClick={() => setShowSidebar(true)}
                className="side-menu-icon d-lg-none text-end"
              >
                <button
                  className="info-toggle-btn f-right sidebar-toggle-btn"
                >
                  <i className="fal fa-bars"></i>
                </button>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 d-none d-lg-block">
              <div className="header-info f-right">
                <div className="info-item info-item-right">
                  <span>Phone Number</span>
                  <h5>
                    <a href="tel:+88096389">786 686 350 36</a>
                  </h5>
                </div>
                <div className="info-item">
                  <span>Free Consultancy</span>
                  <h5>
                    <a href="mailto:info@webmail.com">info@webmail.com</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar  */}
      <Sidebar />
      {/* Sidebar  */}
    </>
  );
};

export default dynamic(()=> Promise.resolve(Header), {ssr: false});

