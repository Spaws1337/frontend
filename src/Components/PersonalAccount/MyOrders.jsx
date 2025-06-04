import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export default function MyOrders({ onBack }) {
  return (
    <div className="section-content">
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Назад
      </button>
      <h2>Мои заказы</h2>
      <p>
        Список текущих заказов с их статусом, возможностью отслеживания,
        деталями товаров и т. п.
      </p>
      {/* ... дополнительный контент ... */}
    </div>
  );
}
