import React from 'react';
import './Nfc.css';

export default function Nfc() {
  return (
    <div className="page-container">
      <h1 className="page-title">NFC возможности</h1>
      <p className="page-text">
        Каждая пара обуви KODOBUK оснащена NFC-меткой. Это позволяет получить доступ к эксклюзивному цифровому паспорту вашей пары: узнать историю, рекомендации по уходу, а также подтвердить оригинальность.
      </p>
      <ul className="page-list">
        <li>Проверка подлинности</li>
        <li>Доступ к эксклюзивному контенту</li>
        <li>История эксплуатации</li>
      </ul>
    </div>
  );
}
