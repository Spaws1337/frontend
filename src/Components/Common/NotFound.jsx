// src/Components/Common/NotFound.jsx
import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h2 className="notfound-title">Страница не найдена</h2>
        <p className="notfound-text">
          Кажется, здесь ничего нет. 
          Возможно, вы не авторизованы или ввели неверный адрес.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
