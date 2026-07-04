import Link from "next/link";

const SmServices = () => {
  const smServicesData = [
    {
      id: 1,
      icon: "flaticon-container-1",
    },
    {
      id: 2,
      icon: "flaticon-lever",
    },
    {
      id: 3,
      icon: "flaticon-pumpjack",
    },
    {
      id: 4,
      icon: "flaticon-conveyor-belt",
    },
  ];
  return (
    <>
      <div className="sm-services__area grey-bg-5 pt-120 pb-190">
        <div className="container">
          <div className="sm-services__lists-2">
            <div className="row">
              {smServicesData.map((service) => {
                return (
                  <div key={service.id} className="col-xl-3 col-lg-4 col-md-6">
                    <div className="sm-services__item mb-30">
                      <div className="flip-card">
                        <div className="flip-card-inner flip-card-inner-2">
                          <div className="flip-card-front flip-card-front-2">
                            <div className="flip-card-icon flip-card-icon-2 mb-20">
                              <i className={`${service.icon}`}></i>
                            </div>
                            <h5 className="flip-card-title flip-card-title-2">
                              Industry Tool #0{`${service.id}`}
                            </h5>
                            <div className="flip-card-omore">
                              <p>
                                We work to understand your issues and are driven
                              </p>
                            </div>
                          </div>
                          <div className="flip-card-back flip-card-back-2">
                            <div className="flip-card-icon mb-20">
                              <i className={`${service.icon}`}></i>
                            </div>
                            <h5 className="flip-card-title">
                              <Link href="/services-details">
                                Industry Tool #0{`${service.id}`}
                              </Link>
                            </h5>
                            <div className="flip-card-omore">
                              <p>
                                We work to understand your issues and are driven
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmServices;
