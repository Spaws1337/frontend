import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export default function Promos({ onBack }) {
  return (
    <div className="section-content">
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Назад
      </button>
      <h2>Персональные акции</h2>
      <p>
        Здесь стоит информация о персональных акциях: текущие купоны, промокоды,
        специальные предложения и т. п.
      </p>
      {/* ... дополнительный контент ... */}
    </div>
  );
}
