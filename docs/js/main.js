"use strict";var burger=function(){var e=document.querySelector(".burger"),t=document.querySelector(".header__menu"),a=document.querySelectorAll(".header__nav-link");e.addEventListener("click",(function(){e.classList.toggle("burger--active"),t.classList.toggle("header__menu--active"),t.classList.contains("header__menu--active")?(e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label","Закрыть меню"),document.body.classList.add("stop-scroll")):(e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Открыть меню"),document.body.classList.remove("stop-scroll"))})),document.addEventListener("click",(function(a){var o=a.target,r=o==t||t.contains(o),s=o==e||e.contains(o);r||s||!t.classList.contains("header__menu--active")||(e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Открыть меню"),e.classList.remove("burger--active"),t.classList.remove("header__menu--active"),document.body.classList.remove("stop-scroll"))})),a.forEach((function(a){a.addEventListener("click",(function(){e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Открыть меню"),e.classList.remove("burger--active"),t.classList.remove("header__menu--active"),document.body.classList.remove("stop-scroll")}))}))};burger();var mySwiper,slider=document.querySelector(".mobile-swiper"),mediaQuery=window.matchMedia("(max-width: 1100px)");function mobileSlider(e){e&&"false"==slider.dataset.mobile?(mySwiper=new Swiper(slider,{slidesPerView:"auto",keyboard:!0,spaceBetween:14}),slider.dataset.mobile="true"):(slider.dataset.mobile="false",slider.classList.contains("swiper-initialized")&&mySwiper.destroy())}slider&&(mobileSlider(mediaQuery.matches),mediaQuery.addEventListener("change",(function(e){mobileSlider(e.matches)})));var modal=function(){var e=Array.from(document.querySelectorAll("[data-modal]")),t=Array.from(document.querySelectorAll(".modal")),a=document.querySelectorAll(".modal__form-input"),o=document.body;function r(e){t.forEach((function(e){e.classList.contains("modal--open")&&e.classList.remove("modal--open")}));var a=e.target.dataset.modal||e.target.closest("[data-modal]").dataset.modal,r=document.getElementById("".concat(a)),s=r.querySelector(".modal__close-btn"),i=r.querySelector(".focus");setTimeout((function(){i.focus()}),500),r.querySelectorAll("button").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault()}))})),s.classList.remove("modal__close-btn--active"),r.classList.add("modal--open"),o.classList.add("stop-scroll")}function s(e){var t,r=e.target,s=r.closest(".modal"),i=s.querySelector(".modal__body"),c=s.querySelector(".modal__close-btn"),n=s.querySelector(".btn-js"),l=r==i||i.contains(r),d=r==c||c.contains(r);n&&(t=r==n||n.contains(r)),(d&&s.classList.contains("modal--open")||!l&&s.classList.contains("modal--open")||t&&s.classList.contains("modal--open"))&&(c.classList.add("modal__close-btn--active"),s.classList.remove("modal--open"),o.classList.remove("stop-scroll"),a.forEach((function(e){e.value=""})))}e.forEach((function(e){e.addEventListener("click",r)})),t.forEach((function(e){e.addEventListener("click",s)}))};modal(),new Swiper(".reviews__swiper",{slidesPerView:"auto",keyboard:!0,navigation:{nextEl:".reviews__swiper-button-next",prevEl:".reviews__swiper-button-prev"},breakpoints:{320:{spaceBetween:24},1101:{spaceBetween:32},1471:{spaceBetween:40}}}),new Swiper(".blog__swiper",{slidesPerView:"auto",keyboard:!0,navigation:{nextEl:".blog__swiper-button-next",prevEl:".blog__swiper-button-prev"},breakpoints:{320:{spaceBetween:30},1101:{spaceBetween:36},1471:{spaceBetween:56}}});var tabs=function(){var e,t,a=Array.from(document.querySelectorAll(".tabs"));a.forEach((function(a){a&&a.addEventListener("click",(function(o){var r=o.target.dataset.tab;if(r){var s=Array.from(a.querySelectorAll(".tabs__btn")),i=o.target.closest(".tabs-block"),c=Array.from(i.querySelectorAll(".tab"));e="tours__btn--active",t="tours__tab--active",s.forEach((function(t){t.classList.remove(e)})),a.querySelector("[data-tab='".concat(r,"']")).classList.add(e),c.forEach((function(e){e.classList.remove(t)})),document.getElementById("".concat(r)).classList.add(t)}}))}))};tabs();var video=function(){var e=document.querySelectorAll(".video__play-btn");e&&e.forEach((function(e){e.addEventListener("click",(function(){document.querySelectorAll(".video__container").forEach((function(e){e.querySelector(".video__iframe")&&(e.querySelector(".video__content").innerHTML="",e.querySelector(".video__bg").classList.remove("video__bg--hidden"),e.querySelector(".video__play-btn").classList.remove("video__play-btn--hidden"))}));var t=e.closest(".video__container"),a=t.querySelector(".video__bg"),o=t.querySelector(".video__content"),r=o.dataset.src;e.classList.add("video__play-btn--hidden"),a.classList.add("video__bg--hidden"),o.insertAdjacentHTML("afterbegin",'<iframe class="video__iframe" src="'+r+'" frameborder="0" allow="autoplay;" allowfullscreen></iframe>')}))}))};video();