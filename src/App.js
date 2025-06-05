import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Subscribe from './Components/Subscribe/Subscribe';
import Modal from './Components/Modal/Modal';

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
  // Состояние корзины (пример из вашего кода, не трогаем)
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart') || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => setCartItems(prev => [...prev, item]);
  const removeFromCart = (index) => {
    setCartItems(prev => {
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  };
  const clearCart = () => setCartItems([]);

  // // Логика модального окна
  // const [showModal, setShowModal] = useState(false);
  // useEffect(() => {
  //   const hasSeen = localStorage.getItem('modalShown');
  //   console.log('hasSeen из localStorage =', hasSeen);
  //   if (!hasSeen) {
  //     setShowModal(true);
  //     localStorage.setItem('modalShown', 'true');
  //   }
  // }, []);

  // const closeModal = () => {
  //   setShowModal(false);
  // };
  const [showModal, setShowModal] = useState(true);
  const closeModal = () => setShowModal(false);
  
  return (
    <AuthProvider>
      <Modal show={showModal} onClose={closeModal} />

      <BrowserRouter>
        <Navbar cartCount={cartItems.length} />
        <Routes>
          <Route path="/users/:login" element={<PincodeLogin />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Catalog />} />
          <Route path="/products/:id" element={<ProductPage addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <AccountDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Subscribe />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
