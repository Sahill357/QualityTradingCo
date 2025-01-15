import React from 'react'
import Footer from '../components/Footer'

export default function About() {
  return (
     <>
     {/* <!-- Start Title Bar --> */}

<section className="wd-title-bar">
  <div className="row">
    <div className="large-12 columns p-t-70 text-left">
      <h2 id="page-title" className="title">About Us</h2>
    </div>
  </div>
</section>

{/* <!-- End Title Bar -->

<!-- Start About Flooring --> */}

<section className="about-flooring">
  <div className="row">
    <div className="small-12 large-6 large-offset-3 columns">
      <div className="wd-title-section_c">
        <h2>We Are Flooring Inc.</h2>
        <h5>We repair your roof with passion</h5>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="small-12 large-6 columns">
      <div className="about-flooring-img">
        <img src="assets/images/about-us-570x370.jpg" alt />
      </div>
    </div>
    <div className="small-12 large-6 columns">
      <div className="wd-title-block">
        <h5>Why Choose Us</h5>
      </div>
      <p>We Are ROOFING the simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,We Are solar the simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry’s standard.</p>
      <div className="row p-t-30 full-width">
        <div className="small-12 large-6 columns">
          <ul className="list-icon check-square-o">
            <li>We are awesome people to meet</li>
            <li>We’re happy to help in the purchase</li>
            <li>We have the latest technologies</li>
            <li>Sed ut perspiciatis unde omnis</li>
          </ul>
        </div>
        <div className="small-12 large-6 columns">
          <ul className="list-icon check-square-o">
            <li>The quality is our goal</li>
            <li>Optimizing the resource is good</li>
            <li>Printer took a galley of type and</li>
            <li>We are awesome people to meet</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


{/* <!-- End About Flooring -->

<!-- Start Facts --> */}

<section className="facts">
  <div className="row">
    <div className="small-12 large-12 columns">
      <div className="wd-title-section_l">
        <h2>Interesting Facts</h2>
        <h5>Our numbers</h5>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="small-12 large-3 columns">
      <div className="wd-fucts">
        <div className="number" data-file={1000}>1523</div>
        <div className="title"><span>RESIDENTIAL</span></div>
      </div>
    </div>
    <div className="small-12 large-3 columns">
      <div className="wd-fucts">
        <div className="number" data-file={1000}>2119</div>
        <div className="title"><span>RESIDENTIAL</span></div>
      </div>
    </div>
    <div className="small-12 large-3 columns">
      <div className="wd-fucts">
        <div className="number" data-file={1000}>2303</div>
        <div className="title"><span>RESIDENTIAL</span></div>
      </div>
    </div>
    <div className="small-12 large-3 columns">
      <div className="wd-fucts">
        <div className="number" data-file={1000}>1023</div>
        <div className="title"><span>RESIDENTIAL</span></div>
      </div>
    </div>
  </div>
</section>


{/* <!-- End Facts -->

<!-- Start Our Team --> */}

<section className="our-team">
  <div className="row">
    <div className="small-12 large-12 columns">
      <div className="wd-title-section_l">
        <h2>Our Team</h2>
        <h5>We are awesome people</h5>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="small-12 large-12 columns">
      <ul className="wd-section-team team-list small-block-grid-1 large-block-grid-4 medium-block-grid-2">
        <li className="wd-team-member-item">
          <div className="wd-team-member">
            <img width={600} height={598} src="assets/images/team-12.jpg" className="attachment-wd_team size-wd_team" alt />
            <h4 className="wd-title-element">Chauffina Carr</h4>
            <p>
              Logan grew up in a household where design was very important. His father was a chief furniture deisgn for
            </p>
          </div>
        </li>
        <li className="wd-team-member-item">
          <div className="wd-team-member">
            <img width={600} height={598} src="assets/images/team-9.jpg" className="attachment-wd_team size-wd_team" alt />
            <h4 className="wd-title-element">Parsley Montana</h4>
            <p>
              Logan grew up in a household where design was very important. His father was a chief furniture deisgn for
            </p>
          </div>
        </li>
        <li className="wd-team-member-item">
          <div className="wd-team-member">
            <img width={600} height={598} src="assets/images/team-10.jpg" className="attachment-wd_team size-wd_team" alt />
            <h4 className="wd-title-element">Bodrum Salvador</h4>
            <p>
              Logan grew up in a household where design was very important. His father was a chief furniture deisgn for
            </p>
          </div>
        </li>
        <li className="wd-team-member-item">
          <div className="wd-team-member">
            <img width={600} height={598} src="assets/images/team-11.jpg" className="attachment-wd_team size-wd_team" alt />
            <h4 className="wd-title-element">Nathaneal Down</h4>
            <p>
              Logan grew up in a household where design was very important. His father was a chief furniture deisgn for
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>


{/* <!-- End Our Team -->

<!-- Start Latest News --> */}

<section className="testimonials-container">
  <div className="row">
    <div className="small-12 large-12 columns">
      <div className="wd-title-section_l">
        <h2>Testimonials</h2>
        <h5>this is a subtitle</h5>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="small-12 large-12 columns">
      <div className="owl-testimonail wd-testimonail owl-carousel owl-theme">
        <blockquote>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <img src="assets/images/team-1.jpg" alt="testimonail" />
          <cite>John Harris</cite>
          <div className="job-title" />
        </blockquote>
        <blockquote>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <img src="assets/images/team-3.jpg" alt="testimonail" />
          <cite>Alex Joan</cite>
          <div className="job-title" />
        </blockquote>
        <blockquote>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <img src="assets/images/team-2.jpg" alt="testimonail" />
          <cite>Aleen Valzac</cite>
          <div className="job-title" />
        </blockquote>
      </div>
    </div>
  </div>
</section>



{/* <!-- End Latest News --> */}

{/* <!-- Start Our Clients --> */}

<section className="our-clients">
  <div className="row">
    <div className="small-12 large-12 columns">
      <div className="wd-title-section_l">
        <h2>Our Clients</h2>
        <h5>They are awesome people</h5>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="small-12 large-12 columns">
      <div className="carousel_client owl-carousel text-center owl-theme" data-clienttoshow={5}>
        <img className="prettyphoto" src="assets/images/frigidaire.png" alt />
        <img className="prettyphoto" src="assets/images/amana.png" alt />
        <img className="prettyphoto" src="assets/images/whirlpool.png" alt />
        <img className="prettyphoto" src="assets/images/rca.png" alt />
        <img className="prettyphoto" src="assets/images/maytag.png" alt />
        <img className="prettyphoto" src="assets/images/kitchenaid.png" alt />
        <img className="prettyphoto" src="assets/images/kenmore.png" alt />
        <img className="prettyphoto" src="assets/images/general-electric.png" alt />
      </div>
    </div>
  </div>
</section>


{/* <!-- End Our Clients --> */}

<Footer/>
     </>
  )
}

