// src/Components/Navbar/Navbar.jsx
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
import logoSrc from '../Assets/logo.png';
import cartIconSrc from '../Assets/cart.png';

// Хук: закрытие при клике вне переданных ref
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

// Основные навигационные ссылки
// Для "КАТАЛОГ" используем HashLink, остальные — NavLink
const NAV_LINKS = [
{ to: '/#hero-slider',        label: 'ГЛАВНАЯ',   isHash: true },
{ to: '/#catalog', label: 'КАТАЛОГ',   isHash: true  },
{ to: '#contact', label: 'КОНТАКТЫ',  isHash: true },
];
// Ссылки в бургер-меню (аналогично можно пометить нужные как hash)
const BURGER_LINKS = [
  { to: '/',          label: 'ГЛАВНАЯ',        isHash: false },
  { to: '/#catalog',  label: 'КАТАЛОГ',        isHash: true  },
  { to: '/delivery',  label: 'ДОСТАВКА',       isHash: false },
  { to: '/about',     label: 'О БРЕНДЕ',       isHash: false },
  { to: '/creation',  label: 'СОЗДАНИЕ',       isHash: false },
  { to: '/selection', label: 'ПОДБОР',         isHash: false },
  { to: '/special',   label: 'СПЕЦПРЕДЛОЖЕНИЕ',isHash: false },
  { to: '/nfc',       label: 'NFC ВОЗМОЖНОСТИ',isHash: false },
  { to: '/warranty',  label: 'ГАРАНТИЯ И УХОД', isHash: false },
  { to: '/recycle',   label: 'ПЕРЕРАБОТКА',     isHash: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef   = useRef(null);
  const buttonRef = useRef(null);

  const toggle = useCallback(() => setIsOpen(o => !o), []);
  const close  = useCallback(() => setIsOpen(false), []);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    document.body.classList.toggle('lock-scroll', isOpen);
  }, [isOpen]);

  // Закрытие по Escape
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape' && isOpen) close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  // Закрытие кликом вне меню
  useClickOutside([menuRef, buttonRef], () => {
    if (isOpen) close();
  });

  return (
    <header className="header">
      <div className="header__container">
        {/* Лого */}
        <NavLink to="/" className="header__logo">
          <img src={logoSrc} alt="Логотип" className="header__logo-img" />
        </NavLink>

        {/* Десктоп-меню */}
        <nav className="header__nav">
          <ul className="nav__list">
            {NAV_LINKS.map(({ to, label, isHash }) => (
              <li key={to} className="nav__item">
                {isHash ? (
                  <HashLink smooth to={to} className="nav__link">
                    {label}
                  </HashLink>
                ) : (
                  <NavLink
                    to={to}
                    className="nav__link"
                    end
                  >
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Иконка корзины + бургер */}
        <div className="header__right">
          <NavLink to="/cart" className="header__cart">
            <img src={cartIconSrc} alt="Корзина" className="header__cart-icon" />
            <span className="header__cart-count">0</span>
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
        </div>

        {/* Боковая панель */}
        <aside
          ref={menuRef}
          className={`burger-menu ${isOpen ? 'active' : ''}`}
          aria-hidden={!isOpen}
        >
          <button
            className="burger-menu__close"
            onClick={close}
            aria-label="Закрыть меню"
          >
            &times;
          </button>
          <ul className="burger-menu__list">
            {BURGER_LINKS.map(({ to, label, isHash }) => (
              <li key={to}>
                {isHash ? (
                  <HashLink
                    smooth
                    to={to}
                    className="burger-menu__link"
                    onClick={close}
                  >
                    {label}
                  </HashLink>
                ) : (
                  <NavLink
                    to={to}
                    className="burger-menu__link"
                    onClick={close}
                    end
                  >
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Оверлей */}
        {isOpen && <div className="burger-overlay" onClick={close} />}
      </div>
    </header>
  );
}
