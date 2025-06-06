import React from 'react';
import './About.css';
import shopImage from '../Assets/shop.png'; // Поместите сгенерированное изображение в папку src и укажите путь

export default function About() {
  return (
    <div className="page-container about-brand">
      <div className="about-content">
        <div className="about-text-block">
          <h1 className="page-title">О бренде</h1>
          <p className="page-text">
            <strong>KODOBUK</strong> — современный российский бренд обуви, объединяющий традиции, инновации и качество.<br />
            Мы создаём кожаную обувь, в которой продуманный дизайн и ручная работа сочетаются с передовыми технологиями.
          </p>
          <p className="page-text">
            Каждая пара KODOBUK оснащена NFC-меткой — это не просто обувь, а новый способ взаимодействия с брендом. Прикоснитесь смартфоном и получите доступ к эксклюзивному контенту, истории и специальным предложениям.
          </p>
          <p className="page-text founder">
            <em>Бренд был основан Беляевой Елизаветой, студенткой 4 курса РГУ им. А.Н. Косыгина, в рамках дипломного проекта.</em>
          </p>
        </div>
        <div className="about-image-block">
          <img
            src={shopImage}
            alt="Современный магазин обуви KODOBUK"
            className="about-shop-image"
          />
        </div>
      </div>
    </div>
  );
}
