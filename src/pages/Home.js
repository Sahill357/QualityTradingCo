import React, { useState, useEffect } from "react";
import Services from "../layouts/ServicesLayout";
import CallToAction from "../layouts/CallToActionLayout";
import Projects from "../layouts/portfolioLayout";
import GetFreeQuote from "../layouts/GetFreeQuoteLayout";
import Footer from "../components/Footer";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'assets/images/slide-3-1.jpg',
    'assets/images/slide-1.jpg',
    'assets/images/slide-2.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <style>
        {`
          .slider-section {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
          }

          .slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            background-size: cover;
            background-position: center;
          }

          .slide.active {
            opacity: 1;
          }

          .slider-caption {
  position: absolute;
  top: 50%;
  left: 200px; /* Adjust this value to move it to the right */
  transform: translateY(-50%);
  text-align: left; /* Keep the text left-aligned */
  color: white;
  width: 50%; /* You can adjust the width if needed */
  padding: 0 20px;
}


          .slider-caption h1 {
            font-size: 60px; /* Increased font size */
            margin-bottom: 15px;
            font-weight: 700; /* Bold title */
          }

          .slider-caption p {
            font-size: 18px; /* Adjusted smaller font size for the paragraph */
            margin-bottom: 20px;
            font-weight: 400; /* Normal weight for paragraph text */
          }

          .slider-caption a {
            display: inline-block;
            padding: 12px 30px;
            background-color: rgb(182,112,42);
            color: white;
            text-decoration: none;
            
            transition: background-color 0.3s;
            font-weight: 600; /* Bold button text */
          }

          .slider-caption a:hover {
            background-color:rgb(182,112,42);
          }

          .slider-nav {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
          }

          .nav-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            border: none;
            padding: 0;
          }

          .nav-dot.active {
            background-color: white;
          }

          .slider-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 60px;
            background-color: rgba(255, 255, 255, 0.5);
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: black;
            transition: background-color 0.3s;
          }

          .slider-arrow:hover {
            background-color: rgba(255, 255, 255, 0.8);
          }

          .prev-arrow {
            left: 20px;
             
          }

          .next-arrow {
            right: 20px;
          }
            .slider-caption h1, 
.slider-caption p {
  color: white; /* Apply white color to the text */
}

        `}
      </style>

      <section className="slider-section">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          >
            <div className="slider-caption">
              <h1>SPECIALIZING IN TILES & MARBLE CHEMICAL SOLUTIONS WITH UNMATCHED EXPERTISE.</h1>
              <p>
              We prioritize providing flexible tile & marble solutions tailored to your needs.
              </p>
              <a href="#">Get A Quote Now</a>
            </div>
          </div>
        ))}

        <button className="slider-arrow prev-arrow" onClick={prevSlide}>
          ‹
        </button>
        <button className="slider-arrow next-arrow" onClick={nextSlide}>
          ›
        </button>

        <div className="slider-nav">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>

      <Services />
      <CallToAction />
      <Projects />
      <GetFreeQuote />
      <Footer />
    </>
  );
}
