import React from "react";

export default function GetFreeQuote() {
  return (
    <>
      {/* <!-- Start Our Clients & Free Quotes --> */}

      <section className="our-clients-free-quotes">
        <div className="row">
          <div className="small-12 large-6 columns">
            <div className="wd-title-section_l">
              <h2>Our Clients</h2>
              <h5>There are all awesome people</h5>
            </div>
            <div className="owl-testimonail wd-testimonail owl-carousel owl-theme owl-responsive--1 owl-loaded">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-1160px, 0px, 0px)",
                    transition: "0.25s",
                    width: 1740,
                  }}
                >
                  <div
                    className="owl-item"
                    style={{ width: 570, marginRight: 10 }}
                  >
                    <blockquote>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <img src="assets/images/team-1.jpg" alt="testimonail" />
                      <cite>John Harris</cite>
                      <div className="job-title" />
                    </blockquote>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: 570, marginRight: 10 }}
                  >
                    <blockquote>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <img src="assets/images/team-3.jpg" alt="testimonail" />
                      <cite>Alex Joan</cite>
                      <div className="job-title" />
                    </blockquote>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 570, marginRight: 10 }}
                  >
                    <blockquote>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <img src="assets/images/team-2.jpg" alt="testimonail" />
                      <cite>Aleen Valzac</cite>
                      <div className="job-title" />
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="owl-controls">
                <div className="owl-nav">
                  <div className="owl-prev" style={{ display: "none" }} />
                  <div className="owl-next" style={{ display: "none" }} />
                </div>
                <div className="owl-dots" style={{}}>
                  <div className="owl-dot">
                    <span />
                  </div>
                  <div className="owl-dot">
                    <span />
                  </div>
                  <div className="owl-dot active">
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="small-12 large-6 columns">
            <div className="wd-title-section_l">
              <h2>Get a Free Quote</h2>
              <h5>
                Sed odio orci, fringilla nec dolor et, euismod auctor mauris.
                Curabitur semper dui diam, nec accumsan mauris consequat sed.
              </h5>
            </div>
            <div className="row full-width">
              <div className="small-12 large-6 columns">
                <span className="wpcf7-form-control-wrap your-name">
                  <input
                    type="text"
                    name="your-name"
                    defaultValue= ""
                    size={40}
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Your Name"
                  />
                </span>
              </div>
              <div className="small-12 large-6 columns">
                <span className="wpcf7-form-control-wrap your-email">
                  <input
                    type="email"
                    name="your-email"
                    defaultValue= ""
                    size={40}
                    className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Your Email"
                  />
                </span>
              </div>
              <div className="small-12 large-12 columns">
                <span className="wpcf7-form-control-wrap message">
                  <textarea
                    name="message"
                    cols={10}
                    rows={4}
                    className="wpcf7-form-control wpcf7-textarea"
                    aria-invalid="false"
                    placeholder="Your message"
                    defaultValue={""}
                  />
                </span>
              </div>
              <div className="small-12 large-12 columns">
                <input
                  type="submit"
                  defaultValue="Submit"
                  className="wpcf7-form-control wpcf7-submit button alert small radius"
                />
                <span className="ajax-loader" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End Our Clients & Free Quotes --> */}
    </>
  );
}
