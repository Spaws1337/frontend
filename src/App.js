import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Subscribe from './Components/Subscribe/Subscribe';

import Home from './Pages/Home';
import Catalog from './Components/Catalog/Catalog';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';
import PincodeLogin from './Components/Auth/PincodeLogin';

import { AuthProvider } from './Components/Auth/AuthContext';
import AccountDashboard from './Components/Auth/AccountDashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/users/:login" element={<PincodeLogin />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Catalog />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/account" element={<AccountDashboard />} />


          <Route path="*" element={<h2>Страница не найдена</h2>} />
        </Routes>

        <Subscribe />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
