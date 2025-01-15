import React, { useEffect } from "react";
import Services from "../layouts/ServicesLayout";
import CallToAction from "../layouts/CallToActionLayout";
import Projects from "../layouts/ProjectsLayout";
import GetFreeQuote from "../layouts/GetFreeQuoteLayout";
import Footer from "../components/Footer";

export default function About() {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <!-- Start Slider --> */}

      <section className="slider">
        <div className="flexslider">
          <div
            className="flex-viewport"
            style={{ overflow: "hidden", position: "relative" }}
          >
            <ul
              className="slides"
              style={{
                width: "1000%",
                transitionDuration: "0s",
                transform: "translate3d(-1519px, 0px, 0px)",
              }}
            >
              <li
                style={{
                  backgroundImage: 'url("assets/images/slide-2.jpg")',
                  width: 1519,
                  marginRight: 0,
                  float: "left",
                  display: "block",
                }}
                className="clone"
                aria-hidden="true"
              >
                <div className="row">
                  <div className="slider-caption">
                    <h1>We provide Ultimate Flooring and Paving Services.</h1>
                    <p>
                      We make it a priority to offer flexible services to
                      accommodate your needs
                    </p>
                    <a href="#">Get A Quote Now</a>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage: 'url("assets/images/slide-3-1.jpg")',
                  width: 1519,
                  marginRight: 0,
                  float: "left",
                  display: "block",
                }}
                className="flex-active-slide"
                data-thumb-alt
              >
                <div className="row">
                  <div className="slider-caption">
                    <h1>We provide Ultimate Flooring and Paving Services.</h1>
                    <p>
                      We make it a priority to offer flexible services to
                      accommodate your needs
                    </p>
                    <a href="#">Get A Quote Now</a>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage: 'url("assets/images/slide-1.jpg")',
                  width: 1519,
                  marginRight: 0,
                  float: "left",
                  display: "block",
                }}
                data-thumb-alt
              >
                <div className="row">
                  <div className="slider-caption">
                    <h1>We provide Ultimate Flooring and Paving Services.</h1>
                    <p>
                      We make it a priority to offer flexible services to
                      accommodate your needs
                    </p>
                    <a href="#">Get A Quote Now</a>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage: 'url("assets/images/slide-2.jpg")',
                  width: 1519,
                  marginRight: 0,
                  float: "left",
                  display: "block",
                }}
                data-thumb-alt
              >
                <div className="row">
                  <div className="slider-caption">
                    <h1>We provide Ultimate Flooring and Paving Services.</h1>
                    <p>
                      We make it a priority to offer flexible services to
                      accommodate your needs
                    </p>
                    <a href="#">Get A Quote Now</a>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage: 'url("assets/images/slide-3-1.jpg")',
                  width: 1519,
                  marginRight: 0,
                  float: "left",
                  display: "block",
                }}
                className="clone"
                aria-hidden="true"
              >
                <div className="row">
                  <div className="slider-caption">
                    <h1>We provide Ultimate Flooring and Paving Services.</h1>
                    <p>
                      We make it a priority to offer flexible services to
                      accommodate your needs
                    </p>
                    <a href="#">Get A Quote Now</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <ol className="flex-control-nav flex-control-paging">
            <li>
              <a href="#" className="flex-active">
                1
              </a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
          </ol>
          <ul className="flex-direction-nav">
            <li className="flex-nav-prev">
              <a className="flex-prev" href="#" />
            </li>
            <li className="flex-nav-next">
              <a className="flex-next" href="#" />
            </li>
          </ul>
        </div>
      </section>

      {/* <!-- End Slider --> */}

      <Services />
      <CallToAction />
      <Projects />
      <GetFreeQuote />
      <Footer />
    </>
  );
}

 
