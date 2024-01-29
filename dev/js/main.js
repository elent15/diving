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

// tabs
const tabs = () => {
  const tabs = Array.from(document.querySelectorAll('.tabs'));

  let btnActive;
  let tabActive;

  tabs.forEach(tabs => {
    if (tabs) {
      tabs.addEventListener('click', (e) => {
        const tabsData = e.target.dataset.tab;

        if (tabsData) {
          const tabsBtn = Array.from(tabs.querySelectorAll('.tabs__btn'));
          const parent = e.target.closest('.tabs-block');
          const tabsContent = Array.from(parent.querySelectorAll('.tab'));

          btnActive = 'tours__btn--active';
          tabActive = 'tours__tab--active';

          tabsBtn.forEach(btn => {
            btn.classList.remove(btnActive);
          });

          tabs.querySelector(`[data-tab='${tabsData}']`).classList.add(btnActive);

          tabsContent.forEach(tab => {
            tab.classList.remove(tabActive);
          });

          document.getElementById(`${tabsData}`).classList.add(tabActive);
        }
      });
    }
  });

}

tabs();

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
