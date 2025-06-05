// src/components/Navbar/Navbar.jsx
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
import logoSrc from '../Assets/logo.png';
import { IoCartOutline } from "react-icons/io5";
import AuthDetails from '../Auth/AuthDetails';

function useClickOutside(refs, handler) {
  useEffect(() => {
    const listener = (e) => {
      for (const ref of refs) {
        if (ref.current?.contains(e.target)) return;
      }
      handler();
    };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [refs, handler]);
}

const NAV_LINKS = [
  { to: '/#hero-slider', label: 'ГЛАВНАЯ', isHash: true },
  { to: '/#catalog', label: 'КАТАЛОГ', isHash: true },
  { to: '#contact', label: 'КОНТАКТЫ', isHash: true },
];

const BURGER_LINKS = [
  { to: '/', label: 'ГЛАВНАЯ', isHash: false },
  { to: '/#catalog', label: 'КАТАЛОГ', isHash: true },
  { to: '/delivery', label: 'ДОСТАВКА', isHash: false },
  { to: '/about', label: 'О БРЕНДЕ', isHash: false },
  { to: '/creation', label: 'СОЗДАНИЕ', isHash: false },
  { to: '/sale', label: 'СПЕЦПРЕДЛОЖЕНИЕ', isHash: false },
  { to: '/nfc', label: 'NFC ВОЗМОЖНОСТИ', isHash: false },
  { to: '/warranty', label: 'ГАРАНТИЯ И УХОД', isHash: false },
  { to: '/recycle', label: 'ПЕРЕРАБОТКА', isHash: false },
];

export default function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggle = useCallback(() => setIsOpen(o => !o), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    document.body.classList.toggle('lock-scroll', isOpen);
  }, [isOpen]);

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape' && isOpen) close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  useClickOutside([menuRef, buttonRef], () => {
    if (isOpen) close();
  });

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo">
          <img src={logoSrc} alt="Логотип" className="header__logo-img" />
        </NavLink>

        <nav className="header__nav">
          <ul className="nav__list">
            {NAV_LINKS.map(({ to, label, isHash }) => (
              <li key={to} className="nav__item">
                {isHash ? (
                  <HashLink smooth to={to} className="nav__link">{label}</HashLink>
                ) : (
                  <NavLink to={to} className="nav__link" end>{label}</NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__right">
          <NavLink to="/cart" className="header__cart">
            <IoCartOutline size={28} style={{ cursor: 'pointer', color: '#000' }} />
            {/* Здесь подставляется динамическое число */}
            <span className="header__cart-count">{cartCount}</span>
          </NavLink>

          <button
            ref={buttonRef}
            className={`header__burger ${isOpen ? 'active' : ''}`}
            onClick={toggle}
            aria-label="Открыть меню"
          >
            <span className="burger__line" />
            <span className="burger__line" />
            <span className="burger__line" />
          </button>

          <AuthDetails />
        </div>

        <aside
          ref={menuRef}
          className={`burger-menu ${isOpen ? 'active' : ''}`}
          aria-hidden={!isOpen}
        >
          <button className="burger-menu__close" onClick={close} aria-label="Закрыть меню">
            &times;
          </button>
          <ul className="burger-menu__list">
            {BURGER_LINKS.map(({ to, label, isHash }) => (
              <li key={to}>
                {isHash ? (
                  <HashLink smooth to={to} className="burger-menu__link" onClick={close}>
                    {label}
                  </HashLink>
                ) : (
                  <NavLink to={to} className="burger-menu__link" onClick={close} end>
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {isOpen && <div className="burger-overlay" onClick={close} />}
      </div>
    </header>
  );
}
