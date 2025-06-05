import React from 'react';
import './CareAndWaranty.css';

export default function CareAndWaranty() {
  return (
    <div className="page-container">
      <h1 className="page-title">Гарантия и уход</h1>
      <p className="page-text">
        Мы гарантируем высокое качество нашей обуви и предоставляем гарантию 90 дней с момента покупки. Следуйте нашим рекомендациям по уходу для долгой службы ваших кроссовок.
      </p>
      <ul className="page-list">
        <li>• Чистка мягкой щёткой</li>
        <li>• Не стирать в машинке</li>
        <li>• Сушить при комнатной температуре</li>
      </ul>
    </div>
  );
}
