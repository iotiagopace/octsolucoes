import { useState } from "react";
import Link from 'next/link';

const HeroArea = () => {
  const [appointment,setAppointment] = useState(false)

  return (
      <section className="banner__area-3 banner__height-3 pt-120">
        <div className="container">
          <div className="banner__item-3">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="banner__content">
                  <span className="banner__content-meta mb-30">
                    We Create Leading Digital Products
                  </span>
                  <h4 className="banner__content-title">
                    Easy Industry Solutions For Any Kind Business
                  </h4>
                  <div className="banner__button mt-45">
                    <Link className="tp-btn" href="/about" >
                      Our Services
                    </Link>
                    <div className="banner__cinfo">
                      <a href="tel:+998963">
                        <span>Get Support</span> +(890) 980 897 89
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="banner__image text-center w-img">
                  <img src="assets/img/slider/3/slider-03-1.jpg" alt="slider-img"/>
                </div>
              </div>
            </div>
            <div className="banner__d-image">
              <img src="assets/img/slider/slider-d.png" alt="" />
            </div>
            <div className="banner__shape">
              <img src="assets/img/slider/slider-shape-1.png" alt="" />
            </div>
            <div className="banner__shape-2">
              <img src="assets/img/slider/slider-shape-2.png" alt="" />
            </div>
          </div>
          <div className={`appoinment-cta-2 pt-80 ${appointment && 'hide'}`}>
            <div className="row justify-content-center">
              <div className="col-xl-7">
                <div className="appoinment-cta-2__content white-bg">
                  <h5 className="appoinment-cta-2__content-title">
                    By using this website, you agree to our{" "}
                    <a href="#">cookie policy.</a>
                  </h5>
                  <button onClick={()=> setAppointment(true)} className="close-button">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroArea;
