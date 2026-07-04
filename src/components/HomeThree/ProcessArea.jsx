import Link from 'next/link';

const ProcessArea = () => {
  const processData = [
    {
      id: 1,
      icon: "assets/img/icon/idea.svg",
      title: "Discuss About Project",
    },
    {
      id: 2,
      icon: "assets/img/icon/megaphone.svg",
      title: "Making Research",
    },
    {
      id: 3,
      icon: "assets/img/icon/pie-chart.svg",
      title: "Define Solution",
    },
    {
      id: 4,
      icon: "assets/img/icon/report.svg",
      title: "Give Product",
    },
  ];
  return (
    <>
      <section
        className="process__area pt-120 pb-105"
        style={{
            background: `url(assets/img/bg/process-bg.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__wrapper section__wrapper-2 mb-30 text-center">
                <span className="st-meta">Process</span>
                <h4 className="section__title">Company Work Process</h4>
              </div>
            </div>
          </div>
          <div className="row mt-30">
            {processData.map((process) => {
              return (
                <div key={process.id} className="col-xl-3 col-lg-3 col-md-6">
                  <div className="process__item text-center mb-40">
                    <div className="process__content">
                      <div className="process__list-icon2 mb-20">
                        <img src={`${process.icon}`} alt="icon" />
                      </div>
                      <span>Process 0{`${process.id}`}</span>
                      <h5 className="p-name mt-20">
                        <Link href="/services-details">{process.title}</Link>
                      </h5>
                      <div className="process__more">
                        <Link href="/services-details">
                          <i className="fa-light fa-arrow-right-long"></i>
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

export default ProcessArea;
