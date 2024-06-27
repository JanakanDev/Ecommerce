// src/pages/ElectronicsProducts.js
import React from 'react';
import Header from '../components/Header';

const ElectronicsProducts = () => {
  const products = [
    { id: 1, name: 'out of stock', image: '/public/image.png' },
    { id: 2, name: 'out of stock', image: '/public/image.png' },
    { id: 3, name: 'out of stock', image: '/public/image.png' },
  ];

  return (
    <div className="products">
      <Header />
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectronicsProducts;
