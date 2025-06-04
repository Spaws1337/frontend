import React, { useState } from 'react';
import './AccountDashboard.css';
import {
  FaTags,
  FaUsers,
  FaUser,
  FaShoppingBag,
  FaShoePrints,
  FaHeartbeat,
  FaArrowLeft
} from 'react-icons/fa';

/*
  Заглушки для каждого раздела.
  При желании их можно перенести в отдельные файлы, но 
  здесь всё в одном компоненте для наглядности.
*/
const Promos = ({ onBack }) => (
  <div className="section-content">
    <button className="back-button" onClick={onBack}>
      <FaArrowLeft /> Назад
    </button>
    <h2>Персональные акции</h2>
    <p>
      Здесь стоит информация о персональных акциях: текущие купоны, промокоды,
      специальные предложения и т. п.
    </p>
    {/* ... дополнительный контент ... */}
  </div>
);

const Club = ({ onBack }) => (
  <div className="section-content">
    <button className="back-button" onClick={onBack}>
      <FaArrowLeft /> Назад
    </button>
    <h2>Клуб Kodobuk</h2>
    <p>
      Здесь расположена информация о членстве в клубе Kodobuk: правила 
      начисления баллов, бонусы, уровни лояльности и пр.
    </p>
    {/* ... дополнительный контент ... */}
  </div>
);

const MyData = ({ onBack }) => (
  <div className="section-content">
    <button className="back-button" onClick={onBack}>
      <FaArrowLeft /> Назад
    </button>
    <h2>Мои данные</h2>
    <p>
      В этом разделе пользователь сможет редактировать свои персональные данные: 
      имя, фамилия, e-mail, телефон и т. д.
    </p>
    {/* ... дополнительный контент ... */}
  </div>
);

const MyOrders = ({ onBack }) => (
  <div className="section-content">
    <button className="back-button" onClick={onBack}>
      <FaArrowLeft /> Назад
    </button>
    <h2>Мои заказы</h2>
    <p>
      Список текущих заказов с их статусом, возможностью отслеживания,
      деталями товаров и т. п.
    </p>
    {/* ... дополнительный контент ... */}
  </div>
);

const Care = ({ onBack }) => (
  <div className="section-content">
    <button className="back-button" onClick={onBack}>
      <FaArrowLeft /> Назад
    </button>
    <h2>Уход за обувью</h2>
    <p>
      Советы и товары для правильного ухода за обувью: очистители, 
      крема, щётки, спреи и прочее.
    </p>
    {/* ... дополнительный контент ... */}
  </div>
);

const HealthDiary = ({ onBack }) => (
  <div className="section-content">
    <button className="back-button" onClick={onBack}>
      <FaArrowLeft /> Назад
    </button>
    <h2>Дневник здоровья</h2>
    <p>
      Ведение записей о комфорте ног в выбранной обуви, советы по 
      упражнениям, рекомендации ортопедов и т. д.
    </p>
    {/* ... дополнительный контент ... */}
  </div>
);

export default function AccountDashboard() {
  // Значение 'default' говорит о том, что мы показываем СЕТКУ КАРТОЧЕК
  // Любое другое значение ('promos', 'club' и т. п.) — показываем уже контент раздела.
  const [activeSection, setActiveSection] = useState('default');

  // Данные для сайдбара и для карточек
  const dashboardItems = [
    { key: 'promos', label: 'Персональные акции', icon: <FaTags /> },
    { key: 'club', label: 'Клуб Kodobuk', icon: <FaUsers /> },
    { key: 'data', label: 'Мои данные', icon: <FaUser /> },
    { key: 'orders', label: 'Мои заказы', icon: <FaShoppingBag /> },
    { key: 'care', label: 'Уход за обувью', icon: <FaShoePrints /> },
    { key: 'health', label: 'Дневник здоровья', icon: <FaHeartbeat /> },
  ];

  // Функция, которая вернёт нужный JSX-блок, когда activeSection ≠ 'default'
  const renderSection = () => {
    switch (activeSection) {
      case 'promos':
        return <Promos onBack={() => setActiveSection('default')} />;
      case 'club':
        return <Club onBack={() => setActiveSection('default')} />;
      case 'data':
        return <MyData onBack={() => setActiveSection('default')} />;
      case 'orders':
        return <MyOrders onBack={() => setActiveSection('default')} />;
      case 'care':
        return <Care onBack={() => setActiveSection('default')} />;
      case 'health':
        return <HealthDiary onBack={() => setActiveSection('default')} />;
      default:
        return null;
    }
  };

  return (
    <section className="cabinet">
      <div className="cabinet__container">
        <h1 className="cabinet__title">Личный кабинет</h1>

        <div className="cabinet__content">
          {/* === Сайдбар: этот блок виден всегда, независимо от activeSection === 'default' или нет === */}
          <aside className="cabinet__sidebar">
            <ul>
              {dashboardItems.map(({ key, label }) => (
                <li key={key}>
                  <button
                    className={`cabinet__sidebar-link ${
                      activeSection === key ? 'active' : ''
                    }`}
                    onClick={() => setActiveSection(key)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* === Основная область справа: здесь либо СЕТКА, либо контент раздела === */}
          <div className="cabinet__main-block">
            {activeSection === 'default' ? (
              <div className="cabinet__grid">
                {dashboardItems.map(({ key, label, icon }) => (
                  <button
                    key={key}
                    className="cabinet__item"
                    onClick={() => setActiveSection(key)}
                  >
                    <div className="cabinet__icon">{icon}</div>
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            ) : (
              renderSection()
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
