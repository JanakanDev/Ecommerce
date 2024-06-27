// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Offer from '../components/Offer';
import '../css/Home.css'; // Import CSS file for Home

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="sale-message">SALE SALE SALE !!!</div>
      <Offer />
    </div>
  );
};

export default Home;
