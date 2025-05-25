import React from 'react';
import { Link } from 'react-router-dom';
import all_product from '../Assets/all_product';
import './Catalog.css';
import logoSrc from '../Assets/logo.png';

const Catalog = () => (
  <section id="catalog" className="catalog">
    <h2 className="catalog__title">Каталог</h2>
    <div className="catalog__custom-grid">
      {all_product.map((product, index) => {
        const thumb = product.gallery[0];
        return (
          <React.Fragment key={product.id}>
            <article className={`catalog__card card-${product.id}`}>
              <Link to={`/products/${product.id}`} className="catalog__image-link">
                <img
                  src={thumb.src}
                  alt={thumb.alt}
                  className="catalog__image"
                />
              </Link>
              <div className="catalog__info">
                <h3 className="catalog__name">{product.name}</h3>
                <p className="catalog__price">
                  {product.price.toLocaleString('ru-RU')} ₽
                </p>
              </div>
            </article>

            {index === 3 && (
              // ДОБАВИЛИ logo-card в className
              <article key="logo-card" className="catalog__card logo-card">
                <div className="catalog__image-link">
                  <img
                    src={logoSrc}
                    alt="Логотип R"
                    className="catalog__image"
                  />
                </div>
                <div className="catalog__info" />
              </article>
            )}
          </React.Fragment>
        );
      })}
    </div>
  </section>
);

export default Catalog;
