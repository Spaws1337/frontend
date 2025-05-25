// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Subscribe from './Components/Subscribe/Subscribe';

import Home from './Pages/Home';
import Catalog from './Components/Catalog/Catalog';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';  // Импортируем страницу корзины

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Страница списка */}
        <Route path="/products" element={<Catalog />} />
        {/* Динамическая страница товара */}
        <Route path="/products/:id" element={<ProductPage />} />
        {/* Страница корзины */}
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<h2>Страница не найдена</h2>} />
      </Routes>

      <Subscribe />
    </BrowserRouter>
  );
}

export default App;
