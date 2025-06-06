import React from 'react';
import './Create.css';
import girlImage from '../Assets/girl.png';

export default function About() {
  return (
    <div className="page-container about-brand">
      <div className="about-content">
        <div className="about-image-block">

          <img
            src={girlImage}
            alt="Девушка создаёт обувь"
            className="about-shoemaker-image"
            style={{ marginBottom: '28px', maxWidth: '320px', borderRadius: '16px' }}
          />

        </div>
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
      </div>
    </div>
  );
}