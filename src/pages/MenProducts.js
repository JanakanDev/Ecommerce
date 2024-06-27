// src/pages/MenProducts.js
import React from 'react';
import Header from '../components/Header';


const MenProducts = () => {
  const products = [
    { id: 1, name: 'Jacket   ₹999', image: './Jacket.jpg' },
    { id: 2, name: 'Jean   ₹999', image: './Jean.jpg' },
    { id: 3, name: 'Shirt   ₹999', image: './Shirt.jpg' },
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

export default MenProducts;