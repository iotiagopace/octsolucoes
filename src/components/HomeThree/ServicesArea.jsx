import Link from 'next/link';

const ServicesArea = () => {
  const serviceData = [
    {
      id: 1,
      title: "Industrial Manufacturing",
      icon: "flaticon-ai",
    },
    {
      id: 2,
      title: (
        <>
          Engineering <br /> Solutions
        </>
      ),
      icon: "flaticon-warehouse",
    },
    {
      id: 3,
      title: (
        <>
          Building <br /> Maintenance
        </>
      ),
      icon: "flaticon-crusher",
    },
    {
      id: 4,
      title: (
        <>
          Lead Abatement <br /> & Asbestos
        </>
      ),
      icon: "flaticon-factory",
    },
  ];
  return (
    <>
      <section
        className="services__area pt-120 pb-80"
        style={{
          background: `url(assets/img/services/services-bg.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__wrapper section__wrapper-2 mb-30 text-center">
                <span className="st-meta-2">Our Services</span>
                <h4 className="section__title">
                  We have highly-tailored <br /> industry solution.
                </h4>
              </div>
            </div>
          </div>
          <div className="row mt-30">
            {serviceData.map((service) => {
              return (
                <div key={service.id} className="col-xl-3 col-lg-3 col-md-6">
                  <div className="services__item services__item-tp text-center mb-40">
                    <div className="services__item-content">
                      <div className="ser__icon mb-30">
                        <i className={`${service.icon}`}></i>
                      </div>
                      <h5 className="ser__title mb-10">{service.title}</h5>
                      <p>
                        We help businesses elevate their value through custom
                        software development
                      </p>
                      <div className="ser__more-option mt-10">
                        <Link href="/services-details">
                          Service Details
                          <i className="fal fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesArea;
