import Link from "next/link";

const SmServices = () => {
  const SmServicesData = [
    {
      id: 1,
      title: "Transport Goods",
      backTitle: "Transport Goods",
      url: "/services-details",
    },
    {
      id: 2,
      title: "Manufacturing",
      backTitle: "Manufacturing",
      url: "/services-details",
    },
    {
      id: 3,
      title: "Industrial Service",
      backTitle: "Industrial Service",
      url: "/services-details",
    },
    {
      id: 4,
      title: "Contact Us",
      backTitle: "786. 909. 890. 67",
      url: "/contact",
    },
  ];
  return (
    <>
      <section className="sm-services__area black-bg-2 pt-0 pb-110">
        <div className="container">
          <div className="sm-services__lists">
            <div className="row">
              {SmServicesData.map((service) => {
                return (
                  <div key={service.id} className="col-xl-3 col-lg-4 col-md-6">
                    <div className="sm-services__item mb-15">
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <div className="flip-card-icon mb-20">
                              <i className="flaticon-container-1"></i>
                            </div>
                            <h5 className="flip-card-title">
                              <Link href={`${service.url}`}>
                                {service.title}
                              </Link>
                            </h5>
                            <div className="flip-card-omore">
                              <i className="fa-light fa-arrow-right-long"></i>
                            </div>
                          </div>
                          <div className="flip-card-back">
                            <div className="flip-card-icon mb-20">
                              <i className="flaticon-container-1"></i>
                            </div>
                            <h5 className="flip-card-title">
                              <Link href={`${service.url}`}>
                                {service.backTitle}
                              </Link>
                            </h5>
                            <span className="sp-text mb-10">
                              <Link href="/contact">Get Support</Link>
                            </span>
                            <div className="flip-card-omore">
                              <Link href={`${service.url}`}>
                               <i className="fa-light fa-arrow-right-long"></i>
                              </Link>
                            </div>
                            <div className="flip-card-bg">
                              <img src="assets/img/services/pattern-bg.png" alt="" />
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
          <div className="sm-services__info">
            <h5>
              Incredible stock. Flexible pricing. Buy credits or subscribe
              today.
            </h5>
            <div className="sm-services__more">
              <Link href="/contact">
                Make An Appointment <i className="far fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SmServices;
