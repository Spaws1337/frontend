// src/components/Cart/Cart.jsx  (или Pages/Cart.jsx — где у вас размещён)
import React, { useState, useEffect } from 'react';
import './Cart.css';

export default function Cart({ cartItems = [], removeFromCart, clearCart }) {
  // 1) Считаем общий счёт из пропа cartItems
  const [total, setTotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    address: ''
  });
  const [toastMessage, setToastMessage] = useState('');

  // 2) Каждый раз, когда меняются пропы cartItems, пересчитываем сумму
  useEffect(() => {
    const sum = cartItems.reduce((acc, item) => {
      let priceValue;
  
      if (typeof item.price === 'string') {
        // если price — строка, вырезаем всё, кроме цифр
        priceValue = parseInt(item.price.replace(/[^\d]/g, ''), 10);
      } else if (typeof item.price === 'number') {
        // если price — число, берём его напрямую
        priceValue = item.price;
      } else {
        // на всякий случай — если неожиданно другой тип
        priceValue = 0;
      }
  
      return acc + (isNaN(priceValue) ? 0 : priceValue);
    }, 0);
  
    setTotal(sum);
  }, [cartItems]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = { ...formData, cart: cartItems };
    console.log('Заказ отправлен:', order);
    setToastMessage('✅ Заказ успешно оформлен!');
    clearCart?.(); // очищаем корзину
    closeModal();
    setTimeout(() => setToastMessage(''), 2000);
  };

  return (
    <div className="cart-page">

      {cartItems.length === 0 ? (
        <p className="empty-message">Корзина пуста.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-card" key={index}>
                <a href={item.link}>
                  <img src={item.image} alt={item.name} className="cart-card__img" />
                </a>
                <div className="cart-card__info">
                  <a href={item.link} className="cart-card__name">{item.name}</a>
                  <p>Размер: {item.size}</p>
                  <p className="cart-card__price">{item.price}</p>
                </div>
                <button
                  className="cart-card__remove"
                  onClick={() => removeFromCart?.(index)}
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button className="clear-btn" onClick={() => clearCart?.()}>
              Очистить
            </button>
            <button className="checkout-btn" onClick={openModal}>
              Оформить
            </button>
          </div>

          <div className="cart-total">
            Итого: {total.toLocaleString('ru-RU')} ₽
          </div>
        </>
      )}

      {isModalOpen && (
        <div className="modal-overlay active">
          <div className="modal">
            <button className="modal__close" onClick={closeModal}>
              ×
            </button>
            <h2>Оформление заказа</h2>
            <form id="checkout-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="Имя"
                required
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Фамилия"
                required
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="contact"
                placeholder="Телефон или Telegram"
                required
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Адрес доставки"
                required
                onChange={handleInputChange}
              />
              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      )}

      {toastMessage && <div className="toast show">{toastMessage}</div>}
    </div>
  );
}
