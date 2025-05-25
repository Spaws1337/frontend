import React from 'react';
import './VideoReels.css'

export const VideoReels = () => {
  const src = 'https://kinescope.io/embed/mwAAiSLmrWPMRH8AJdLvZc';
  return (
    <main className="main-content">
      <section id="video-reels" className="video-reels">
        <div className="video-reels__container">
          <iframe
            src={src}
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
            allowFullScreen
            className="video-reels__iframe"
            title="Видео о процессе создания обуви"
          />
          <div className="video-reels__text">
            <p>В нашей мастерской процесс создания обуви — это искусство, сочетающее вековые традиции ручного производства с современными технологиями.</p>
            <p>Каждая пара начинается с выбора лучших материалов: натуральной кожи, прочной подошвы и текстиля премиум-качества.</p>
            <p>Наши мастера вручную выкраивают детали, тщательно сшивают и формуют обувь, придавая ей идеальную посадку и долговечность.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VideoReels;