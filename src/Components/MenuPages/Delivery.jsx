import React from 'react';
import './Delivery.css';

export default function Delivery() {
  return (
    <div className="page-container">
      <h1 className="page-title">Доставка</h1>
      <p className="page-text">
        Мы доставляем заказы по всей России с помощью ведущих транспортных компаний. Сроки и стоимость доставки зависят от региона и выбранного способа получения. После оформления заказа наш менеджер свяжется с вами для уточнения деталей.
      </p>
      <ul className="page-list">
        <li>Бесплатная доставка при заказе от 10 000 ₽</li>
        <li>Самовывоз в Москве</li>
        <li>Отправка на следующий рабочий день</li>
      </ul>
    </div>
  );
}
