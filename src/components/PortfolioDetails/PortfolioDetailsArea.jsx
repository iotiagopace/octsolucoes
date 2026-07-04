const PortfolioDetailsArea = () => {
  return (
    <>
      <div className="portfoilo__area pt-110 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-7 col-lg-7">
              <div className="portfolio__details mb-50">
                <h4 className="portfolio__details-title">
                  Future is brighter when you’re more prepared
                </h4>
                <p className="pt-d-text mb-50">
                  We are increases exponentially. Today banks and other
                  financial organizations face the need of providing the best
                  possible services in the best possible way and reachable by
                  everyone everywhere. We are watching to a spread of different
                  products and services being available through the use.
                </p>
                <div className="pt-d-image w-img mb-35">
                  <img src="assets/img/portfolio/pt-d.jpg" alt="portfolio-details-img"/>
                </div>
                <div className="ptd-descriptiopn mt-55 mb-25">
                  <span className="p-quote">A</span>
                  <p>
                    A recognizable and loved brand is one of the most valuable
                    assets a company owns. In fact, 59% of customers prefer to
                    buy products from brands they know. How do you become a
                    sought-after brand with endless sales and raving fans? By
                    identifying your promise to a customer or client.
                  </p>
                </div>
                <p className="pt-d-text mb-25">
                  This shortage is being seen in both the airline and the cargo
                  industries. With such a small pool of applicants to choose
                  from, these two sectors are
                  <span className="hg-light">battling</span> to get the most
                  qualified available candidates. Many pilots are increasingly
                  being wooed to get behind the controls of passenger planes
                  over cargo flights—frankly, it’s tough to compete with jobs
                  perks like fixed schedules & free flights for your family
                  across the world. This is no anecdotal pilot shortage,
                  either—the same problems are found on a global scale, with
                  Boeing estimating an incredible shortage of
                  <span className="hg-light">790,000</span> or more pilots
                  across the world over the next two decades. In the shorter
                  term, the domestic industry can expect more than
                  <span className="hg-light">8,000</span>.
                </p>
                <blockquote className="mb-50">
                  Unfilled vacancies per year by 2020, and five years later that
                  number could be higher than 12,000 pilot-less flights in need
                  of help.
                </blockquote>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="pt-d-image mb-30 w-img">
                    <img src="assets/img/portfolio/pt-d1.jpg" alt="portfoilo-img"/>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="pt-d-image mb-30 w-img">
                    <img src="assets/img/portfolio/pt-d2.jpg" alt="portfoilo-img"/>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="pt-d-image mb-30 w-img">
                      <img src="assets/img/portfolio/pt-d3.jpg" alt="portfoilo-img"/>
                    </div>
                  </div>
                </div>
                <p className="pt-d-text pt-20">
                  Known as an IT managed services provider, an IT support
                  company is comprised of professional IT specialists who make
                  up the company core IT team. The team provides your. business
                  with expert guidance and management for a variety of
                  information technology needs. A solution is an implementation
                  of people, processes, information and technologies in a
                  distinct system to support a set of business or technical
                  capabilities that solve one or more business problems.
                </p>
                <div className="row pt-30">
                  <div className="col-lg-6">
                    <div className="pt-sm-item mb-30">
                      <h5 className="pt-sm-item-title">
                        <span className="pt-sm-item-number">01.</span> Our
                        Mission
                      </h5>
                      <p>
                        Services is a general term that describes work that
                        supports a business but does not produce a tangible
                        commodity. ... A good business service aligns IT assets
                        with the needs of a company employees and customers and
                        support business goals, facilitating the ability of the
                        company.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="pt-sm-item mb-30">
                      <h5 className="pt-sm-item-title">
                        <span className="pt-sm-item-number">02.</span> Our
                        Challange
                      </h5>
                      <p>
                        Services is a general term that describes work that
                        supports a business but does not produce a tangible
                        commodity. ... A good business service aligns IT assets
                        with the needs of a company employees and customers and
                        support business goals, facilitating the ability of the
                        company.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-5">
              <div className="portfolio__sidebar mb-50">
                <div className="ps__item mb-40">
                  <div className="ps__item-info">
                    <h5 className="ps__title">Project Details</h5>
                    <div className="ps-list">
                      <ul>
                        <li>
                          <span>Category:</span> Manufacturing
                        </li>
                        <li>
                          <span>Client:</span> Alonso Dicosa
                        </li>
                        <li>
                          <span>Values:</span> $20,000
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ps-button">
                    <a href="#" className="tp-btn-ps w-100">
                      Live Preview{" "}
                      <i className="fa-light fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
                <div className="ps__form mb-40">
                  <h5 className="ps__title">Get A Quote</h5>
                  <form action="#">
                    <div className="contact-filed mb-20">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name here"
                      />
                    </div>
                    <div className="contact-filed contact-icon-mail mb-20">
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter email address here"
                      />
                    </div>
                    <div className="contact-filed contact-icon-message mb-20">
                      <textarea placeholder="Enter message here"></textarea>
                    </div>
                    <div className="form-submit text-center">
                      <button className="tp-btn w-100">Get A Quote</button>
                    </div>
                  </form>
                </div>
                <div className="ps__image w-img">
                  <img src="assets/img/portfolio/pt-d4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsArea;
