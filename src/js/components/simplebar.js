// scroll-style
function styleScroll(el) {
  const simplebar = el.querySelector('.simplebar-vertical');
  const wrapper = el.querySelector('.simplebar-content-wrapper');
  wrapper.setAttribute('tabindex', '-1');

  if (simplebar.style.visibility == 'visible') {
    wrapper.style.paddingRight = '23px';
  } else if (simplebar.style.visibility == 'hidden') {
    wrapper.style.paddingRight = '0px';
  }
}

function scroll() {
  const listInner = Array.from(document.querySelectorAll('.diving-centers__location-list-inner'));
  const aboutContent = Array.from(document.querySelectorAll('.diving-centers__about-text--active'));

  if (listInner) {
    listInner.forEach(el => {
      styleScroll(el);
    });
  }

  if (aboutContent) {
    aboutContent.forEach(el => {
      styleScroll(el);
    });
  }
}

window.addEventListener('resize', () => {
  setTimeout(scroll, 500);
});
