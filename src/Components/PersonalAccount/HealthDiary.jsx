import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export default function HealthDiary({ onBack }) {
  return (
    <div className="section-content">
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Назад
      </button>
      <h2>Дневник здоровья</h2>
      <p>
        Ведение записей о комфорте ног в выбранной обуви, советы по 
        упражнениям, рекомендации ортопедов и т. д.
      </p>
      {/* ... дополнительный контент ... */}
    </div>
  );
}
