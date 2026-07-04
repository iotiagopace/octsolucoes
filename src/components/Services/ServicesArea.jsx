import Link from "next/link";

const ServicesArea = () => {
  const servicesData = [
    {
      id: 1,
      icon: "flaticon-ai",
      title: "Industrial Manufacturing",
    },
    {
      id: 2,
      icon: "flaticon-warehouse",
      title: (
        <>
          Engineering <br /> Solutions
        </>
      ),
    },
    {
      id: 3,
      icon: "flaticon-crusher",
      title: (
        <>
          Building <br /> Maintenance
        </>
      ),
    },
    {
      id: 4,
      icon: "flaticon-factory",
      title: (
        <>
          Lead Abatement <br /> &amp; Asbestos
        </>
      ),
    },
    {
      id: 5,
      icon: "flaticon-lever",
      title: (
        <>
          Tertiary Sector of <br /> Industry
        </>
      ),
    },
    {
      id: 6,
      icon: "flaticon-chip",
      title: (
        <>
          Include Health <br /> Care
        </>
      ),
    },
    {
      id: 7,
      icon: "flaticon-stock",
      title: (
        <>
          Warehouse <br /> & Reservation
        </>
      ),
    },
    {
      id: 8,
      icon: "flaticon-tank-truck",
      title: (
        <>
          Well as Final <br /> Consumer
        </>
      ),
    },
  ];
  return (
    <>
      <section className="services__area-2 pt-90 pb-80">
        <div className="container">
          <div className="row mt-30">
            {servicesData.map((service) => {
              return (
                <div key={service.id} className="col-xl-3 col-lg-3 col-md-6">
                  <div className="services__item services__item-grid text-center mb-40">
                    <div className="services__item-content">
                      <div className="ser__icon mb-30">
                        <i className={`${service.icon}`}></i>
                      </div>
                      <h5 className="ser__title mb-10">
                        <Link href="/services-details">{service.title}</Link>
                      </h5>
                      <p>
                        We help businesses elevate their value through custom
                        software development
                      </p>
                      <div className="ser__more-option mt-15">
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
