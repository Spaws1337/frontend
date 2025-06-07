import React from 'react';
import './Recycle.css';

export default function Recycle() {
  return (
    <div className="page-container recycle-section">
      <h2 className="recycle-title">Переработка</h2>
      <div className="recycle-flex">
        <div className="recycle-content">
          <p>
            Мы поддерживаем экологичные инициативы! Принесите старую пару обуви в один из наших пунктов сдачи — мы направим её на переработку и подарим <b>скидку 15% на новую обувь</b> или бонусные баллы на ваш счёт.
          </p>
          <ul>
            <li>
              <b>Сдавайте обувь любого состояния.</b> Мы принимаем не только свою марку, но и другие бренды.
            </li>
            <li>
              <b>Получайте выгоду:</b> скидки и бонусы для постоянных клиентов, которые заботятся об экологии.
            </li>
            <li>
              <b>Ваша пара получит вторую жизнь:</b> переработка материалов и поддержка устойчивого производства.
            </li>
          </ul>
          <p>
            Найдите ближайший пункт сдачи на карте ниже или воспользуйтесь поиском.
          </p>
        </div>
        <div className="recycle-map-container">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5db25facfc874f23dd868ef24e31771455ac094c7667f3836e774a3d7c53512c&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
          <div className="recycle-map-caption">
            Пример: <b>Пункт переработки обуви «Собиратор»</b><br />
            Москва, ул. Мастеркова, 4
          </div>
        </div>
      </div>
    </div>
  );
}
