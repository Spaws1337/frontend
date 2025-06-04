import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ref, get } from 'firebase/database';
import { db } from '../../firebase';
import { useAuth } from './AuthContext';
import './PincodeLogin.css';

const PincodeLogin = () => {
  const { login } = useParams();
  const [pincode, setPincode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { setUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userRef = ref(db, `users/${login}`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const data = snapshot.val();

        if (data.pincode === pincode) {
          const authData = {
            login,
            email: data.email || '',
            avatar: data.avatar || `https://i.pravatar.cc/150?u=${login}`
          };
          localStorage.setItem('authUser', JSON.stringify(authData));
          setUser(authData);
          setSuccess(true);
          setError('');
        } else {
          setError('Неверный пин-код');
        }
      } else {
        setError('Пользователь не найден');
      }
    } catch (err) {
      console.error(err);
      setError('Ошибка подключения к базе');
    }
  };

  return (
    <div className="pincode-container">
      <div className="pincode-box">
        <h2>Вход для {login}</h2>
        {!success ? (
          <form onSubmit={handleLogin}>
            <input
              className="pincode-input"
              type="password"
              placeholder="Введите пин-код"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
            />
            <button className="pincode-button" type="submit">Войти</button>
            {error && <p className="pincode-error">{error}</p>}
          </form>
        ) : (
          <p className="pincode-success">Добро пожаловать, {login}!</p>
        )}
      </div>
    </div>
  );
};

export default PincodeLogin;
