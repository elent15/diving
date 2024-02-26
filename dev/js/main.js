// accordion
const accordion = () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
    accordion.addEventListener('click', (el) => {
      const self = el.currentTarget;
      const trigger = self.querySelector('.accordion__trigger');
      const content = self.querySelector('.accordion__content');

      if (self.classList.contains('accordion')) {
        self.classList.toggle('accordion--active');
      }

      if (self.classList.contains('accordion--active')) {
        trigger.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        trigger.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
}

accordion();

// burger-menu
const burger = () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu');
  const menuItems = document.querySelectorAll('.header__nav-link');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__menu--active');

    if (menu.classList.contains('header__menu--active')) {
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Закрыть меню');
      document.body.classList.add('stop-scroll');
    } else {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
      document.body.classList.remove('stop-scroll');
    }
  });

  document.addEventListener('click', (el) => {
    const target = el.target;
    const itsMenu = target == menu || menu.contains(target);
    const itsBurger = target == burger || burger.contains(target);

    if (!itsMenu && !itsBurger && menu.classList.contains('header__menu--active')) {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('header__menu--active');
      document.body.classList.remove('stop-scroll');
    }
  });

  menuItems.forEach(el => {
    el.addEventListener('click', () => {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('header__menu--active');
      document.body.classList.remove('stop-scroll');
    });
  });
}

burger();

// centers
const centers = () => {
  const centersBlock = Array.from(document.querySelectorAll('.diving-centers__block'));
  document.querySelectorAll('.diving-centers__location-list-inner').forEach(el => {
    new SimpleBar(el, { autoHide: false });
    styleScroll(el);
  });

  const insertIframe = (map, src) => {
    map.insertAdjacentHTML('afterbegin', '<iframe class="diving-centers__map-iframe" style="pointer-events: none;" src="' + src + '" allowfullscreen></iframe>');
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
            const aboutContent = block.querySelector('.diving-centers__about-text--active');
            new SimpleBar(aboutContent, { autoHide: false });
            styleScroll(aboutContent);
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
              if (block.querySelector('.diving-centers__about-title--active')) {
                block.querySelector('.diving-centers__about-title--active').classList.remove('diving-centers__about-title--active');
              }
              block.querySelector('.diving-centers__about-text--active').classList.remove('diving-centers__about-text--active');
              map.innerHTML = "";
              btn.classList.add('diving-centers__location-btn--active');
              if (title) {
                title.classList.add('diving-centers__about-title--active');
              }
              text.classList.add('diving-centers__about-text--active');
              item.classList.add('diving-centers__location-item--active');
              const src = `${btn.dataset.src}`;
              insertIframe(map, src);

              const aboutContent = block.querySelector('.diving-centers__about-text--active');
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

// mobile-slider
const slider = document.querySelector('.mobile-swiper');
const mediaQuery = window.matchMedia('(max-width: 1100px)')
let mySwiper;

function mobileSlider(e) {
  if (e && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      slidesPerView: 'auto',
      keyboard: true,
      spaceBetween: 14
    });
    slider.dataset.mobile = 'true';
  } else {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  }
}

if (slider) {
  mobileSlider(mediaQuery.matches);

  mediaQuery.addEventListener('change', function (e) {
    mobileSlider(e.matches);
  })
}


const modalBook = () => {
  const modalBookBtns = Array.from(document.querySelectorAll(`[data-modal='modal-book']`));
  const modalBook = document.getElementById('modal-book');

  if (modalBookBtns && modalBook) {
    const modalTitle = modalBook.querySelector('.modal-book__title');

    modalBookBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('moskvarium')) {
          modalTitle.innerText = 'Заявка на погружение в «Москвариум»'
        } else if (btn.classList.contains('crocus-city')) {
          modalTitle.innerText = 'Заявка на погружение в «Крокус Сити Океанариум»'
        }
      });
    });
  }
}

modalBook();

const modalCertificate = () => {
  const btns = Array.from(document.querySelectorAll('.modal-certificate__card'));
  const nominalBtns = Array.from(document.querySelectorAll('.modal-certificate__nominal-btn'));

  if (btns) {
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!btn.classList.contains('modal-certificate__card--active')) {
          btns.forEach(btn => {
            btn.classList.remove('modal-certificate__card--active')
          });
          btn.classList.add('modal-certificate__card--active');
        }
      });
    });
  }

  if (nominalBtns) {
    nominalBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!btn.classList.contains('modal-certificate__nominal-btn--active')) {
          nominalBtns.forEach(btn => {
            btn.classList.remove('modal-certificate__nominal-btn--active')
          });
          btn.classList.add('modal-certificate__nominal-btn--active');

          const values = Array.from(document.querySelectorAll('.modal-certificate__item-value'));
          const price = btn.innerText.slice(0, -1).replace(/\s/g, '');
          const percent = values[1].innerText.slice(0, -1).trim();
          const amount = price - price * percent / 100;

          values[0].innerText = btn.innerText;
          values[2].innerText = amount.toLocaleString() + ' ₽';
        }
      });
    });
  }
}

modalCertificate();

