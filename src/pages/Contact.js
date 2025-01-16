import React from "react";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      {/* Start Title Bar */}
      <section className="wd-title-bar">
        <div className="row">
          <div className="large-12 columns p-t-70 text-left">
            <h2 id="page-title" className="title">
              Contact
            </h2>
          </div>
        </div>
      </section>

      {/* End Title Bar */}

      {/* Start Contact */}
      <div>
        <section className="contact-us-wrapper">
          <div className="row">
            <div className="small-12 large-12 columns">
              <div className="wd-title-section_l">
                <h2>Get In Touch</h2>
                <h5>
                  Neque porro quisquam est qui dolorem ipsum quia lorem ipsum
                  dolor sit amet dolor sit amet, consectetur, adipisci velit...
                </h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="small-12 large-12 columns">
              <div className="row full-width">
                <div role="form" className="wpcf7">
                  <form
                    action="#"
                    method="post"
                    className="wpcf7-form"
                    noValidate="novalidate"
                  >
                    <div className="small-12 large-4 columns">
                      <span className="wpcf7-form-control-wrap your-name">
                        <input
                          type="text"
                          name="your-name"
                          defaultValue
                          size={40}
                          className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Name"
                        />
                      </span>
                    </div>
                    <div className="small-12 large-4 columns">
                      <span className="wpcf7-form-control-wrap your-email">
                        <input
                          type="email"
                          name="your-email"
                          defaultValue
                          size={40}
                          className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="mail"
                        />
                      </span>
                    </div>
                    <div className="small-12 large-4 columns">
                      <span className="wpcf7-form-control-wrap your-name">
                        <input
                          type="text"
                          name="your-name"
                          defaultValue
                          size={40}
                          className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Name"
                        />
                      </span>
                    </div>
                    <div className="small-12 large-12 columns">
                      <span className="wpcf7-form-control-wrap your-message">
                        <textarea
                          name="your-message"
                          cols={40}
                          rows={10}
                          className="wpcf7-form-control wpcf7-textarea"
                          aria-invalid="false"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </span>
                    </div>
                    <div className="small-12 large-12 columns text-center">
                      <input
                        type="submit"
                        defaultValue="Send"
                        className="wpcf7-form-control wpcf7-submit button small"
                      />
                      <span className="ajax-loader" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wd-section-call-to-action">
          <div className="row call-to-action">
            <div className="small-12 large-8 columns">
              <h4>OUR EXPERTIES</h4>
              <p>
                From the start, we’ve always tried to do things properly. So
                it’s heart-warming to get recognition from people who feel the
                same way
              </p>
            </div>
            <div className="small-12 large-4 columns">
              <div className="wd-call-to-action-btn">
                <a href="#">VIEW MORE</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Start Map */}
      <section className="google-map-section" style={{ width: "100%", height: "500px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.865025766515!2d75.35174617468499!3d19.88792052598364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2bcde017cab%3A0xec14a995e4adcb8e!2sMoulana%20Azad%20Chowk%2C%20Kirti%20Housing%20Society%2C%20Shivdatta%20Housing%20Society%2C%20N%208%2C%20Jaswantpura%2C%20Chhatrapati%20Sambhaji%20Nagar%2C%20Maharashtra%20431003!5e0!3m2!1sen!2sin!4v1736924486437!5m2!1sen!2sin"
          width="100%"
          height="500px"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
      {/* End Map */}

      <Footer />
    </>
  );
}
