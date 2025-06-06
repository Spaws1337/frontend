import React, { useState } from 'react';
import './AccountDashboard.css';

import Promos from '../PersonalAccount/Promos';
import Club from '../PersonalAccount/Club';
import MyData from '../PersonalAccount/MyData';
import MyOrders from '../PersonalAccount/MyOrders';
import Care from '../PersonalAccount/Care';
import HealthDiary from '../PersonalAccount/HealthDiary';

import {
  FaTags,
  FaUsers,
  FaUser,
  FaShoppingBag,
  FaShoePrints,
  FaHeartbeat
} from 'react-icons/fa';

  export default function AccountDashboard() {
    const [activeSection, setActiveSection] = useState('default');
    const currentLogin = JSON.parse(localStorage.getItem("authUser"))?.login;
  
    if (!currentLogin) {
      return <div>Необходимо войти в аккаунт</div>;
    }
  
    const dashboardItems = [
      { key: 'promos', label: 'Персональные акции', icon: <FaTags /> },
      { key: 'club', label: 'Клуб Kodobuk', icon: <FaUsers /> },
      { key: 'data', label: 'Мои данные', icon: <FaUser /> },
      { key: 'orders', label: 'Мои заказы', icon: <FaShoppingBag /> },
      { key: 'care', label: 'Уход за обувью', icon: <FaShoePrints /> },
      { key: 'health', label: 'Дневник здоровья', icon: <FaHeartbeat /> },
    ];
  
  
    const renderSection = () => {
      switch (activeSection) {
        case 'promos':
          return <Promos onBack={() => setActiveSection('default')} />;
        case 'club':
          return <Club onBack={() => setActiveSection('default')} />;
        case 'data':
          return <MyData onBack={() => setActiveSection('default')} login={currentLogin} />;
        case 'orders':
          return <MyOrders onBack={() => setActiveSection('default')} />;
        case 'care':
          return <Care onBack={() => setActiveSection('default')} />;
        case 'health':
          return <HealthDiary onBack={() => setActiveSection('default')} login={currentLogin}/>;
        default:
          return null;
      }
    };
  
    return (
      <section className="cabinet">
        <div className="cabinet__container">
          <h1 className="cabinet__title">Личный кабинет</h1>
          <div className="cabinet__content">
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
  