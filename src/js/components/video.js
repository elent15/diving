// video from youtube
const video = () => {
  const videoBtn = document.querySelectorAll('.video__play-btn');

  if (videoBtn) {
    videoBtn.forEach((videoBtn) => {
      videoBtn.addEventListener('click', () => {
        const container = document.querySelectorAll('.video__container');
        container.forEach((el) => {
          const iframe = el.querySelector('.video__iframe');
          if (iframe) {
            el.querySelector('.video__content').innerHTML = "";
            el.querySelector('.video__bg').classList.remove('video__bg--hidden');
            el.querySelector('.video__play-btn').classList.remove('video__play-btn--hidden');
          }
        });

        const videoContainer = videoBtn.closest('.video__container');
        const videoBg = videoContainer.querySelector('.video__bg')
        const videoContent = videoContainer.querySelector('.video__content')
        const src = videoContent.dataset.src;

        videoBtn.classList.add('video__play-btn--hidden');
        videoBg.classList.add('video__bg--hidden');
        videoContent.insertAdjacentHTML('afterbegin', '<iframe class="video__iframe" src="' + src + '" frameborder="0" allow="autoplay;" allowfullscreen></iframe>');
      });
    });
  };
}

video();
