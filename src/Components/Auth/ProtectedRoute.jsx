// src/Components/Auth/ProtectedRoute.jsx
import React from 'react';
import { useAuth } from './AuthContext';
import NotFound from '../Common/NotFound'; // <— импортируем компонент 404

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  // Если пользователь не залогинен — показываем красивую 404-страницу
  if (!user) {
    return <NotFound />;
  }

  // Иначе — рендерим вложенный контент
  return <>{children}</>;
};

export default ProtectedRoute;
