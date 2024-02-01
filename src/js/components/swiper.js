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

new Swiper('.history__middle-swiper', {
  keyboard: true,
  navigation: {
    nextEl: '.history__middle-swiper-button-next',
    prevEl: '.history__middle-swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    481: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    721: {
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
    1101: {
      slidesPerView: 'auto',
      spaceBetween: 26,
    },
    1471: {
      slidesPerView: 4,
      spaceBetween: 26,
    }
  }
});

new Swiper('.moskvarium__swiper', {
  keyboard: true,
  navigation: {
    nextEl: '.moskvarium__swiper-button-next',
    prevEl: '.moskvarium__swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    481: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    721: {
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
    1101: {
      slidesPerView: 'auto',
      spaceBetween: 26,
    },
    1471: {
      slidesPerView: 4,
      spaceBetween: 26,
    }
  }
});
