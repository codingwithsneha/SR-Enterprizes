// src/components/home/BrandImages.js
import React, { useEffect, useState } from 'react';
import './BrandImages.css';

const BrandImages = () => {

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

  const itemsPerSlide = 4;

  const createSlides = (brands) => {
    const slides = [];
    const total = brands.length;

    for (let i = 0; i < total; i += itemsPerSlide) {
      let chunk = brands.slice(i, i + itemsPerSlide);

      if (chunk.length < itemsPerSlide) {
        chunk = [...chunk, ...brands.slice(0, itemsPerSlide - chunk.length)];
      }

      slides.push(chunk);
    }

    return slides;
  };

  const firstRow = brands.slice(0, Math.ceil(brands.length / 2));
  const secondRow = brands.slice(Math.ceil(brands.length / 2));

  const firstSlides = createSlides(firstRow);
  const secondSlides = createSlides(secondRow);

  // 🔥 duplicate slides for infinite illusion
  const loopFirstSlides = [...firstSlides, ...firstSlides];
  const loopSecondSlides = [...secondSlides, ...secondSlides];

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex1((prev) => prev + 1);
      setIndex2((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 Reset without jump
  useEffect(() => {
    if (index1 === firstSlides.length) {
      setTimeout(() => {
        setTransition(false);
        setIndex1(0);
      }, 800);
    } else {
      setTransition(true);
    }
  }, [index1, firstSlides.length]);

  useEffect(() => {
    if (index2 === secondSlides.length) {
      setTimeout(() => {
        setTransition(false);
        setIndex2(0);
      }, 800);
    } else {
      setTransition(true);
    }
  }, [index2, secondSlides.length]);

  return (
    <section className="brand-images-section">
      <h2 className="brands-title">Our Trusted Brands</h2>
      <p className="brands-subtitle">
        Partnering with India's Leading FMCG Companies
      </p>

      {/* Row 1 */}
      <div className="brands-slider">
        <div
          className="brands-track"
          style={{
            transform: `translateX(-${index1 * 100}%)`,
            transition: transition ? 'transform 0.8s ease-in-out' : 'none'
          }}
        >
          {loopFirstSlides.map((slide, i) => (
            <div className="slide" key={i}>
              {slide.map((brand) => (
                <div key={brand.id + i} className="brand-item">
                  <img src={brand.imagePath} alt={brand.name} />
                  <p>{brand.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="brands-slider">
        <div
          className="brands-track"
          style={{
            transform: `translateX(-${index2 * 100}%)`,
            transition: transition ? 'transform 0.8s ease-in-out' : 'none'
          }}
        >
          {loopSecondSlides.map((slide, i) => (
            <div className="slide" key={i}>
              {slide.map((brand) => (
                <div key={brand.id + i} className="brand-item">
                  <img src={brand.imagePath} alt={brand.name} />
                  <p>{brand.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandImages;