import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { getDatabase, ref, get, set, update, remove } from "firebase/database";
import "./HealthDiary.css";

export default function HealthDiary({ onBack, login }) {
  const [profile, setProfile] = useState({ height: '', weight: '', shoeSize: '', age: '' });
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [entry, setEntry] = useState({ weight: '', height: '', comment: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    const db = getDatabase();
    get(ref(db, `healthDiary/${login}`)).then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setProfile(data.profile || { height: '', weight: '', shoeSize: '', age: '' });
        setEntries(
          data.entries
            ? Object.entries(data.entries).map(([k, v]) => ({ ...v, date: k }))
            : []
        );
      }
      setLoading(false);
    });
  }, [login]);

  // Сохранить профиль
  const saveProfile = async (e) => {
    e.preventDefault();
    setMessage('');
    const db = getDatabase();
    await update(ref(db, `healthDiary/${login}/profile`), profile);
    setMessage("Профиль обновлен!");
  };

  // Добавить запись
  const addEntry = async (e) => {
    e.preventDefault();
    setMessage('');
    const db = getDatabase();
    const dateKey = Date.now().toString(); // безопасно для Firebase!
    await set(ref(db, `healthDiary/${login}/entries/${dateKey}`), entry);
    setEntries([...entries, { ...entry, date: dateKey }]);
    setEntry({ weight: '', height: '', comment: '' });
    setMessage("Запись добавлена!");
  };
  

  // Удалить запись
  const deleteEntry = async (dateKey) => {
    if (!window.confirm("Удалить эту запись?")) return;
    const db = getDatabase();
    await remove(ref(db, `healthDiary/${login}/entries/${dateKey}`));
    setEntries(entries.filter(e => e.date !== dateKey));
  };

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className="section-content">
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Назад
      </button>
      <h2>Дневник здоровья</h2>

      <h4 style={{ marginTop: 24 }}>Мои параметры:</h4>
      <form onSubmit={saveProfile} className="health-diary-form">
        <label>Рост (см):<input type="number" value={profile.height}
          onChange={e => setProfile(p => ({ ...p, height: e.target.value }))}
        /></label>
        <label>Вес (кг):<input type="number" value={profile.weight}
          onChange={e => setProfile(p => ({ ...p, weight: e.target.value }))}
        /></label>
        <label>Размер обуви:<input type="number" value={profile.shoeSize}
          onChange={e => setProfile(p => ({ ...p, shoeSize: e.target.value }))}
        /></label>
        <label>Возраст:<input type="number" value={profile.age}
          onChange={e => setProfile(p => ({ ...p, age: e.target.value }))}
        /></label>
        <button type="submit">Сохранить параметры</button>
      </form>

      <h4 style={{ marginTop: 32 }}>Добавить новую запись:</h4>
      <form onSubmit={addEntry} className="health-diary-form">
        <label>Вес (кг):<input type="number" value={entry.weight}
          onChange={e => setEntry(ent => ({ ...ent, weight: e.target.value }))}
        /></label>
        <label>Рост (см):<input type="number" value={entry.height}
          onChange={e => setEntry(ent => ({ ...ent, height: e.target.value }))}
        /></label>
        <label>Комментарий:<input type="text" value={entry.comment}
          onChange={e => setEntry(ent => ({ ...ent, comment: e.target.value }))}
        /></label>
        <button type="submit">Добавить запись</button>
      </form>

      {message && <div style={{ marginTop: 18 }}>{message}</div>}

      <h4 style={{ marginTop: 38 }}>История изменений:</h4>
      <div className="health-diary-table">
        <table>
          <thead>
            <tr>
              <th>Дата</th>
              <th>Вес</th>
              <th>Рост</th>
              <th>Комментарий</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {entries
              .sort((a, b) => (a.date > b.date ? -1 : 1))
              .map(e => (
                <tr key={e.date}>
                  <td style={{ fontSize: 13 }}>
  {new Date(Number(e.date)).toLocaleString()}
</td>

                  <td>{e.weight}</td>
                  <td>{e.height}</td>
                  <td>{e.comment}</td>
                  <td>
                    <button title="Удалить" onClick={() => deleteEntry(e.date)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
