import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { getDatabase, ref, get, set, remove, update } from 'firebase/database';
import './MyData.css';

export default function MyData({ onBack, login }) {
  const [user, setUser] = useState({ avatar: '', pincode: '' });
  const [newLogin, setNewLogin] = useState(login || '');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    const db = getDatabase();
    get(ref(db, `users/${login}`)).then(snapshot => {
      if (snapshot.exists()) {
        setUser(snapshot.val());
        setNewLogin(login);
      }
      setLoading(false);
    });
  }, [login]);

  const handleSave = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!user.pincode.trim()) {
      setMessage('Пинкод не может быть пустым');
      return;
    }
    setSaving(true);
    const db = getDatabase();

    if (newLogin !== login) {
      // Проверяем уникальность логина
      const newSnap = await get(ref(db, `users/${newLogin}`));
      if (newSnap.exists()) {
        setMessage('Такой логин уже занят');
        setSaving(false);
        return;
      }
      await set(ref(db, `users/${newLogin}`), user);
      await remove(ref(db, `users/${login}`));

      // === КОПИРОВАНИЕ ДНЕВНИКА ЗДОРОВЬЯ ===
      const healthDiarySnap = await get(ref(db, `healthDiary/${login}`));
      if (healthDiarySnap.exists()) {
        const healthDiaryData = healthDiarySnap.val();
        await set(ref(db, `healthDiary/${newLogin}`), healthDiaryData);
        await remove(ref(db, `healthDiary/${login}`));
      }
      // === /КОНЕЦ ФРАГМЕНТА ===
      // === КОПИРОВАНИЕ ЗАКАЗОВ ===
      const ordersSnap = await get(ref(db, `orders/${login}`));
      if (ordersSnap.exists()) {
        const ordersData = ordersSnap.val();
        await set(ref(db, `orders/${newLogin}`), ordersData);
        await remove(ref(db, `orders/${login}`));
      }
      // === /КОНЕЦ ФРАГМЕНТА ===
      // Обновляем localStorage
      const authUser = JSON.parse(localStorage.getItem("authUser")) || {};
      authUser.login = newLogin;
      authUser.avatar = user.avatar;
      localStorage.setItem("authUser", JSON.stringify(authUser));
      setMessage('Данные успешно сохранены. Используйте новый логин при следующем входе.');
    } else {
      await update(ref(db, `users/${login}`), user);
      // Обновляем localStorage
      const authUser = JSON.parse(localStorage.getItem("authUser")) || {};
      authUser.avatar = user.avatar;
      localStorage.setItem("authUser", JSON.stringify(authUser));
      setMessage('Данные успешно сохранены!');
    }
    setSaving(false);
  };

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className="section-content">
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Назад
      </button>
      <h2>Мои данные</h2>
      <form onSubmit={handleSave} className="profile-form">
        {/* Логин */}
        <label>Логин:</label>
        <input
          type="text"
          value={newLogin}
          onChange={e => setNewLogin(e.target.value.trim())}
          disabled={saving}
        />

        {/* Аватар */}
        <label>Ссылка на аватар:</label>
        <input
          type="text"
          value={user.avatar}
          onChange={e => setUser(u => ({ ...u, avatar: e.target.value }))}
          placeholder="https://i.pravatar.cc/150?img=12"
          disabled={saving}
        />
        <div className="avatar-preview">
          {user.avatar && /^https?:\/\/.+\..+/.test(user.avatar) && (
            <img src={user.avatar} alt="avatar" />
          )}
        </div>

        {/* Пинкод */}
        <label>Пинкод:</label>
        <input
          type="text"
          value={user.pincode}
          onChange={e => setUser(u => ({ ...u, pincode: e.target.value }))}
          placeholder="Введите новый пинкод"
          disabled={saving}
        />

        <button type="submit" disabled={saving}>
          {saving ? 'Сохраняю...' : 'Сохранить'}
        </button>
        {message && <div style={{ marginTop: 12, textAlign: 'center' }}>{message}</div>}
      </form>
    </div>
  );
}
