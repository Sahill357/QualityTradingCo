import React, { useState } from 'react';

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Acefix 3 Star',
      image: 'assets/images/Acefix-3-Star.jpg',
      description: 'High Performance, Polymer Modified Tiles Adhesives.',
    },
    {
      id: 2,
      name: 'Acefix 5 Star',
      image: 'assets/images/Acefix-5-Star.jpg',
      description: 'High Performance, Polymer Modified Tiles Adhesives.',
    },
    {
      id: 3,
      name: 'Acefix 7 Star',
      image: 'assets/images/Acefix-7-Star.jpg',
      description: 'High Performance, Polymer Modified Tiles Adhesives.',
    },
    {
      id: 4,
      name: 'Acefix 9 Star',
      image: 'assets/images/Acefix-9-Star.jpg',
      description: 'High Performance, Polymer Modified Tiles Adhesives.',
    },
  ];

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="our-services">
        <div className="row">
          <div className="small-12 large-6 large-offset-3 columns">
            <div className="wd-title-section_c">
              <h2>We provide premium Tile's & Marble's chemical solutions with unmatched expertise.</h2>
              <h5>We serve a wide range of clients, including residential properties and commercial offices.</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="small-12 large-4 columns">
            <div className="wd-section-text-icon">
              <a href="#" onClick={openModal}>
                <div className="wd-text-icon-style5 animated fadeInUp text-center" data-animated="fadeInUp">
                  <div className="box-icon">
                    <img src="assets/images/hard-wood-floor-m.jpg" alt="icon" />
                  </div>
                  <div className="box-description">
                    <h3>Adhesives</h3>
                    <p>Explore our range of premium Adhesives flooring options.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="small-12 large-4 columns">
            <div className="wd-section-text-icon">
              <a href="#" onClick={openModal}>
                <div className="wd-text-icon-style5 animated fadeInUp text-center" data-animated="fadeInUp">
                  <div className="box-icon">
                    <img src="assets/images/area-rugs-m.jpg" alt="icon" />
                  </div>
                  <div className="box-description">
                    <h3>Adhesives</h3>
                    <p>Explore our range of premium Adhesives flooring options.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="small-12 large-4 columns">
            <div className="wd-section-text-icon">
              <a href="#" onClick={openModal}>
                <div className="wd-text-icon-style5 animated fadeInUp text-center" data-animated="fadeInUp">
                  <div className="box-icon">
                    <img src="assets/images//wood-floor-m.jpg" alt="icon" />
                  </div>
                  <div className="box-description">
                    <h3>Adhesives</h3>
                    <p>Explore our range of premium Adhesives flooring options.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="small-12 large-4 columns">
            <div className="wd-section-text-icon">
              <a href="#" onClick={openModal}>
                <div className="wd-text-icon-style5 animated fadeInUp text-center" data-animated="fadeInUp">
                  <div className="box-icon">
                    <img src="assets/images/area-rugs-m.jpg" alt="icon" />
                  </div>
                  <div className="box-description">
                    <h3>Adhesives</h3>
                    <p>Explore our range of premium Adhesives flooring options.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="small-12 large-4 columns">
            <div className="wd-section-text-icon">
              <a href="#" onClick={openModal}>
                <div className="wd-text-icon-style5 animated fadeInUp text-center" data-animated="fadeInUp">
                  <div className="box-icon">
                    <img src="assets/images/tiles-floor-m.jpg" alt="icon" />
                  </div>
                  <div className="box-description">
                    <h3>Adhesives</h3>
                    <p>Explore our range of premium Adhesives flooring options.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="small-12 large-4 columns">
            <div className="wd-section-text-icon">
              <a href="#" onClick={openModal}>
                <div className="wd-text-icon-style5 animated fadeInUp text-center" data-animated="fadeInUp">
                  <div className="box-icon">
                    <img src="assets/images/carpet-floor-m.jpg" alt="icon" />
                  </div>
                  <div className="box-description">
                    <h3>Adhesives</h3>
                    <p>Explore our range of premium Adhesives flooring options.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Adhesives Products</h2>
              <button className="modal-back" onClick={closeModal}>
                Back
              </button>
            </div>
            <div className="modal-content">
              <div className="product-list">
                {products.map((product) => (
                  <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.name} />
                    <div className="product-details">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Styles */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal {
          background: #fff;
          border-radius: 10px;
          width: 80%;
          max-width: 1000px;
          padding: 20px;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
          position: relative;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #ddd;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .modal-back {
          background: #e74c3c;
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 5px 15px;
          cursor: pointer;
          font-size: 1rem;
        }
        .modal-back:hover {
          background: #c0392b;
        }
        .modal-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .product-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr); /* Two columns per row */
          gap: 20px; /* Space between items */
          overflow-y: auto; /* Enables vertical scrolling */
          height: 300px; /* Set height for the scrolling area */
          width: 100%;
        }
        .product-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
        }
        .product-item img {
          width: 100%;
          max-width: 150px; /* Adjust the size as needed */
          height: auto;
          border-radius: 4px;
        }
        .product-details {
          margin-top: 10px;
        }
      `}</style>
    </>
  );
}
