
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Offer from './components/Offer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Offer />
        <div className="categories">
          <Link to="/men" className="category">Men</Link>
          <Link to="/women" className="category">Women</Link>
          <Link to="/electronics" className="category">Electronics</Link>
          <Link to="/furniture" className="category">Furniture</Link>
        </div>
      </main>
    </div>
  );
};

export default App;
