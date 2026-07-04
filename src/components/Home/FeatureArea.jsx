import Link from 'next/link';
import useGlobalContext from '../../hook/useGlobalContext';
import VideoModal from '../common/VideoModal';

const FeatureArea = () => {
  const {show,handleClose,handleShow} = useGlobalContext();

  return (
    <>

      <section className="feature__area pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="feature__left mb-40">
                <div className="section__wrapper mb-45">
                  <h4 className="section__title">
                    Commercial Ministry to Hike Import Duty on Aluminium
                  </h4>
                  <div className="r-text">
                    <span>features</span>
                  </div>
                </div>
                <div className="feature__list">
                  <ul>
                    <li>
                      <Link href="/services-details">
                        Banking & finance solutions
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details">
                        Ecommend resources relevant
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details">
                        Speed up the wireframing process
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details">
                        Loved by people across
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="feature__images w-img mb-40">
                <img src="assets/img/feature/fet-01.jpg" alt="" />
                <div className="vide-button">
                  <button onClick={handleShow}
                    href="https://www.youtube.com/watch?v=o4GuSJYSzrY"
                    className="popup-video"
                  >
                    <i className="fa-solid fa-play"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal show={show} handleClose={handleClose} />
    </>
  );
};

export default FeatureArea;
