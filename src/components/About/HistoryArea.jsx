import Link from 'next/link';

const HistoryArea = () => {
  const historyData = [
    {
      id: 1,
      img: "assets/img/testimonial/testimonial-1.jpg",
      year: 2000,
      title: "Journey was started",
    },
    {
      id: 2,
      img: "assets/img/testimonial/testimonial-2.jpg",
      year: 2008,
      title: "Best agency in new york",
    },
    {
      id: 3,
      img: "assets/img/testimonial/testimonial-3.jpg",
      year: 2015,
      title: "Best design award in",
    },
    {
      id: 4,
      img: "assets/img/testimonial/testimonial-4.jpg",
      year: 2022,
      title: "Category design awards",
    },
  ];
  return (
    <>
      <section className="history__area grey-bg-5 pt-120 pb-90 fix">
        <div className="history__right-bg">
          <img src="assets/img/testimonial/testimonial-bg-1.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="section__wrapper mb-55">
                <h4 className="section__title">
                  Best innovations in the metallurgy today
                </h4>
                <div className="r-text">
                  <span>history</span>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="row">
                {historyData.map((history) => {
                  return (
                    <div
                      key={history.id}
                      className="col-xl-3 col-lg-6 col-md-6"
                    >
                      <div className="history__item mb-30">
                        <div className="sm-item-thumb w-img">
                          <a href="#">
                            <img src={history.img} alt="" />
                          </a>
                          <div className="sm-item-tag">
                            <span>{history.year}</span>
                          </div>
                        </div>
                        <div className="sm-item-content">
                          <h6>
                            <Link href="/services-details">{history.title}</Link>
                          </h6>
                          <p>
                            Mission is to provide quality English language
                            instruction
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistoryArea;
