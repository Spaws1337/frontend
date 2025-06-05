import React from 'react';
import './Modal.css';
import sticker from  '../Assets/sticker.png'

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay-home">
      <div className="modal-window-home">
        <div className="modal-header-home">
          <h2>Как пользоваться сайтом</h2>
        </div>
        <div className="modal-body-home">
          <p>Добро пожаловать!</p>
          <p>
            Чтобы быстро получить доступ к сайту с помощью NFC-метки, выполните следующие шаги:
          </p>
          <ul>
            <li>
              Запишите на свою NFC-метку уникальную ссылку с помощью приложения <b>NFC Tools</b>. Список личных ссылок для founders:
              <ul style={{marginTop: "7px"}}>
                <li>https://kodobuk.ru/users/CodeTrekker</li>
                <li>https://kodobuk.ru/users/NanoStride</li>
                <li>https://kodobuk.ru/users/PulseBoots</li>
                <li>https://kodobuk.ru/users/ShoeNova</li>
                <li>https://kodobuk.ru/users/TagWalker</li>
              </ul>
            </li>
            <li>
              После перехода по ссылке с NFC-метки введите свой ПИН-код. Он будет выдан вам вместе с покупкой обуви на скретч-карте (по умолчанию: <b>123456</b>).
            </li>
            <li>
              После успешной авторизации вы попадёте в личный кабинет, где сможете ознакомиться с возможностями сайта и персональными предложениями.
            </li>
            <li>
              Вы можете изменить логин и ПИН-код в личном кабинете. Для этого обязательно укажите вашу почту для восстановления доступа.
            </li>
            <li>
              Важно! После смены логина старая ссылка перестанет работать. Перезапишите новую ссылку на NFC-метку и установите новый ПИН-код для защиты.
            </li>
          </ul>
          <p style={{marginBottom: "10px"}}>
            Если возникнут вопросы — напишите нам через форму обратной связи. Мы обязательно поможем!
          </p>
        </div>

        <div className="modal-footer-home">
            <img
              src={sticker}
              alt="Закрыть"
              className="modal-close-img-home"
              onClick={onClose}
              style={{
                cursor: 'pointer',
                width: '170px',
                height: 'auto',
                display: 'block',
                margin: '14px auto 0 auto',
                transition: 'transform 0.15s',
              }}
              title="Закрыть"
            />
        </div>
      </div>
    </div>
  );
};

export default Modal;
