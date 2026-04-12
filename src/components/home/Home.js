// src/components/home/Home.js - Updated version
import React from 'react';
import Hero from './Hero';
import BrandImages from './BrandImages';
import Features from './Features';

const Home = () => {
  return (
    <>
      <Hero />
      <BrandImages />  {/* New component - placed between Hero and Features */}
      <Features />
    </>
  );
};

export default Home;