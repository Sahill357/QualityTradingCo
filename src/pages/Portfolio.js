import React from "react";
import Footer from "../components/Footer";

export default function portfolio() {
  return (
    <>
      {/* <!-- Start Title Bar --> */}

      <section className="wd-title-bar">
        <div className="row">
          <div className="large-12 columns p-t-70 text-left">
            <h2 id="page-title" className="title">
                Portfolio
            </h2>
          </div>
        </div>
      </section>

      {/* <!-- End Title Bar -->

<!-- Start Portfolio --> */}

      <div>
        <section className="portfolio-wrapper">
          <div className="row">
            <div className="small-12 large-6 columns">
              <div className="owl-testimonail owl-carousel owl-theme owl-responsive--1 owl-loaded">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-1740px, 0px, 0px)",
                      transition: "0.25s",
                      width: 2320,
                    }}
                  >
                    <div
                      className="owl-item"
                      style={{ width: 570, marginRight: 10 }}
                    >
                      <img
                        width={840}
                        height={424}
                        src="assets/images/portfolio_architect_8-840x424.jpg"
                        className="attachment-flooring_blog-thumb size-flooring_blog-thumb wp-post-image"
                        alt
                      />
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: 570, marginRight: 10 }}
                    >
                      <img
                        width={840}
                        height={424}
                        src="assets/images/portfolio_architect_8-840x424.jpg"
                        className="attachment-flooring_blog-thumb size-flooring_blog-thumb wp-post-image"
                        alt
                      />
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: 570, marginRight: 10 }}
                    >
                      <img
                        width={840}
                        height={424}
                        src="assets/images/portfolio_architect_8-840x424.jpg"
                        className="attachment-flooring_blog-thumb size-flooring_blog-thumb wp-post-image"
                        alt
                      />
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: 570, marginRight: 10 }}
                    >
                      <img
                        width={840}
                        height={424}
                        src="assets/images/portfolio_architect_8-840x424.jpg"
                        className="attachment-flooring_blog-thumb size-flooring_blog-thumb wp-post-image"
                        alt
                      />
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
              <div className="wd-title-block">
                <h4>PORTFOLIO DETAILS</h4>
              </div>
              <p>
                We Are solar the simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry’s
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, We Are solar the simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry’s standard.
              </p>
              <p>
                We Are solar the simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry’s
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, We Are solar the simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry’s standard.
              </p>
            </div>
          </div>
        </section>

        <section className="wd-section-project-page">
          <div className="row animation-parent" data-animation-delay={100}>
            <div className="row">
              <h4 className="m-b-15">RELATED PROJECTS</h4>
              <div className="wd-section-project">
                <ul className="masque portfolio-grid small-block-grid-1	 medium-block-grid-3 large-block-grid-4">
                  <li
                    className="flipInX"
                    data-animated="flipInX"
                    style={{ opacity: 1, animationDelay: "0ms" }}
                  >
                    <div className="wd-project hvr-underline-from-center">
                      <img
                        width={380}
                        height={254}
                        src="assets/images/portfolio_architect_8-380x254.jpg"
                        className="attachment-flooring_portfolio size-flooring_portfolio wp-post-image"
                        alt
                      />
                      <a href="single-portfolio.html">
                        <h4>Swedish Mega Project</h4>
                      </a>
                      <p>
                        {" "}
                        DESIGN<span>- </span> INTERIOR<span>- </span> OFFICE
                        <span>- </span>{" "}
                      </p>
                    </div>
                  </li>
                  <li
                    className="flipInX"
                    data-animated="flipInX"
                    style={{ opacity: 1, animationDelay: "100ms" }}
                  >
                    <div className="wd-project hvr-underline-from-center">
                      <img
                        width={380}
                        height={254}
                        src="assets/images/wood-floor-380x254.jpg"
                        className="attachment-flooring_portfolio size-flooring_portfolio wp-post-image"
                        alt
                      />
                      <a href="single-portfolio.html">
                        <h4>So to deliberately render</h4>
                      </a>
                      <p>
                        {" "}
                        DESIGN<span>- </span> INTERIOR<span>- </span> OFFICE
                        <span>- </span>{" "}
                      </p>
                    </div>
                  </li>
                  <li
                    className="flipInX"
                    data-animated="flipInX"
                    style={{ opacity: 1, animationDelay: "200ms" }}
                  >
                    <div className="wd-project hvr-underline-from-center">
                      <img
                        width={380}
                        height={254}
                        src="assets/images/portfolio_architect_9-380x254.jpg"
                        className="attachment-flooring_portfolio size-flooring_portfolio wp-post-image"
                        alt
                      />
                      <a href="single-portfolio.html">
                        <h4>Frozen Trees In A Lake</h4>
                      </a>
                      <p>
                        {" "}
                        DESIGN<span>- </span> INTERIOR<span>- </span> OFFICE
                        <span>- </span>{" "}
                      </p>
                    </div>
                  </li>
                  <li
                    className="flipInX"
                    data-animated="flipInX"
                    style={{ opacity: 1, animationDelay: "300ms" }}
                  >
                    <div className="wd-project hvr-underline-from-center">
                      <img
                        width={380}
                        height={254}
                        src="assets/images/portfolio_architect_10-380x254.jpg"
                        className="attachment-flooring_portfolio size-flooring_portfolio wp-post-image"
                        alt
                      />
                      <a href="single-portfolio.html">
                        <h4>Consectetur adipiscing</h4>
                      </a>
                      <p>
                        {" "}
                        DESIGN<span>- </span> INTERIOR<span>- </span> OFFICE
                        <span>- </span>{" "}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- End Portfolio --> */}

      <Footer />
    </>
  );
}
