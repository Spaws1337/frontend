import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { FiLogOut } from 'react-icons/fi';

const AuthDetails = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

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
        onClick={logout}
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
