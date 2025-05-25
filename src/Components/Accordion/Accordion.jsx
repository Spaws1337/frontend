import React from 'react';
import './Accordion.css';
import sizeChart from '../Assets/size-chart.jpg';


const ACCORDION_ITEMS = [
  {
    summary: 'РАЗМЕРНАЯ СЕТКА',
    content: (
      <img
        className="accordion__image"
        src={sizeChart}
        alt="Размерная сетка"
      />
    )
  },
  {
    summary: 'КАК ВЫБРАТЬ РАЗМЕР?',
    content: <p>Измерьте длину стопы и сравните с таблицей выше.</p>
  },
  {
    summary: 'ДОСТАВКА С ПРИМЕРКОЙ',
    content: <p>Мы доставим до 3-х пар на выбор, примерка бесплатна.</p>
  },
  {
    summary: 'УХОД',
    content: <p>Обувь легко чистится мягкой тканью или щёткой.</p>
  },
  {
    summary: 'NFC МЕТКА',
  }
];

export default function Accordion() {
  return (
    <section className="accordion-section">
      <div className="accordion">
        {ACCORDION_ITEMS.map(({ summary, content }, idx) => (
          <details className="accordion__item" key={idx}>
            <summary className="accordion__summary">{summary}</summary>
            <div className="accordion__content">{content}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
