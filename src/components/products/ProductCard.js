// src/components/products/ProductCard.js
import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="product-card" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="product-icon">{category.icon}</div>
      <h3>{category.title}</h3>
      <div className={`product-items ${isExpanded ? 'expanded' : ''}`}>
        <ul>
          {category.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <button className="expand-btn">
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default ProductCard;