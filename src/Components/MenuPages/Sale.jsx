import React from 'react';
import './Sale.css';
import saleEventImage from '../Assets/sale.png';

export default function Sale() {
  return (
    <div className="page-container sale-special">
      <h2 className="sale-title">Спецпредложение</h2>
      <div className="sale-row">
        <img 
          src={saleEventImage}
          alt="Участники события KODOBUK сканируют NFC-метки на входе"
          className="sale-image"
        />
        <div className="sale-text">
          <p>
            Следите за нашими акциями и распродажами! Только сейчас — скидка 10% на первую покупку при подписке на Telegram-канал.
          </p>
          <p>
            Мы регулярно проводим специальные мероприятия и встречи для владельцев обуви KODOBUK. Чтобы принять участие, достаточно отсканировать NFC-метку вашей пары на входе — это ваш уникальный пропуск на закрытые события бренда.
          </p>
          <p>
            Вас ждут постоянные скидки, сезонные акции, а также спортивные забеги, где ваши кроссовки KODOBUK открывают двери в сообщество единомышленников. Следите за новостями и не упустите шанс быть частью большого KODOBUK-семейства!
          </p>
        </div>
      </div>
    </div>
  );
}
