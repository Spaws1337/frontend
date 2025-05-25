import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', contact: '', address: '' });
  const [toastMessage, setToastMessage] = useState('');

  // Helpers
  const getCart = () => JSON.parse(localStorage.getItem('cart') || '[]');
  const saveCart = (items) => localStorage.setItem('cart', JSON.stringify(items));

  // Effects
  useEffect(() => {
    const items = getCart();
    setCart(items);
  }, []);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''), 10);
      return acc + price;
    }, 0);
    setTotal(sum);
    saveCart(cart);
  }, [cart]);

  // Actions
  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = { ...formData, cart };
    console.log('Заказ отправлен:', order);
    setToastMessage('✅ Заказ успешно оформлен!');
    clearCart();
    closeModal();
    setTimeout(() => setToastMessage(''), 2000);
  };

  return (
    <div className="cart-page">
      <h1>Корзина</h1>

      {cart.length === 0 ? (
        <p className="empty-message">Корзина пуста.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div className="cart-card" key={index}>
                <a href={item.link}>
                  <img src={item.image} alt={item.name} className="cart-card__img" />
                </a>
                <div className="cart-card__info">
                  <a href={item.link} className="cart-card__name">{item.name}</a>
                  <p>Размер: {item.size}</p>
                  <p className="cart-card__price">{item.price}</p>
                </div>
                <button className="cart-card__remove" onClick={() => removeItem(index)}>
                  Удалить
                </button>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button className="clear-btn" onClick={clearCart}>Очистить</button>
            <button className="checkout-btn" onClick={openModal}>Оформить</button>
          </div>

          <div className="cart-total">Итого: {total.toLocaleString('ru-RU')} ₽</div>
        </>
      )}

      {isModalOpen && (
        <div className="modal-overlay active">
          <div className="modal">
            <button className="modal__close" onClick={closeModal}>×</button>
            <h2>Оформление заказа</h2>
            <form id="checkout-form" onSubmit={handleSubmit}>
              <input type="text" name="firstName" placeholder="Имя" required onChange={handleInputChange} />
              <input type="text" name="lastName" placeholder="Фамилия" required onChange={handleInputChange} />
              <input type="text" name="contact" placeholder="Телефон или Telegram" required onChange={handleInputChange} />
              <input type="text" name="address" placeholder="Адрес доставки" required onChange={handleInputChange} />
              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      )}

      {toastMessage && (
        <div className="toast show">{toastMessage}</div>
      )}
    </div>
  );
};

export default Cart;
