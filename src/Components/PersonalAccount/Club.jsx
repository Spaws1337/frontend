import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export default function Club({ onBack }) {
  return (
    <div className="section-content">
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Назад
      </button>
      <h2>Клуб Kodobuk</h2>
      <p>
        Здесь расположена информация о членстве в клубе Kodobuk: правила 
        начисления баллов, бонусы, уровни лояльности и пр.
      </p>
      {/* ... дополнительный контент ... */}
    </div>
  );
}
