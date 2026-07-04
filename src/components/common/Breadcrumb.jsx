import Link from 'next/link';

const Breadcrumb = ({ title, subtitle }) => {
  return (
    <>
      <section
        className="page__title-area page__title-height page__title-overlay 
        d-flex align-items-center"
        style={{
          background: `url(assets/img/bg/page-bg.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page__title-wrapper mt-100">
                <div className="breadcrumb-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <span>{title}</span>
                    </li>
                  </ul>
                </div>
                <h3 className="page__title mt-20">{subtitle}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
