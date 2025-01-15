import React, { useEffect } from 'react';
import Services from '../layouts/Services';
import CallToAction from '../layouts/CallToAction';
import Projects from '../layouts/Projects';
import GetFreeQuote from '../layouts/GetFreeQuote';
import Footer from '../components/Footer';

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
    <ul className="slides">
    <li style={{ backgroundImage: 'url("/assets/images/slide-3-1.jpg")' }}>

        <div className="row">
          <div className="slider-caption">
            <h1>We provide Ultimate Flooring  and Paving Services.</h1>
            <p>We make it a priority to offer flexible services to accommodate your needs</p>
            <a href="#">Get A Quote Now</a>
          </div>
        </div>
      </li>
      <li style={{backgroundImage: 'url("public/assets/images/slide-1.jpg")'}}>
        <div className="row">
          <div className="slider-caption">
            <h1>We provide Ultimate Flooring  and Paving Services.</h1>
            <p>We make it a priority to offer flexible services to accommodate your needs</p>
            <a href="#">Get A Quote Now</a>
          </div>
        </div>
      </li>
      <li style={{backgroundImage: 'url("public/assets/images/slide-2.jpg")'}}>
        <div className="row">
          <div className="slider-caption">
            <h1>We provide Ultimate Flooring  and Paving Services.</h1>
            <p>We make it a priority to offer flexible services to accommodate your needs</p>
            <a href="#">Get A Quote Now</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>


{/* <!-- End Slider --> */}

  <Services/>
  <CallToAction/>
  <Projects/>
  <GetFreeQuote/>
  <Footer/>

    </ >
  )
}

// export default function Home() {
//     return <h1>Welcome to the Home Page</h1>;
//   }
  