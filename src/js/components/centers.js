const centers = () => {
  const centersBlock = Array.from(document.querySelectorAll('.diving-centers__block'));

  const insertIframe = (map, src) => {
    map.insertAdjacentHTML('afterbegin', '<iframe class="diving-centers__map-iframe" style="pointer-events: none;" src="' + src + '" frameborder="0";" allowfullscreen></iframe>');
    map.addEventListener('click', () => {
      map.querySelector('.diving-centers__map-iframe').style.pointerEvents = 'all';
    });
    document.addEventListener('click', (e) => {
      const target = e.target;
      const itsMap = target == map || map.contains(target);
      if (!itsMap) {
        map.querySelector('.diving-centers__map-iframe').style.pointerEvents = 'none';
      }
    });
  }

  if (centersBlock) {
    centersBlock.forEach(centersBlock => {
      const btns = Array.from(centersBlock.querySelectorAll('.diving-centers__location-btn'));

      if (btns) {
        btns.forEach(el => {

          if (el.dataset.loc == 'location-2') {
            const block = el.closest('.diving-centers__block');
            const map = block.querySelector('.diving-centers__map');
            const src = `${el.dataset.src}`;
            insertIframe(map, src);
          }

          el.addEventListener('click', (e) => {
            const block = e.target.closest('.diving-centers__block');
            const map = block.querySelector('.diving-centers__map');
            const btn = e.target.closest('.diving-centers__location-btn');
            const title = block.querySelector(`[data-loc-title = "${btn.dataset.loc}"]`);
            const text = block.querySelector(`[data-loc-text = "${btn.dataset.loc}"]`);
            const item = e.target.closest('.diving-centers__location-item');

            if (!btn.classList.contains('diving-centers__location-btn--active')) {
              block.querySelector('.diving-centers__location-btn--active').classList.remove('diving-centers__location-btn--active');
              block.querySelector('.diving-centers__location-item--active').classList.remove('diving-centers__location-item--active');
              block.querySelector('.diving-centers__about-title--active').classList.remove('diving-centers__about-title--active');
              block.querySelector('.diving-centers__about-text--active').classList.remove('diving-centers__about-text--active');
              map.innerHTML = "";
              btn.classList.add('diving-centers__location-btn--active');
              title.classList.add('diving-centers__about-title--active');
              text.classList.add('diving-centers__about-text--active');
              item.classList.add('diving-centers__location-item--active');
              const src = `${btn.dataset.src}`;
              insertIframe(map, src);
            }
          });
        });
      }
    });
  }
}

centers();
