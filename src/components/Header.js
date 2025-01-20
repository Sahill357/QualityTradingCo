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
                  <Link to="/" title="Home" rel="home">
                    <img
                      alt="logo"
                      src="assets/images/qualitytrading2-removebg-preview.png"
                      style={{ width: '150px', height: 'auto' }}
                    />
                  </Link>
                </h1>
              </li>
              
              {/* Menu Icon for Mobile */}
              <li className="toggle-topbar menu-icon">
              <button onClick={toggleMenu} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}>
  <span className="material-icons">menu</span>
</button>

              </li>
            </ul>

            {/* Desktop Menu - Always visible */}
            <section className="creative top-bar-section right">
              <div className="menu-main-menu-container">
                <ul id="menu-main-menu" className="menu">
                  <li id="menu-item-1324" className="active_menu">
                    <Link to="/" className="has-icon">Home</Link>
                  </li>
                  <li id="menu-item-1313">
                    <Link to="/Services" className="has-icon">Services</Link>
                  </li>
                  <li id="menu-item-1313">
                    <Link to="/Portfolio" className="has-icon">Portfolio</Link>
                  </li>
                  <li id="menu-item-1309">
                    <Link to="/About" className="has-icon">About Us</Link>
                  </li>
                  <li id="menu-item-1308">
                    <Link to="/Contact" className="has-icon">Contact</Link>
                  </li>
                </ul>
              </div>
            </section>
          </nav>
        </div>
      </header>

      {/* Mobile Menu - Hidden by default and only visible on small screens */}
      <section className={`mobile-menu ${menuOpen ? 'open' : ''}`} style={{
        display: menuOpen ? 'block' : 'none',
        backgroundColor: '#000',
        position: 'absolute',
        top: '60px',
        right: '0',
        width: '100%',
        zIndex: 100,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li>
            <Link to="/" className="has-icon" onClick={() => setMenuOpen(false)} style={{ color: '#fff', padding: '10px' }}>Home</Link>
          </li>
          <li>
            <Link to="/Services" className="has-icon" onClick={() => setMenuOpen(false)} style={{ color: '#fff', padding: '10px' }}>Services</Link>
          </li>
          <li>
            <Link to="/Portfolio" className="has-icon" onClick={() => setMenuOpen(false)} style={{ color: '#fff', padding: '10px' }}>Portfolio</Link>
          </li>
          <li>
            <Link to="/About" className="has-icon" onClick={() => setMenuOpen(false)} style={{ color: '#fff', padding: '10px' }}>About Us</Link>
          </li>
          <li>
            <Link to="/Contact" className="has-icon" onClick={() => setMenuOpen(false)} style={{ color: '#fff', padding: '10px' }}>Contact</Link>
          </li>
        </ul>
      </section>

      {/* <!-- End Header --> */}
    </header>
  );
};

export default Header;
