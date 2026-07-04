import Link from 'next/link';

const SmNavigation = () => {
  return (
    <>
      <div className="sm__nevigation mb-120">
        <div className="container">
          <div className="nav__sm-area grey-bg-5 pt-20">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-5 col-md-5">
                <div className="nevigation__info mb-20 pl-30">
                  <img src="assets/img/nav/nav-img-1.jpg" alt="nav-img" className="img-fluid"/>
                  <div className="nevigation__content">
                    <h6 className="nevigation__title">
                      <Link href="/services-details">Manufacturing</Link>
                    </h6>
                    <p>
                      <Link href="/services-details">Prev Service</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2">
                <div className="nevigation__icon text-center mb-20">
                  <Link href="/services-details">
                    <i className="fas fa-th"></i>
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5">
                <div className="nevigation__info nevigation__info-2 mb-20 pr-30">
                  <div className="nevigation__content">
                    <h6 className="nevigation__title">
                      <Link href="/services-details">Construction</Link>
                    </h6>
                    <p>
                      <Link href="/services-details">Next Service</Link>
                    </p>
                  </div>
                  <img src="assets/img/nav/nav-img-2.jpg" alt="nav-img" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmNavigation;
