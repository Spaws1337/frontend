// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Subscribe from './Components/Subscribe/Subscribe';

import Home from './Pages/Home';
import Catalog from './Components/Catalog/Catalog';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';

import PincodeLogin from './Components/Auth/PincodeLogin';
import AccountDashboard from './Components/Auth/AccountDashboard';

import { AuthProvider } from './Components/Auth/AuthContext';
import ProtectedRoute from './Components/Auth/ProtectedRoute';
import NotFound from './Components/Common/NotFound';

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

          {/* Важно: именно так */}
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <AccountDashboard />
              </ProtectedRoute>
            }
          />

          {/* Остальные «не найдено» */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Subscribe />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
