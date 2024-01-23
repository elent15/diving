// slider
new Swiper('.reviews__swiper', {
  slidesPerView: 'auto',
  keyboard: true,
  navigation: {
    nextEl: '.reviews__swiper-button-next',
    prevEl: '.reviews__swiper-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 24,
    },
    1101: {
      spaceBetween: 32,
    },
    1471: {
      spaceBetween: 40,
    }
  }
});

new Swiper('.blog__swiper', {
  slidesPerView: 'auto',
  keyboard: true,
  navigation: {
    nextEl: '.blog__swiper-button-next',
    prevEl: '.blog__swiper-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 30,
    },
    1101: {
      spaceBetween: 36,
    },
    1471: {
      spaceBetween: 56,
    }
  }
});
