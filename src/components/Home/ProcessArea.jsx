import Link from 'next/link';

const ProcessArea = () => {
  return (
      <section className="process__area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="process__images">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="image-1 w-img">
                      <img src="assets/img/process/process-1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="image-2 w-img">
                      <img src="assets/img/process/process-2.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="process__right">
                <div className="section__wrapper mb-55">
                  <h4 className="section__title">
                    Commercial Ministry Hike Import Duty on Aluminium
                  </h4>
                  <div className="r-text">
                    <span>Process</span>
                  </div>
                </div>
                <div className="proceess__list">
                  <div className="process__list-item mb-30">
                    <div className="process__list-info">
                      <div className="process__list-icon">
                        <img src="assets/img/icon/picon-1.png" alt="" />
                      </div>
                      <div className="process__list-content">
                        <span>Process 01</span>
                        <h5>
                          <Link href="/services-details">
                            Discuss About Project
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="process__list-sp-icon">
                      <Link href="/services-details">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="process__list-item mb-30">
                    <div className="process__list-info">
                      <div className="process__list-icon">
                        <img src="assets/img/icon/picon-2.png" alt="" />
                      </div>
                      <div className="process__list-content">
                        <span>Process 02</span>
                        <h5>
                          <Link href="/services-details">Find Easy Solution</Link>
                        </h5>
                      </div>
                    </div>
                    <div className="process__list-sp-icon">
                      <Link href="/services-details">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="process__list-item mb-30">
                    <div className="process__list-info">
                      <div className="process__list-icon">
                        <img src="assets/img/icon/picon-3.png" alt="" />
                      </div>
                      <div className="process__list-content">
                        <span>Process 03</span>
                        <h5>
                          <Link href="/services-details">Troubleshooting</Link>
                        </h5>
                      </div>
                    </div>
                    <div className="process__list-sp-icon">
                      <Link href="/services-details">
                       <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ProcessArea;
