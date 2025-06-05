import React from 'react';
import {
  FaArrowLeft,
  FaPercent,
  FaShippingFast,
  FaGift,
  FaUserFriends,
  FaHeart,
  FaTag,
} from 'react-icons/fa';
import './Promos.css'

export default function Promos({ onBack }) {
  return (
    <div className="section-content">
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Назад
      </button>
      <h2>Персональные акции</h2>
      <p>Выберите одну из текущих акций для вашей уникальной NFC-обуви:</p>

      <div className="cabinet__grid">
        {/* 1) Скидка 10% на вторую пару */}
        <button className="cabinet__item" onClick={() => {/* обработка клика */}}>
          <FaPercent className="cabinet__icon" />
          <h3>Скидка 10% на вторую пару</h3>
          <p>Приобретите вторую пару NFC-обуви со скидкой 10%.</p>
        </button>

        {/* 2) Бесплатная доставка */}
        <button className="cabinet__item" onClick={() => {/* обработка клика */}}>
          <FaShippingFast className="cabinet__icon" />
          <h3>Бесплатная доставка</h3>
          <p>Доставка за наш счет при заказе от 5000 ₽.</p>
        </button>

        {/* 3) Промокод NFCFIRST */}
        <button className="cabinet__item" onClick={() => {/* обработка клика */}}>
          <FaGift className="cabinet__icon" />
          <h3>Промокод NFCFIRST</h3>
          <p>Получите 15% скидку на первую покупку NFC-обуви.</p>
        </button>

        {/* 4) Пригласи друга */}
        <button className="cabinet__item" onClick={() => {/* обработка клика */}}>
          <FaUserFriends className="cabinet__icon" />
          <h3>Пригласи друга</h3>
          <p>Вы оба получите по 500 бонусных баллов за регистрацию.</p>
        </button>

        {/* 5) Бонус за отзыв */}
        <button className="cabinet__item" onClick={() => {/* обработка клика */}}>
          <FaHeart className="cabinet__icon" />
          <h3>Бонус за отзыв</h3>
          <p>Оставьте честный отзыв об обуви и получите 200 баллов.</p>
        </button>

        {/* 6) Эксклюзивный доступ */}
        <button className="cabinet__item" onClick={() => {/* обработка клика */}}>
          <FaTag className="cabinet__icon" />
          <h3>Эксклюзивный доступ</h3>
          <p>Станьте участником клуба NFC и первыми узнавайте о новинках.</p>
        </button>
      </div>
    </div>
  );
}
