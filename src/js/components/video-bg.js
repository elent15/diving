const videoBg = () => {
  const heroCards = Array.from(document.querySelectorAll('.oceanariums-hero__card'));

  if (heroCards) {
    heroCards.forEach(card => {
      const heroVideo = document.querySelector('.oceanariums-hero__video');
      heroVideo.addEventListener('ended', (e) => {
        e.target.load();
        e.target.pause();
      });

      card.addEventListener('click', () => {
        if (!card.classList.contains('oceanariums-hero__card--active')) {
          heroCards.forEach(card => {
            card.classList.remove('oceanariums-hero__card--active');
          });
          card.classList.add('oceanariums-hero__card--active');

          if (heroVideo.getAttribute('src') === './resources/oceanariums-1.mp4') {
            heroVideo.setAttribute('src', './resources/oceanariums-2.mp4');
            heroVideo.setAttribute('poster', './images/oceanariums/oceanariums-hero-bg-2.webp');
          } else {
            heroVideo.setAttribute('src', './resources/oceanariums-1.mp4');
            heroVideo.setAttribute('poster', './images/oceanariums/oceanariums-hero-bg-1.webp');
          }
        } else {
          const heroVideo = document.querySelector('.oceanariums-hero__video');

          if (heroVideo.paused) {
            heroVideo.play();
          } else {
            heroVideo.pause();
          }
        }
      });
    });
  }
}

videoBg();
