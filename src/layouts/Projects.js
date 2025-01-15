import React from 'react'

export default function Projects() {
  return (
    <>
     {/* <!-- Start Our Projects --> */}

<section className="our-projects">
  <div className="row">
    <div className="small-12 large-8 large-offset-2 columns">
      <div className="wd-title-section_c">
        <h2>Latest Projects</h2>
        <h5>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</h5>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="small-12 large-12 columns">
      <div className="wd-section-project">
        <ul className="masque portfolio-grid small-block-grid-1	medium-block-grid-2 large-block-grid-3">
          <li className="animated  fadeInUp" data-animated="fadeInUp">
            <div className="wd-project hvr-underline-from-center">
              <img width={380} height={254} src="assets/images/portfolio_architect_8-380x254.jpg" className="attachment-flooring_portfolio size-flooring_portfolio wp-post-image" alt />
              <a href="single-portfolio.html">
                <h4>Swedish Mega Project</h4>
              </a>
              <p> DESIGN<span>- </span>  INTERIOR<span>- </span>  OFFICE<span>- </span> </p>
            </div>
          </li>
          <li className="animated  fadeInUp" data-animated="fadeInUp">
            <div className="wd-project hvr-underline-from-center">
              <img width={380} height={254} src="assets/images/wood-floor-380x254.jpg" className="attachment-flooring_portfolio size-flooring_portfolio wp-post-image" alt />
              <a href="single-portfolio.html"><h4>So to deliberately render</h4></a>
              <p> DESIGN<span>- </span>  INTERIOR<span>- </span>  OFFICE<span>- </span> </p>
            </div>
          </li>
          <li className="animated  fadeInUp" data-animated="fadeInUp">
            <div className="wd-project hvr-underline-from-center">
              <img width={380} height={254} src="assets/images/portfolio_architect_9-380x254.jpg" className="attachment-flooring_portfolio size-flooring_portfolio wp-post-image" alt />
              <a href="single-portfolio.html">
                <h4>Frozen Trees In A Lake</h4>
              </a>
              <p> DESIGN<span>- </span>  INTERIOR<span>- </span>  OFFICE<span>- </span> </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="small-12 large-12 columns text-center">
      <div className="wd-more-project flipInX" data-animated="flipInX"><a className="button small radius" href="portfolio-columns.html"><i className="fa fa-hand-o-right" /> MORE PROJECT</a></div>
    </div>
  </div>
</section>


{/* <!-- End Our Projects --> */}
    </>
  )
}
