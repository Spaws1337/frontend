import React, { useState, useEffect, useRef } from 'react';
import './HeroSlider.css';

const slideData = [
  {
    id: 1,
    title: 'Новая коллекция 2025',
    subtitle: 'Будь в тренде с нашими кроссовками',
    btnText: 'Смотреть каталог',
    btnLink: '#catalog',
    bgClass: 'slide-1',
  },
  {
    id: 2,
    title: 'Комфорт каждый день',
    subtitle: 'Твоя идеальная пара',
    btnText: 'Смотреть каталог',
    btnLink: '#catalog',
    bgClass: 'slide-2',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideTimer = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  };

  useEffect(() => {
    slideTimer.current = setInterval(nextSlide, 7000);
    return () => clearInterval(slideTimer.current);
  }, []);

  const scrollToCatalog = (e) => {
    e.preventDefault();
    const catalogSection = document.querySelector('#catalog');
    catalogSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero-slider" className="hero-slider">
      {slideData.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${slide.bgClass} ${index === currentSlide ? 'active' : ''}`}
        >
          <div className="hero__content">
            <h1 className="hero__title">{slide.title}</h1>
            <p className="hero__subtitle">{slide.subtitle}</p>
          </div>
          <a href={slide.btnLink} className="hero__button" onClick={scrollToCatalog}>
            {slide.btnText}
          </a>
        </div>
      ))}
      <div className="hero-controls">
        <button className="hero-prev" onClick={prevSlide}>&#10094;</button>
        <button className="hero-next" onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  );
};

export default HeroSlider;