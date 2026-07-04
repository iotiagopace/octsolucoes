import { CircularProgressbar } from "react-circular-progressbar";

const FactArea = () => {
  return (
    <>
      <section className="fact__area fact__bg pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="fact__image w-img">
                <img src="assets/img/fact/fact-image.jpg" alt="fact-img" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="fact__info">
                <div className="section__wrapper section__wrapper-3 mb-70">
                  <h4 className="section__title">
                    Best innovations in the metallurgy today
                  </h4>
                  <div className="r-text">
                    <span>fun fact</span>
                  </div>
                </div>
                <div className="fact__content">
                  <div className="fact__content-item pb-25">
                    <div className="fact__progress-circular">
                      <div style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={75} text={'75%'} />
                      </div>
                    </div>
                    <div className="fact__content-item-des">
                      <h6>Stunning Page Builder</h6>
                      <p>
                        You just import any of our professionally designed demos
                        with a click of a button. No xml files, it’s an amazing
                        thing.
                      </p>
                    </div>
                  </div>
                  <div className="fact__content-item fact__content-item-border pb-25">
                    <div className="fact__progress-circular">
                    <div style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={50} text={'50%'} />
                      </div>
                    </div>
                    <div className="fact__content-item-des">
                      <h6>Premium Customer Support</h6>
                      <p>
                        You just import any of our professionally designed demos
                        with a click of a button. No xml files, it’s an amazing
                        thing.
                      </p>
                    </div>
                  </div>
                  <p className="fc-text mt-25">
                    Our mission is to provide creative tools that help anyone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FactArea;
