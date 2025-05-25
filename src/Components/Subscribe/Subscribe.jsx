// src/components/SubscribeSection.jsx
import React from 'react';
import './Subscribe.css'; // подключаем стили (см. ниже)

const Subscribe = () => (
  <section id="contact" className="subscribe">
    <div className="subscribe__container">
      <h2 className="subscribe__title">Подпишись на наш Telegram</h2>
      <p className="subscribe__text">
        Будь в курсе новых поступлений и скидок!
      </p>
      <a
        href="https://t.me/belyaeva_liza"
        target="_blank"
        rel="noopener noreferrer"
        className="subscribe__button"
      >
        Перейти в Telegram
      </a>
    </div>
  </section>
);

export default Subscribe;
