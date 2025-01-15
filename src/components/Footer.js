import React from 'react'

export default function Footer() {
  return (
    <>
    {/* <!-- Start Footer --> */}

<section className="wd-footer">
  <div className="row animation-parent" data-animation-delay={180}>
    <ul className="block large-4 medium-4 columns animated fadeInRight" data-animated="fadeInRight">
      <li>
        <div className="textwidget">
          <div className="widget-logo">
            <img alt="logo" src="assets/images/logo-white.png" />
            <p>The Flooring inc. is the leader of floor installation and repair in the country sed diam nonumy eirmod tempor invidunt ut labore and efficient strategy.</p>
          </div>
        </div>
      </li>
    </ul>
    <ul className="block large-4 medium-4 columns animated fadeInRight" data-animated="fadeInRight">
      <li>
        <h2 className="block-title">Get in Touch</h2>
        <div className="textwidget">
          <div className="widget-info">
            <ul>
              <li>
                <span><span>Phone:</span> +1 123 457 653</span>
              </li>
              <li>
                <span><span>Fax:</span> +1 496 457 654</span>
              </li>
              <li>
                <span><span>Email:</span> <a href="mailto:email@website.com">our-mail@example.com</a></span>
              </li>
              <li>
                <span><span>Adress:</span> 121 King Street, Melbourne 3000 Australia</span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <ul className="block large-4 medium-4 columns animated fadeInRight" data-animated="fadeInRight">
      <li>
        <h2 className="block-title">Newsletter</h2>
        <div className="textwidget">
          <div className="wd-newsletter">
            Sign up your newsletter
            <div>
              <input type="text" className="email-adress" placeholder="EMAIL ADRESS" size={20} defaultValue name="email-adress" />
              <input type="submit" className="newslettersubmit" defaultValue="GO" />
              <ul className="inline-list">
                <li className="flickr">
                  <a href="http://www.flickr.com/#"><i className="fa fa-flickr" /></a>
                </li>
                <li className="facebook">
                  <a href="https://www.facebook.com/#"><i className="fa fa-facebook" /></a>
                </li>
                <li className="twitter">
                  <a href="https://twitter.com/#"><i className="fa fa-twitter" /></a>
                </li>
                <li className="vimeo">
                  <a href="https://vimeo.com/#"><i className="fa fa-vimeo-square" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <footer className="wd-copyright">
    <div className="row">
      <div className="small-12 large-12 columns">
        <div className="copyright-menu">
          <ul id="menu-footer-menu" className="menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="blog.html">Services</a></li>
            <li><a href="blog.html">Projects</a></li>
            <li><a href="about-us.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright small-12 large-12 columns">
        <p>
          © 2025 Quality Trading Co. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</section>


{/* <!-- End Footer --> */}
    </>
  )
}
