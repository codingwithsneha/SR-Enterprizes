// src/components/home/BrandImages.js - Carousel Version with New Animation
import React, { useEffect, useRef } from 'react';
import './BrandImages.css';

const BrandImages = () => {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  
  const brands = [
    { id: 1, name: 'Anmol', imagePath: '/images/brands/anmol.png' },
    { id: 2, name: 'Britannia', imagePath: '/images/brands/britania.svg' },
    { id: 3, name: 'Colgate', imagePath: '/images/brands/colgate.png' },
    { id: 4, name: 'Dabur', imagePath: '/images/brands/dabar.png' },
    { id: 5, name: 'Emani', imagePath: '/images/brands/emani.png' },
    { id: 6, name: 'Fena', imagePath: '/images/brands/fena.jpg' },
    { id: 7, name: 'Godrej', imagePath: '/images/brands/godrej.jpeg' },
    { id: 8, name: 'Haldiram', imagePath: '/images/brands/haldiram.png' },
    { id: 9, name: 'HUL', imagePath: '/images/brands/hul.svg' },
    { id: 10, name: 'ITC', imagePath: '/images/brands/itc.png' },
    { id: 11, name: 'Marico', imagePath: '/images/brands/marico.png' },
    { id: 12, name: 'Mayora', imagePath: '/images/brands/mayora.png' },
    { id: 13, name: 'Nestlé', imagePath: '/images/brands/nestle.svg' },
    { id: 14, name: 'P&G', imagePath: '/images/brands/pandg.svg' },
    { id: 15, name: 'Parle', imagePath: '/images/brands/parle.jpeg' },
    { id: 16, name: 'Pepsi', imagePath: '/images/brands/pepsi.png' },
    { id: 17, name: 'Reckitt', imagePath: '/images/brands/reckitt.png' },
    { id: 18, name: 'RSPL', imagePath: '/images/brands/rspl.png' },
    { id: 19, name: 'Wipro', imagePath: '/images/brands/wipro.svg' }
  ];

  // Split brands into 2 rows
  const midPoint = Math.ceil(brands.length / 2);
  const firstRowBrands = brands.slice(0, midPoint);
  const secondRowBrands = brands.slice(midPoint);

  // Duplicate brands for seamless scrolling
  const duplicatedFirstRow = [...firstRowBrands, ...firstRowBrands];
  const duplicatedSecondRow = [...secondRowBrands, ...secondRowBrands];

  // Auto-scroll for first row with new speed
  useEffect(() => {
    const slider = sliderRef1.current;
    let scrollAmount = 0;
    let scrollInterval;

    const autoScroll = () => {
      if (slider) {
        scrollAmount += 1.2;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
        }
        slider.scrollLeft = scrollAmount;
      }
    };

    scrollInterval = setInterval(autoScroll, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  // Auto-scroll for second row (opposite direction)
  useEffect(() => {
    const slider = sliderRef2.current;
    let scrollAmount = 0;
    let scrollInterval;

    const autoScroll = () => {
      if (slider) {
        scrollAmount -= 1.2;
        if (scrollAmount <= -slider.scrollWidth / 2) {
          scrollAmount = 0;
        }
        slider.scrollLeft = scrollAmount;
      }
    };

    scrollInterval = setInterval(autoScroll, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="brand-images-section carousel-mode">
      <div className="container">
        <h2 className="brands-title">Our Trusted Brands</h2>
        <p className="brands-subtitle">Partnering with India's Leading FMCG Companies</p>
        
        {/* Row 1 - Scrolls Left to Right */}
        <div className="brands-carousel-wrapper">
          <div className="brands-carousel" ref={sliderRef1}>
            <div className="brands-track">
              {duplicatedFirstRow.map((brand, index) => (
                <div key={`row1-${index}`} className="brand-item-sharp">
                  <img 
                    src={brand.imagePath} 
                    alt={brand.name}
                    className="brand-logo-carousel-sharp"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="brand-placeholder-sharp">${brand.name}</div>`;
                    }}
                  />
                  <p className="brand-name-sharp">{brand.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 - Scrolls Right to Left */}
        <div className="brands-carousel-wrapper">
          <div className="brands-carousel" ref={sliderRef2}>
            <div className="brands-track">
              {duplicatedSecondRow.map((brand, index) => (
                <div key={`row2-${index}`} className="brand-item-sharp">
                  <img 
                    src={brand.imagePath} 
                    alt={brand.name}
                    className="brand-logo-carousel-sharp"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="brand-placeholder-sharp">${brand.name}</div>`;
                    }}
                  />
                  <p className="brand-name-sharp">{brand.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandImages;