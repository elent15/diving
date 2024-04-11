// slider
new Swiper('.reviews__swiper', {
  slidesPerView: 'auto',
  keyboard: true,
  navigation: {
    nextEl: '.reviews-swiper-button-next',
    prevEl: '.reviews-swiper-button-prev',
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
    nextEl: '.blog-swiper-button-next',
    prevEl: '.blog-swiper-button-prev',
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

new Swiper('.history__swiper', {
  keyboard: true,
  navigation: {
    nextEl: '.history-swiper-button-next',
    prevEl: '.history-swiper-button-prev',
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
    nextEl: '.moskvarium-swiper-button-next',
    prevEl: '.moskvarium-swiper-button-prev',
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

const swiper = new Swiper('.specialist-min__swiper', {
  keyboard: true,
  navigation: {
    nextEl: '.specialist-min-swiper-button-next',
    prevEl: '.specialist-min-swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 12,
    },
    481: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    1471: {
      slidesPerView: 5,
      spaceBetween: 18,
    }
  }
});

new Swiper(".specialist__swiper", {
  keyboard: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

const centerHeroSwiper = new Swiper('.center-hero-min__swiper', {
  keyboard: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
});

new Swiper(".center-hero__swiper", {
  keyboard: true,
  spaceBetween: 0,
  thumbs: {
    swiper: centerHeroSwiper,
  },
  navigation: {
    nextEl: '.center-hero-swiper-button-next',
    prevEl: '.center-hero-swiper-button-prev',
  },
});

const tripHeroSwiper = new Swiper('.trip-hero-min__swiper', {
  keyboard: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
});

new Swiper(".trip-hero__swiper", {
  keyboard: true,
  spaceBetween: 0,
  thumbs: {
    swiper: tripHeroSwiper,
  },
  navigation: {
    nextEl: '.trip-hero-swiper-button-next',
    prevEl: '.trip-hero-swiper-button-prev',
  },
});