// modal window
const modal = () => {
  const btns = Array.from(document.querySelectorAll(`[data-modal]`));
  const modals = Array.from(document.querySelectorAll('.modal'));
  const inputs = document.querySelectorAll('.modal__form-input');
  const body = document.body;

  function open(el) {
    modals.forEach(modal => {
      if (modal.classList.contains('modal--open'))
        modal.classList.remove('modal--open');
    });

    const modalData = el.target.dataset.modal || el.target.closest(`[data-modal]`).dataset.modal;
    const modal = document.getElementById(`${modalData}`);
    const modalClose = modal.querySelector('.modal__close-btn');
    const focus = modal.querySelector('.focus');

    setTimeout(() => {
      focus.focus();
    }, 500)

    modal.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', btn => {
        btn.preventDefault();
      });
    });

    modalClose.classList.remove('modal__close-btn--active');
    modal.classList.add('modal--open');
    body.classList.add('stop-scroll');
  }

  function close(el) {
    const target = el.target;
    const modal = target.closest('.modal');
    const modalBody = modal.querySelector('.modal__body');
    const modalClose = modal.querySelector('.modal__close-btn');
    const modalBtn = modal.querySelector('.btn-js');

    const itsModalBody = target == modalBody || modalBody.contains(target);
    const itsModalClose = target == modalClose || modalClose.contains(target);
    let itsModalBtn;
    if (modalBtn) {
      itsModalBtn = target == modalBtn || modalBtn.contains(target);
    }

    if ((itsModalClose && modal.classList.contains('modal--open')) ||
      (!itsModalBody && modal.classList.contains('modal--open')) ||
      (itsModalBtn && modal.classList.contains('modal--open'))) {
      modalClose.classList.add('modal__close-btn--active');
      modal.classList.remove('modal--open');
      body.classList.remove('stop-scroll');
      inputs.forEach(input => {
        input.value = '';
      });
    }
  }

  btns.forEach(btn => {
    btn.addEventListener('click', open);
  });

  modals.forEach(modal => {
    modal.addEventListener('click', close);
  });
}

modal();

// селект
const select = () => {
  const selectInput = document.querySelectorAll('.select__input');

  let select,
    selectDropdown,
    selectItems,
    id;

  const selectChoose = (item) => {
    const text = item.target.innerText;
    const currentText = select.querySelector('.select__current');

    currentText.innerText = text;
    select.classList.remove('select--open');
    select.querySelector('.select__dropdown').classList.remove('select--open');
  }

  selectInput.forEach(input => {
    input.addEventListener('click', () => {
      select = input.parentNode;
      id = select.id;
      selectDropdown = select.querySelector('.select__dropdown');
      selectItems = selectDropdown.querySelectorAll('.select__item');

      document.querySelectorAll('.select').forEach((el) => {
        if (el !== select && el.classList.contains('select--open')) {
          el.classList.remove('select--open');
          el.querySelector('.select__dropdown').classList.remove('select--open');
        }
      });

      select.classList.toggle('select--open');
      selectDropdown.classList.toggle('select--open');

      selectItems.forEach((item) => {
        item.addEventListener('click', selectChoose);
        item.addEventListener('keyup', (el) => {
          if (el.code === 'Enter') {
            selectChoose(el);
          }
        });
      });
    });
  });

  document.addEventListener('click', (el) => {
    const selectOpen = document.querySelectorAll('.select--open');

    if (selectOpen.length) {
      const target = el.target;
      const itsSelect = target == select || select.contains(target);

      if (!itsSelect && select.classList.contains('select--open')) {
        select.classList.remove('select--open');
        selectDropdown.classList.remove('select--open');
      }
    }
  });
}

select();

// scroll-style
function outlineReset() {
  const wrapper = document.querySelectorAll('.simplebar-content-wrapper');
  wrapper.forEach(wrapper => wrapper.setAttribute('tabindex', '-1'));
}

setTimeout(outlineReset, 500);

function styleScroll(el) {
  const simplebar = el.querySelector('.simplebar-vertical');
  const wrapper = el.querySelector('.simplebar-content-wrapper');

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

// tabs
const tabs = () => {
  const tabs = Array.from(document.querySelectorAll('.tabs'));

  tabs.forEach(tabs => {
    if (tabs) {
      tabs.addEventListener('click', (e) => {
        setTimeout(scroll, 500);
        const tabsData = e.target.dataset.tab;

        if (tabsData) {
          const tabsBtn = Array.from(tabs.querySelectorAll('.tabs__btn'));
          const parent = e.target.closest('.tabs-block');
          const tabsContent = Array.from(parent.children);

          tabsBtn.forEach(btn => {
            btn.classList.remove('tabs__btn--active');
          });

          tabs.querySelector(`[data-tab='${tabsData}']`).classList.add('tabs__btn--active');

          tabsContent.forEach(tab => {
            tab.classList.remove('tab--active');
          });

          document.getElementById(`${tabsData}`).classList.add('tab--active');
        }
      });
    }
  });

}

tabs();

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
            heroVideo.setAttribute('poster', './images/oceanariums-hero-bg-2.webp');
          } else {
            heroVideo.setAttribute('src', './resources/oceanariums-1.mp4');
            heroVideo.setAttribute('poster', './images/oceanariums-hero-bg-1.webp');
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
