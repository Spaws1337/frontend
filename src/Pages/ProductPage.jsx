// src/components/ProductPage/ProductPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '@google/model-viewer';

import all_product from '../Components/Assets/all_product';
import Accordion from '../Components/Accordion/Accordion';
import './ProductPage.css';

export default function ProductPage({ addToCart = () => {} }) {
  const { id } = useParams();
  const product = all_product.find(p => p.id === +id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  // Hooks must come before any early returns:
  const [activeIndex, setActiveIndex]   = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [toast, setToast]               = useState({ visible: false, message: '' });

  // Auto-hide toast
  useEffect(() => {
    if (!toast.visible) return;
    const t = setTimeout(() => setToast(v => ({ ...v, visible: false })), 2000);
    return () => clearTimeout(t);
  }, [toast.visible]);

  // Early return if product not found
  if (!product) {
    return <p>Товар не найден</p>;
  }

  const galleryItems = product.gallery;

  const prevSlide = () =>
    setActiveIndex(i => (i - 1 + galleryItems.length) % galleryItems.length);
  const nextSlide = () =>
    setActiveIndex(i => (i + 1) % galleryItems.length);

  const handleBuy = () => {
    if (!selectedSize) {
      setToast({ visible: true, message: 'Пожалуйста, выберите размер' });
      return;
    }
    const cartItem = {
      ...product,
      size: selectedSize,
      image: galleryItems[activeIndex].src,
      link: window.location.pathname
    };
    addToCart(cartItem);
    setToast({ visible: true, message: 'Товар добавлен в корзину!' });
  };

  return (
    <>
      <main className="product">
        <div className="product__container">
          {/* Карусель */}
          <div className="product__gallery">
            <div className="gallery__main">
              {galleryItems.map((item, i) =>
                item.type === 'image' ? (
                  <img
                    key={i}
                    className={`gallery__image ${i === activeIndex ? 'active' : ''}`}
                    src={item.src}
                    alt={item.alt}
                  />
                ) : (
                  <model-viewer
                    key={i}
                    className={`gallery__image ${i === activeIndex ? 'active' : ''}`}
                    src={item.model}
                    alt={item.alt}
                    auto-rotate
                    camera-controls
                    poster={item.src}
                  />
                )
              )}
              <button
                className="gallery__nav gallery__nav--prev"
                onClick={prevSlide}
                aria-label="Предыдущий слайд"
              >
                ‹
              </button>
              <button
                className="gallery__nav gallery__nav--next"
                onClick={nextSlide}
                aria-label="Следующий слайд"
              >
                ›
              </button>
            </div>
            <div className="gallery__thumbs">
              {galleryItems.map((item, i) => (
                <img
                  key={i}
                  className={`gallery__thumb ${i === activeIndex ? 'active' : ''}`}
                  src={item.src}
                  alt={item.alt}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </div>

          {/* Детали товара */}
          <div className="product__details">
            <h1 className="product__title">{product.name}</h1>
            <p className="product__price">
              {product.price.toLocaleString('ru-RU')} ₽
            </p>
            <p className="product__description-text">
              {product.description}
            </p>
            <div className="product__sizes">
              <span>Размер:</span>
              {['39','40','41','42'].map(size => (
                <button
                  key={size}
                  className={selectedSize === size ? 'selected' : ''}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <button className="product__buy" onClick={handleBuy}>
              В корзину
            </button>
            {/* При наличии дополнительных фич */}
            {product.features && (
              <ul className="product__features">
                {product.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            )}
          </div>
        </div>
      </main>

      {/* Аккордеон */}
      <Accordion />

      {/* Тост */}
      {toast.visible && <div className="toast show">{toast.message}</div>}
    </>
  );
}