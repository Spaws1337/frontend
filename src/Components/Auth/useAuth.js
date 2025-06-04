// src/hooks/useAuth.js
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('authUser');
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('authUser');
    setUser(null);
  };

  return { user, setUser, logout };
};
