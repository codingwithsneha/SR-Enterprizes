// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Products from './components/products/Products';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import WhatsAppButton from './components/common/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;