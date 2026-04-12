// src/components/products/Products.js
import React, { useState } from 'react';
import './Products.css';

const Products = () => {
  const [openCategories, setOpenCategories] = useState([]);

  const categories = [
    {
      id: 1,
      name: "Food & Beverages",
      products: [
        "Packaged foods",
        "Snacks & biscuits",
        "Soft drinks & juices",
        "Tea & coffee",
        "Ready-to-eat products"
      ]
    },
    {
      id: 2,
      name: "Personal Care Products",
      products: [
        "Soaps & body wash",
        "Shampoos & hair oil",
        "Toothpaste & toothbrush",
        "Skin care products",
        "Deodorants & perfumes"
      ]
    },
    {
      id: 3,
      name: "Home Care Products",
      products: [
        "Detergent powder & liquid",
        "Dishwash bars/liquid",
        "Floor cleaners",
        "Toilet cleaners",
        "Air fresheners"
      ]
    },
    {
      id: 4,
      name: "Baby Care Products",
      products: [
        "Baby diapers",
        "Baby soap & shampoo",
        "Baby powder",
        "Baby lotion & wipes"
      ]
    },
    {
      id: 5,
      name: "Health & Hygiene Products",
      products: [
        "Sanitizers",
        "Tissues & wipes",
        "Sanitary napkins"
      ]
    }
  ];

  const toggleCategory = (categoryId) => {
    if (openCategories.includes(categoryId)) {
      setOpenCategories(openCategories.filter(id => id !== categoryId));
    } else {
      setOpenCategories([...openCategories, categoryId]);
    }
  };

  return (
    <main className="products-page">
      <section className="products-hero">
        <div className="container">
          <h1>Our Product Portfolio</h1>
          <p className="hero-subtitle">Trusted Distribution Partner for Leading FMCG Brands</p>
        </div>
      </section>

      <section className="products-main">
        <div className="products-list-fullwidth">
          {categories.map((category) => (
            <div key={category.id} className="category-accordion-fullwidth">
              <div 
                className={`category-header-fullwidth ${openCategories.includes(category.id) ? 'active' : ''}`}
                onClick={() => toggleCategory(category.id)}
              >
                <div className="category-header-content">
                  <h3 className="category-name-fullwidth">{category.name}</h3>
                  <span className={`accordion-icon-fullwidth ${openCategories.includes(category.id) ? 'rotated' : ''}`}>
                    ▼
                  </span>
                </div>
              </div>
              
              {openCategories.includes(category.id) && (
                <div className="category-products-fullwidth">
                  {category.products.map((product, productIndex) => (
                    <div key={productIndex} className="product-item-fullwidth">
                      <div className="product-header-content">
                        <span className="product-name-fullwidth">{product}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;