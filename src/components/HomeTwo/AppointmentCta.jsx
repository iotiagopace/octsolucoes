
import Link from "next/link";

const AppointmentCta = () => {
  return (
      <section className="appoinment-cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="appoinment-cta__content black-bg-2">
                <h5 className="appoinment-cta__content-title">
                  Incredible stock. Flexible pricing. Buy credits or subscribe
                  today.
                </h5>
                <Link className="tp-btn-df-active-2" href="/contact">
                  Make An Appointment
                  <i className="fal fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default AppointmentCta;
