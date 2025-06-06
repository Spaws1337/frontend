import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { getDatabase, ref, get } from 'firebase/database';
import './MyOrders.css';

export default function MyOrders({ onBack }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Получаем логин пользователя
  const currentLogin = JSON.parse(localStorage.getItem("authUser"))?.login;

  useEffect(() => {
    if (!currentLogin) return;
    setLoading(true);
    const db = getDatabase();
    get(ref(db, `orders/${currentLogin}`)).then(snap => {
      if (snap.exists()) {
        // Делаем массив заказов с id заказа
        const arr = Object.entries(snap.val()).map(([id, data]) => ({
          ...data, id
        }));
        setOrders(arr.sort((a, b) => b.createdAt - a.createdAt));
      } else {
        setOrders([]);
      }
      setLoading(false);
    });
  }, [currentLogin]);

  if (!currentLogin) return <div>Необходимо войти в аккаунт</div>;
  if (loading) return <div>Загрузка...</div>;

  return (
    <div className="section-content">
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Назад
      </button>
      <h2>Мои заказы</h2>

      {orders.length === 0 ? (
        <div>У вас ещё нет заказов.</div>
      ) : (
        <div>
          {orders.map(order => (
            <div key={order.id} className="order-card">
            <div className="order-date">
              Заказ от {new Date(order.createdAt).toLocaleString()}
            </div>
            <strong>
              ФИО: {order.lastName} {order.firstName}
            </strong>
            <div>Контакт: <span style={{color:'#444'}}>{order.contact}</span></div>
            <div>Адрес: <span style={{color:'#444'}}>{order.address}</span></div>
            <div>Сумма: <span style={{fontWeight:600}}>{order.total?.toLocaleString("ru-RU")} ₽</span></div>
            <div style={{ marginTop: 14 }}>
              <span style={{ fontWeight: 600 }}>Товары:</span>
              <ul>
                {order.cart.map((item, i) => (
                  <li key={i}>
                    {item.name} — {item.size} — {item.price}
                  </li>
                ))}
              </ul>
            </div>
          </div>          
          ))}
        </div>
      )}
    </div>
  );
}
