import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export default function MyData({ onBack }) {
  return (
    <div className="section-content">
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Назад
      </button>
      <h2>Мои данные</h2>
      <p>
        В этом разделе пользователь сможет редактировать свои персональные данные: 
        имя, фамилия, e-mail, телефон и т. д.
      </p>
      {/* ... дополнительный контент ... */}
    </div>
  );
}
