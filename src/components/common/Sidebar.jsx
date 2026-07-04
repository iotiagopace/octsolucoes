import SidebarContact from "./subComponents/SidebarContact";
import useGlobalContext from "../../hook/useGlobalContext";
import SidebarSocial from "./subComponents/SidebarSocial";
import * as Accordion from "@radix-ui/react-accordion";
import SidebarImg from "./subComponents/SidebarImg";
import Link from "next/link";

const Sidebar = ({ sidebarTwo }) => {
  const { showSidebar, setShowSidebar } = useGlobalContext();

  return (
    <>
      <div
        className={`${
          sidebarTwo ? "sidebar__area sidebar__area-2" : "sidebar__area"
        } ${showSidebar ? "sidebar-opened" : ""}`}
      >
        <div className="sidebar__wrapper">
          <div className="sidebar__close">
            <button
              onClick={() => setShowSidebar(false)}
              className="sidebar__close-btn"
              id="sidebar__close-btn"
            >
              <i className="fal fa-times"></i>
            </button>
          </div>

          <div className="sidebar__content">
            <div className="sidebar__logo mb-40">
              <Link href="/">
                <img src="assets/img/logo/logo-black.png" alt="logo" />
              </Link>
            </div>

            <div className="sidebar__search mb-25">
              <form action="#">
                <input type="text" placeholder="What are you searching for?" />
                <button type="submit">
                  <i className="far fa-search"></i>
                </button>
              </form>
            </div>

            {/* ------------------ NAVIGATION START ------------------ */}
            <div className="mobile-menu fix">
              <nav
                id="mobile-menu"
                className={`${sidebarTwo ? "d-xl-none" : "d-lg-none"}`}
              >
                <Accordion.Root type="multiple" className="accordion-menu">
                  <ul>
                    {/* HOME */}
                    <Accordion.Item value="home">
                      <Accordion.Trigger className="iconAdd">
                        <a className="single_link">Home</a>
                      </Accordion.Trigger>

                      <Accordion.Content>
                        <ul
                          onClick={() => setShowSidebar(false)}
                          className="sidebar_sub_menu submenu text-black"
                        >
                          <li>
                            <Link href="/">Home One</Link>
                          </li>
                          <li>
                            <Link href="/home-two">Home Two</Link>
                          </li>
                          <li>
                            <Link href="/home-three">Home Three</Link>
                          </li>
                        </ul>
                      </Accordion.Content>
                    </Accordion.Item>

                    {/* SERVICES */}
                    <Accordion.Item value="services">
                      <Accordion.Trigger className="iconAdd">
                        <a className="single_link">Services</a>
                      </Accordion.Trigger>

                      <Accordion.Content>
                        <ul
                          onClick={() => setShowSidebar(false)}
                          className="sidebar_sub_menu submenu text-black"
                        >
                          <li>
                            <Link href="/services">Services</Link>
                          </li>
                          <li>
                            <Link href="/services-details">
                              Services Details
                            </Link>
                          </li>
                        </ul>
                      </Accordion.Content>
                    </Accordion.Item>

                    {/* PAGES */}
                    <Accordion.Item value="pages">
                      <Accordion.Trigger className="iconAdd">
                        <a className="single_link">Pages</a>
                      </Accordion.Trigger>

                      <Accordion.Content>
                        <ul
                          onClick={() => setShowSidebar(false)}
                          className="sidebar_sub_menu submenu text-black"
                        >
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
                            <Link href="/pricing">Pricing Page</Link>
                          </li>
                          <li>
                            <Link href="/faq">FAQ Page</Link>
                          </li>
                        </ul>
                      </Accordion.Content>
                    </Accordion.Item>

                    {/* NEWS */}
                    <Accordion.Item value="news">
                      <Accordion.Trigger className="iconAdd">
                        <a className="single_link">News</a>
                      </Accordion.Trigger>

                      <Accordion.Content>
                        <ul
                          onClick={() => setShowSidebar(false)}
                          className="sidebar_sub_menu submenu text-black"
                        >
                          <li>
                            <Link href="/blog">News</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">News Details</Link>
                          </li>
                        </ul>
                      </Accordion.Content>
                    </Accordion.Item>

                    {/* CONTACT (NO DROPDOWN) */}
                    <div className="single_link iconAdd border-0">
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </div>
                  </ul>
                </Accordion.Root>
              </nav>
            </div>
            {/* ------------------ NAVIGATION END ------------------ */}

            <div
              className={`sidebar__text d-none ${
                sidebarTwo ? "d-xl-block" : "d-lg-block"
              }`}
            >
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born...
              </p>
            </div>

            <SidebarImg
              sidebarTwo={sidebarTwo}
              setShowSidebar={setShowSidebar}
            />
            <SidebarContact />
            <SidebarSocial />
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setShowSidebar(false)}
        className={`${showSidebar ? "body-overlay opened" : "body-overlay"}`}
      ></div>
    </>
  );
};

export default Sidebar;
