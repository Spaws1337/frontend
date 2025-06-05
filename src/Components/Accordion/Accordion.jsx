import React, { useState } from 'react';
import './Accordion.css';
import sizeChart from '../Assets/size-chart.jpg';

// Модалка для увеличения картинки
function ImageModal({ src, alt, open, onClose }) {
  if (!open) return null;
  return (
    <div className="accordion__modal-overlay" onClick={onClose}>
      <img
        className="accordion__modal-image"
        src={src}
        alt={alt}
        onClick={e => e.stopPropagation()}
      />
      <button className="accordion__modal-close" onClick={onClose} aria-label="Закрыть">×</button>
    </div>
  );
}

// Основной компонент
const ACCORDION_ITEMS = [
  {
    summary: 'РАЗМЕРНАЯ СЕТКА',
    isImage: true // добавим свойство для модалки
  },
  {
    summary: 'КАК ВЫБРАТЬ РАЗМЕР?',
    content: (
      <ul>
        <li>Поставьте ногу на лист бумаги и обведите её контур.</li>
        <li>Измерьте расстояние от кончика большого пальца до пятки.</li>
        <li>Сравните полученную длину с таблицей размеров выше.</li>
        <li>Если длина стопы находится между двумя размерами — рекомендуем выбирать больший.</li>
      </ul>
    )
  },
  {
    summary: 'ДОСТАВКА И ОПЛАТА',
    content: (
      <ul>
        <li>Получить заказ вы можете в удобном для вас пункте выдачи заказов (ПВЗ) рядом с домом или работой.</li>
        <li>Оплата заказа производится через наш Telegram-бот: быстро, удобно и безопасно.</li>
        <li>После оформления заказа вам придет ссылка на оплату в Telegram.</li>
      </ul>
    )
  },
  {
    summary: 'УХОД',
    content: (
      <ul>
        <li>Очищайте мягкой тканью или специальной щёткой после каждого использования.</li>
        <li>Для удаления загрязнений используйте влажную ткань или щётку, избегая агрессивных чистящих средств.</li>
        <li>Дайте обуви полностью высохнуть при комнатной температуре, не размещайте рядом с нагревательными приборами.</li>
      </ul>
    )
  },
  {
    summary: 'NFC МЕТКА',
    content: (
      <ul>
        <li>Метка позволяет получить уникальную информацию о паре — просто поднесите телефон с поддержкой NFC к специальной зоне на обуви.</li>
        <li>Через NFC вы можете узнать о технологии, узнать советы по уходу, проверить подлинность или получить доступ к эксклюзивным предложениям бренда.</li>
        <li>Инструкция по использованию NFC-метки — в комплекте с обувью или на сайте в разделе "NFC".</li>
      </ul>
    )
  }
];

export default function Accordion() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className="accordion-section">
      <div className="accordion">
        {ACCORDION_ITEMS.map((item, idx) => (
          <details className="accordion__item" key={idx}>
            <summary className="accordion__summary">{item.summary}</summary>
            <div className="accordion__content">
              {item.isImage ? (
                <img
                  className="accordion__image"
                  src={sizeChart}
                  alt="Размерная сетка"
                  style={{ cursor: 'zoom-in'}}
                  onClick={() => setModalOpen(true)}
                />
              ) : (
                item.content
              )}
            </div>
          </details>
        ))}
      </div>
      {/* Модальное окно для увеличения картинки */}
      <ImageModal
        src={sizeChart}
        alt="Размерная сетка"
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
