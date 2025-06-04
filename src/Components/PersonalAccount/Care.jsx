import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export default function Care({ onBack }) {
  return (
    <div className="section-content">
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Назад
      </button>
      <h2>Уход за обувью</h2>
      <p>
        Советы и товары для правильного ухода за обувью: очистители, 
        крема, щётки, спреи и прочее.
      </p>
      {/* ... дополнительный контент ... */}
    </div>
  );
}
