// scroll-style
const scroll = () => {
  document.querySelectorAll('.diving-centers__location-list-inner').forEach(el => {
    new SimpleBar(el);
  });

  const listInner = Array.from(document.querySelectorAll('.diving-centers__location-list-inner'));

  if (listInner) {
    listInner.forEach(el => {
      const simplebar = el.querySelector('.simplebar-vertical');
      const wrapper = el.querySelector('.simplebar-content-wrapper');
      wrapper.setAttribute('tabindex', '-1');

      if (simplebar.style.visibility == 'visible') {
        wrapper.style.paddingRight = '23px';
      }
    });
  }
}

window.addEventListener('resize', scroll());
