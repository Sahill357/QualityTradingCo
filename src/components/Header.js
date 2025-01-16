import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  // State to toggle the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle menu toggle
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      {/* <!-- Start Header --> */}

<header className="l-header creative-layout">
  <div className="top-bar-container contain-to-grid sticky">
    <nav className="top-bar" data-topbar>
      <ul className="title-area">
        <li className="name">
          <h1>
          <a title="Flooring Company WordPress Theme" rel="home" href="index.html">
  <img
    alt="logo"
    src="assets/images/qualitytrading2-removebg-preview.png"
    style={{ width: '150px', height: 'auto' }} // Use an object for the style prop
  />
</a>

          </h1>
        </li>
        <li className="toggle-topbar menu-icon">
          <a href="#"><span>Menu</span></a>
        </li>
      </ul>
      <section className="creative top-bar-section right">
        <div className="menu-main-menu-container">
          <ul id="menu-main-menu" className="menu">
            <li id="menu-item-1324" className="active_menu">
              <a href="/" className="has-icon">Home</a>
            </li>
           
                <li id="menu-item-1313">
                  <a href="/Services" className="has-icon">Services</a>
                </li>
                <li id="menu-item-1313">
                  <a href="/Portfolio" className="has-icon">Portfolio</a>
                </li>
            
                <li id="menu-item-1309">
                  <a href="/About" className="has-icon">About Us</a>
                </li>
             
            <li id="menu-item-1308">
              <a href="/Contact" className="has-icon">Contact </a>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  </div>
</header>


{/* <!-- End Header --> */}
    </header>
  );
};

export default Header;
