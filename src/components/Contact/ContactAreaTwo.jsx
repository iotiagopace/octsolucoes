import Link from "next/link";

const ContactAreaTwo = () => {
  return (
    <>
      <section className="contact__area-2">
        <div className="container">
          <div className="contact__form">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section__wrapper mb-45">
                    <h4 className="section__title">
                      We can take your business to the next level.
                    </h4>
                    <div className="r-text">
                      <span>contact</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <form id="contact-form" action="mail.php" method="POST">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="contact-filed mb-20">
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your name here"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contact-filed contact-icon-mail mb-20">
                          <input
                            email="text"
                            name="email"
                            placeholder="Enter email address here"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="contact-filed contact-icon-message mb-25">
                      <textarea
                        placeholder="Enter message here"
                        name="message"
                      ></textarea>
                    </div>
                    <div className="contact__form-agree  d-flex align-items-center mb-20">
                      <input
                        name="checkbox"
                        className="e-check-input"
                        type="checkbox"
                        id="e-agree"
                      />
                      <label className="e-check-label" htmlFor="e-agree">
                        I agree to the
                        <Link href="/contact">Terms &amp; Conditions</Link>
                      </label>
                    </div>
                    <div className="form-submit text-center">
                      <button className="tp-btn" type="submit">
                        Submit Request
                      </button>
                    </div>
                    <p className="ajax-response"></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactAreaTwo;
