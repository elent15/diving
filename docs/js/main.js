"use strict";var accordion=function(){document.querySelectorAll(".accordion").forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget,r=t.querySelector(".accordion__trigger"),a=t.querySelector(".accordion__content");t.classList.contains("accordion")&&t.classList.toggle("accordion--active"),t.classList.contains("accordion--active")?(r.setAttribute("aria-expanded",!0),a.setAttribute("aria-hidden",!1),a.style.maxHeight=a.scrollHeight+"px"):(r.setAttribute("aria-expanded",!1),a.setAttribute("aria-hidden",!0),a.style.maxHeight=null)}))}))};accordion();var burger=function(){var e=document.querySelector(".burger"),t=document.querySelector(".header__menu"),r=document.querySelectorAll(".header__nav-link");e.addEventListener("click",(function(){e.classList.toggle("burger--active"),t.classList.toggle("header__menu--active"),t.classList.contains("header__menu--active")?(e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label","Закрыть меню"),document.body.classList.add("stop-scroll")):(e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Открыть меню"),document.body.classList.remove("stop-scroll"))})),document.addEventListener("click",(function(r){var a=r.target,c=a==t||t.contains(a),o=a==e||e.contains(a);c||o||!t.classList.contains("header__menu--active")||(e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Открыть меню"),e.classList.remove("burger--active"),t.classList.remove("header__menu--active"),document.body.classList.remove("stop-scroll"))})),r.forEach((function(r){r.addEventListener("click",(function(){e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Открыть меню"),e.classList.remove("burger--active"),t.classList.remove("header__menu--active"),document.body.classList.remove("stop-scroll")}))}))};burger();var centers=function(){var e=Array.from(document.querySelectorAll(".centers__block"));document.querySelectorAll(".centers__location-list-inner").forEach((function(e){new SimpleBar(e,{autoHide:!1}),styleScroll(e)}));var t=function(e,t){e.insertAdjacentHTML("afterbegin",'<iframe class="centers__map-iframe" style="pointer-events: none;" src="'+t+'" allowfullscreen></iframe>'),e.addEventListener("click",(function(){e.querySelector(".centers__map-iframe").style.pointerEvents="all"})),document.addEventListener("click",(function(t){var r=t.target;r==e||e.contains(r)||(e.querySelector(".centers__map-iframe").style.pointerEvents="none")}))};e&&e.forEach((function(e){var r=Array.from(e.querySelectorAll(".centers__location-btn"));if(r){var a=e.querySelector(".centers__location-btn--active"),c="".concat(a.dataset.src),o=a.closest(".centers__block"),i=o.querySelector(".centers__map");t(i,c);var n=o.querySelector(".centers__about-text--active");new SimpleBar(n,{autoHide:!1}),styleScroll(n),r.forEach((function(e){e.addEventListener("click",(function(e){var r=e.target.closest(".centers__block"),a=r.querySelector(".centers__map"),c=e.target.closest(".centers__location-btn"),o=r.querySelector('[data-loc-title = "'.concat(c.dataset.loc,'"]')),i=r.querySelector('[data-loc-text = "'.concat(c.dataset.loc,'"]')),n=e.target.closest(".centers__location-item");if(!c.classList.contains("centers__location-btn--active")){r.querySelector(".centers__location-btn--active").classList.remove("centers__location-btn--active"),r.querySelector(".centers__location-item--active").classList.remove("centers__location-item--active"),r.querySelector(".centers__about-title--active")&&r.querySelector(".centers__about-title--active").classList.remove("centers__about-title--active"),r.querySelector(".centers__about-text--active").classList.remove("centers__about-text--active"),a.innerHTML="",c.classList.add("centers__location-btn--active"),o&&o.classList.add("centers__about-title--active"),i.classList.add("centers__about-text--active"),n.classList.add("centers__location-item--active");var s="".concat(c.dataset.src);t(a,s);var l=r.querySelector(".centers__about-text--active");new SimpleBar(l,{autoHide:!1}),styleScroll(l)}}))}))}}))};centers();var calcValues=function(e,t){var r=t.textContent.slice(0,-1).replace(/\s/g,"");return r-r*e[1].textContent.slice(0,-1).trim()/100},showValues=function(e,t,r){e[0].textContent=t.textContent,e[2].textContent=r.toLocaleString()+" ₽"},cost=function(){var e=Array.from(document.querySelectorAll(".form-block__nominal-btn"));if(e.length){var t=document.querySelector(".form-block__nominal-btn--active"),r=Array.from(document.querySelectorAll(".form-block__item-value"));t.classList.remove("form-block__nominal-btn--active"),e[0].classList.add("form-block__nominal-btn--active");var a=calcValues(r,e[0]);showValues(r,e[0],a),e.forEach((function(t){t.addEventListener("click",(function(){t.classList.contains("form-block__nominal-btn--active")||(e.forEach((function(e){e.classList.remove("form-block__nominal-btn--active")})),t.classList.add("form-block__nominal-btn--active"),a=calcValues(r,t),showValues(r,t,a))}))}))}};cost();var calculateSum=function(e,t){var r=t.querySelector(".gift-card__price").textContent,a=parseInt(r.replace(/[^\d]/g,""));return{price:a,amount:a-a*e[1].textContent.slice(0,-1).trim()/100}},showSum=function(e,t,r){e[0].textContent=t.toLocaleString()+" ₽",e[2].textContent=r.toLocaleString()+" ₽"},giftCards=function(){var e=Array.from(document.querySelectorAll(".gift-card")),t=Array.from(document.querySelectorAll(".form-block__item-value"));if(e.length){if(e[1].querySelector(".gift-card__price")){var r=calculateSum(t,e[1]),a=r.price,c=r.amount;showSum(t,a,c)}e.forEach((function(r){r.addEventListener("click",(function(){if(!r.classList.contains("gift-card--active")&&(e.forEach((function(e){e.classList.remove("gift-card--active")})),r.classList.add("gift-card--active"),r.querySelector(".gift-card__price"))){var a=calculateSum(t,r),c=a.price,o=a.amount;showSum(t,c,o)}}))}))}};giftCards();var mySwiper,slider=document.querySelector(".mobile-swiper"),mediaQuery=window.matchMedia("(max-width: 1100px)");function mobileSlider(e){e&&"false"==slider.dataset.mobile?(mySwiper=new Swiper(slider,{slidesPerView:"auto",keyboard:!0,spaceBetween:14}),slider.dataset.mobile="true"):(slider.dataset.mobile="false",slider.classList.contains("swiper-initialized")&&mySwiper.destroy())}slider&&(mobileSlider(mediaQuery.matches),mediaQuery.addEventListener("change",(function(e){mobileSlider(e.matches)})));var modalBook=function(){var e=Array.from(document.querySelectorAll("[data-modal='modal-book']")),t=document.getElementById("modal-book");if(e&&t){var r=t.querySelector(".modal-book__title");e.forEach((function(e){e.addEventListener("click",(function(){e.classList.contains("moskvarium")?r.innerText="Заявка на погружение в «Москвариум»":e.classList.contains("crocus-city")&&(r.innerText="Заявка на погружение в «Крокус Сити Океанариум»")}))}))}};function modalCertificate(){var e=document.querySelector(".modal-certificate");if(e){var t=e.querySelector(".gift-card--active"),r=Array.from(e.querySelectorAll(".gift-card"))[1];t.classList.remove("gift-card--active"),r.classList.add("gift-card--active")}}modalBook();var modal=function(){var e=Array.from(document.querySelectorAll("[data-modal]")),t=Array.from(document.querySelectorAll(".modal")),r=document.body;function a(e){t.forEach((function(e){e.classList.contains("modal--open")&&e.classList.remove("modal--open")}));var a=e.target.dataset.modal||e.target.closest("[data-modal]").dataset.modal,c=document.getElementById("".concat(a)),o=c.querySelector(".modal__close-btn"),i=c.querySelector(".focus");setTimeout((function(){i.focus()}),500),o.classList.remove("modal__close-btn--active"),c.classList.add("modal--open"),r.classList.add("stop-scroll")}function c(e){var t,a=e.target,c=a.closest(".modal"),o=c.querySelector(".modal__body"),i=c.querySelector(".modal__close-btn"),n=c.querySelector(".btn-js"),s=c.querySelector("form"),l=a==o||o.contains(a),d=a==i||i.contains(a);n&&(t=a==n||n.contains(a)),(d&&c.classList.contains("modal--open")||!l&&c.classList.contains("modal--open")||t&&c.classList.contains("modal--open"))&&(i.classList.add("modal__close-btn--active"),c.classList.remove("modal--open"),r.classList.remove("stop-scroll"),s.reset(),modalCertificate())}e.forEach((function(e){e.addEventListener("click",a)})),t.forEach((function(e){e.addEventListener("click",c)}))};modal();var select=function(){var e,t,r,a=document.querySelectorAll(".select__input"),c=function(t){var r=t.target.innerText;e.querySelector(".select__current").innerText=r,e.classList.remove("select--open"),e.querySelector(".select__dropdown").classList.remove("select--open")};a.forEach((function(a){a.addEventListener("click",(function(){e=a.parentNode,e.id,t=e.querySelector(".select__dropdown"),r=t.querySelectorAll(".select__item"),document.querySelectorAll(".select").forEach((function(t){t!==e&&t.classList.contains("select--open")&&(t.classList.remove("select--open"),t.querySelector(".select__dropdown").classList.remove("select--open"))})),e.classList.toggle("select--open"),t.classList.toggle("select--open"),r.forEach((function(e){e.addEventListener("click",c),e.addEventListener("keyup",(function(e){"Enter"===e.code&&c(e)}))}))}))})),document.addEventListener("click",(function(r){if(document.querySelectorAll(".select--open").length){var a=r.target;!(a==e||e.contains(a))&&e.classList.contains("select--open")&&(e.classList.remove("select--open"),t.classList.remove("select--open"))}}))};function outlineReset(){document.querySelectorAll(".simplebar-content-wrapper").forEach((function(e){return e.setAttribute("tabindex","-1")}))}function styleScroll(e){var t=e.querySelector(".simplebar-vertical"),r=e.querySelector(".simplebar-content-wrapper");"visible"==t.style.visibility?r.style.paddingRight="23px":"hidden"==t.style.visibility&&(r.style.paddingRight="0px")}function scroll(){var e=Array.from(document.querySelectorAll(".centers__location-list-inner")),t=Array.from(document.querySelectorAll(".centers__about-text--active"));e&&e.forEach((function(e){styleScroll(e)})),t&&t.forEach((function(e){styleScroll(e)}))}select(),setTimeout(outlineReset,500),window.addEventListener("resize",(function(){setTimeout(scroll,500)})),new Swiper(".reviews__swiper",{slidesPerView:"auto",keyboard:!0,navigation:{nextEl:".reviews__swiper-button-next",prevEl:".reviews__swiper-button-prev"},breakpoints:{320:{spaceBetween:24},1101:{spaceBetween:32},1471:{spaceBetween:40}}}),new Swiper(".blog__swiper",{slidesPerView:"auto",keyboard:!0,navigation:{nextEl:".blog__swiper-button-next",prevEl:".blog__swiper-button-prev"},breakpoints:{320:{spaceBetween:30},1101:{spaceBetween:36},1471:{spaceBetween:56}}}),new Swiper(".history__middle-swiper",{keyboard:!0,navigation:{nextEl:".history__middle-swiper-button-next",prevEl:".history__middle-swiper-button-prev"},breakpoints:{320:{slidesPerView:"auto",spaceBetween:16},481:{slidesPerView:"auto",spaceBetween:20},721:{slidesPerView:"auto",spaceBetween:24},1101:{slidesPerView:"auto",spaceBetween:26},1471:{slidesPerView:4,spaceBetween:26}}}),new Swiper(".moskvarium__swiper",{keyboard:!0,navigation:{nextEl:".moskvarium__swiper-button-next",prevEl:".moskvarium__swiper-button-prev"},breakpoints:{320:{slidesPerView:"auto",spaceBetween:16},481:{slidesPerView:"auto",spaceBetween:20},721:{slidesPerView:"auto",spaceBetween:24},1101:{slidesPerView:"auto",spaceBetween:26},1471:{slidesPerView:4,spaceBetween:26}}});var tabs=function(){var e=Array.from(document.querySelectorAll(".tabs"));e.forEach((function(e){e&&e.addEventListener("click",(function(t){setTimeout(scroll,500);var r=t.target.dataset.tab;if(r){var a=Array.from(e.querySelectorAll(".tabs__btn")),c=t.target.closest(".tabs-block"),o=Array.from(c.children);a.forEach((function(e){e.classList.remove("tabs__btn--active")})),e.querySelector("[data-tab='".concat(r,"']")).classList.add("tabs__btn--active"),o.forEach((function(e){e.classList.remove("tab--active")})),document.getElementById("".concat(r)).classList.add("tab--active")}}))}))};tabs();var videoBg=function(){var e=Array.from(document.querySelectorAll(".oceanariums-hero__card"));e&&e.forEach((function(t){var r=document.querySelector(".oceanariums-hero__video");r.addEventListener("ended",(function(e){e.target.load(),e.target.pause()})),t.addEventListener("click",(function(){if(t.classList.contains("oceanariums-hero__card--active")){var a=document.querySelector(".oceanariums-hero__video");a.paused?a.play():a.pause()}else e.forEach((function(e){e.classList.remove("oceanariums-hero__card--active")})),t.classList.add("oceanariums-hero__card--active"),"./resources/oceanariums-1.mp4"===r.getAttribute("src")?(r.setAttribute("src","./resources/oceanariums-2.mp4"),r.setAttribute("poster","./images/oceanariums-hero-bg-2.webp")):(r.setAttribute("src","./resources/oceanariums-1.mp4"),r.setAttribute("poster","./images/oceanariums-hero-bg-1.webp"))}))}))};videoBg();var video=function(){var e=document.querySelectorAll(".video__play-btn");e&&e.forEach((function(e){e.addEventListener("click",(function(){document.querySelectorAll(".video__container").forEach((function(e){e.querySelector(".video__iframe")&&(e.querySelector(".video__content").innerHTML="",e.querySelector(".video__bg").classList.remove("video__bg--hidden"),e.querySelector(".video__play-btn").classList.remove("video__play-btn--hidden"))}));var t=e.closest(".video__container"),r=t.querySelector(".video__bg"),a=t.querySelector(".video__content"),c=a.dataset.src;e.classList.add("video__play-btn--hidden"),r.classList.add("video__bg--hidden"),a.insertAdjacentHTML("afterbegin",'<iframe class="video__iframe" src="'+c+'" frameborder="0" allow="autoplay;" allowfullscreen></iframe>')}))}))};video();