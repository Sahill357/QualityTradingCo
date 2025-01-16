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
          <img
    alt="logo"
    src="assets/images/qualitytrading2-removebg-preview.png"
    style={{ width: '150px', height: 'auto' }} // Use an object for the style prop
  />
            <p>Quality Trading is a trusted supplier of tiles and chemical solutions, providing high-quality products and reliable services for all your needs.</p>
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
                <span><span>Phone:</span> +91 8657474749</span>
              </li>
              <li>
                <span><span>Fax:</span> +91 9511725321</span>
              </li>
              <li>
                <span>
  <span>Email:</span>
  <a href="mailto:qualitytradingco1@gmail.com">qualitytradingco1@gmail.com</a>
</span>

              </li>
              <li>
                <span><span>Adress:</span> Behind UK washing Center, Azad Chowk, Aurangabad 431001</span>
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
                  <a href="https://www.instagram.com/qualitytredingco?igsh=MWR6NTcyYnpud2Zqcw%3D%3D&utm_source=qr"><i className="fa fa-instagram" /></a>
                </li>
                <li className="facebook">
                  <a href="#"><i className="fa fa-facebook" /></a>
                </li>
                <li className="twitter">
                  <a href="#"><i className="fa fa-twitter" /></a>
                </li>
                <li className="vimeo">
                  <a href="#"><i className="fa fa-vimeo-square" /></a>
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
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">portfolio</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
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
