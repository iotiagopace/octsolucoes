import useGlobalContext from "../../hook/useGlobalContext";
import VideoModal from "../common/VideoModal";

const FaqAreaTwo = () => {
  const { show, handleClose, handleShow } = useGlobalContext();
  return (
    <>
      <div className="faq__area-2 grey-bg-5 pt-120 pb-120">
        <div className="container">
          <div className="row align-content-center">
            <div className="col-lg-6">
              <div className="faq__image w-img">
                <img src="assets/img/faq/faq-d-img.jpg" alt="" />
                <div className="vide-button vide-button-3">
                  <button
                    onClick={handleShow}
                    href="https://www.youtube.com/watch?v=o4GuSJYSzrY"
                    className="popup-video"
                  >
                    <i className="fa-solid fa-play"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq__left-info">
                <div className="section__wrapper mb-55">
                  <h4 className="section__title">
                    Commercial Ministry Hike Import Duty on Aluminium
                  </h4>
                  <div className="r-text">
                    <span>Faq Info</span>
                  </div>
                </div>
                <div className="faq__accordion-2">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item sm-accordion-item mb-15">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button sm-accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Banking & finance solutions
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Key business questions are the questions that your
                            data expert will be tasked with answering. They the
                            questions you have about business performance that
                            are central to the overall strategy.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item sm-accordion-item mb-15">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                          className="accordion-button sm-accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Ecommend resources relevant
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Key business questions are the questions that your
                            data expert will be tasked with answering. They the
                            questions you have about business performance that
                            are central to the overall strategy.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item sm-accordion-item mb-15">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button
                          className="accordion-button sm-accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Speed up the wireframing process
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Key business questions are the questions that your
                            data expert will be tasked with answering. They the
                            questions you have about business performance that
                            are central to the overall strategy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal show={show} handleClose={handleClose} />
    </>
  );
};

export default FaqAreaTwo;
