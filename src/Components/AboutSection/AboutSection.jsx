/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useRef } from 'react';
import infoBlocks from '../Assets/infoBlocks';
import './AboutSection.css'; // ваш общий CSS
 
const AboutSection = () => {
  const aboutTextRef = useRef(null);
  const infoTextRefs = useRef([]);

  useEffect(() => {
    // плавный скролл по якорям
    document.querySelectorAll('a[href^="#"]').forEach(a =>
      a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href'))?.scrollIntoView({
          behavior: 'smooth'
        });
      })
    );

    // Intersection Observer для анимации
    const obsOptions = { threshold: 0.3 };
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('visible');
          o.unobserve(en.target);
        }
      });
    }, obsOptions);

    obs.observe(aboutTextRef.current);
    infoTextRefs.current.forEach(el => el && obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section className="about-wrapper" id="about-block">
        <div className="about-block">
          <section className="video-reels" id="video-reels">
            <div className="video-reels__container">
              <iframe
                src="https://kinescope.io/embed/anRtZHDHL2yq7o2Bc1K6Pw"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
                allowFullScreen
                className="video-reels__iframe"
              />
            </div>
          </section>
          <div className="about-text" ref={aboutTextRef}>
            <h2>О НАС</h2>
            <p>
              Мы — российский бренд обуви, использующий технологии NFC для
              создания уникального пользовательского опыта. Специализируемся
              на дизайне, вдохновлённом культурным кодом России. Наша цель —
              объединить эстетику, функциональность и цифровые технологии в
              каждой паре кроссовок.
            </p>
          </div>
        </div>
      </section>

      <section className="info-blocks">
        {infoBlocks.map((block, idx) => (
          <div
            key={block.id}
            className={`info-item${block.reverse ? ' reverse' : ''}`}
          >
            <img src={block.img} alt={block.title} />
            <div
              className="info-text"
              ref={el => (infoTextRefs.current[idx] = el)}
            >
              <h3>{block.title}</h3>
              <p>{block.text}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default AboutSection;
