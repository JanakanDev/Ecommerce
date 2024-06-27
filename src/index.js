
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import MenProducts from './pages/MenProducts';
import WomenProducts from './pages/WomenProducts';
import ElectronicsProducts from './pages/ElectronicsProducts';
import FurnitureProducts from './pages/FurnitureProducts';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/men" element={<MenProducts />} />
        <Route path="/women" element={<WomenProducts />} />
        <Route path="/electronics" element={<ElectronicsProducts />} />
        <Route path="/furniture" element={<FurnitureProducts />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
