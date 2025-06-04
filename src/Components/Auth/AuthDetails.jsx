import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { FiLogOut } from 'react-icons/fi';

const AuthDetails = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate(); // импортируем хук для навигации

  if (!user) return null;

  const handleLogout = async () => {
    try {
      await logout();       // сначала выполняем разлогин
      navigate('/');        // затем перенаправляем на домашнюю страницу
    } catch (err) {
      console.error('Ошибка при выходе:', err);
      // Здесь можно показать уведомление об ошибке, если нужно
    }
  };

  return (
    <div className="auth-block" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Link to="/account">
        <img
          src={user.avatar || `https://i.pravatar.cc/150?u=${user.login}`}
          alt="Аватар"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #fff'
          }}
        />
      </Link>
      <button
        onClick={handleLogout}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer'
        }}
        title="Выйти"
      >
        <FiLogOut size={20} color="#444" />
      </button>
    </div>
  );
};

export default AuthDetails;
