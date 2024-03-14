// centers
const centers = () => {
  const centersBlock = Array.from(document.querySelectorAll('.centers__block'));
  document.querySelectorAll('.centers__location-list-inner').forEach(el => {
    new SimpleBar(el, { autoHide: false });
    styleScroll(el);
  });

  const insertIframe = (map, src) => {
    map.insertAdjacentHTML('afterbegin', '<iframe class="centers__map-iframe" style="pointer-events: none;" src="' + src + '" allowfullscreen></iframe>');
    map.addEventListener('click', () => {
      map.querySelector('.centers__map-iframe').style.pointerEvents = 'all';
    });
    document.addEventListener('click', (e) => {
      const target = e.target;
      const itsMap = target == map || map.contains(target);
      if (!itsMap) {
        map.querySelector('.centers__map-iframe').style.pointerEvents = 'none';
      }
    });
  }

  if (centersBlock) {
    centersBlock.forEach(centersBlock => {
      const btns = Array.from(centersBlock.querySelectorAll('.centers__location-btn'));

      if (btns) {
        const btnActive = centersBlock.querySelector('.centers__location-btn--active');
        const src = `${btnActive.dataset.src}`;
        const block = btnActive.closest('.centers__block');
        const map = block.querySelector('.centers__map');
        insertIframe(map, src);
        const aboutContent = block.querySelector('.centers__about-text--active');
        new SimpleBar(aboutContent, { autoHide: false });
        styleScroll(aboutContent);

        btns.forEach(el => {
          el.addEventListener('click', (e) => {
            const block = e.target.closest('.centers__block');
            const map = block.querySelector('.centers__map');
            const btn = e.target.closest('.centers__location-btn');
            const title = block.querySelector(`[data-loc-title = "${btn.dataset.loc}"]`);
            const text = block.querySelector(`[data-loc-text = "${btn.dataset.loc}"]`);
            const item = e.target.closest('.centers__location-item');

            if (!btn.classList.contains('centers__location-btn--active')) {
              block.querySelector('.centers__location-btn--active').classList.remove('centers__location-btn--active');
              block.querySelector('.centers__location-item--active').classList.remove('centers__location-item--active');
              if (block.querySelector('.centers__about-title--active')) {
                block.querySelector('.centers__about-title--active').classList.remove('centers__about-title--active');
              }
              block.querySelector('.centers__about-text--active').classList.remove('centers__about-text--active');
              map.innerHTML = "";
              btn.classList.add('centers__location-btn--active');
              if (title) {
                title.classList.add('centers__about-title--active');
              }
              text.classList.add('centers__about-text--active');
              item.classList.add('centers__location-item--active');
              const src = `${btn.dataset.src}`;
              insertIframe(map, src);

              const aboutContent = block.querySelector('.centers__about-text--active');
              new SimpleBar(aboutContent, { autoHide: false });
              styleScroll(aboutContent);
            }
          });
        });
      }
    });
  }
}

centers();
