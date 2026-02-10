import { searchActive } from './search.js';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

searchActive ();


const heroSwiper = document.querySelector('.hero-swiper');
const heroSlider = new Swiper(heroSwiper, {
 modules: [Navigation, Scrollbar, Pagination],
  loop: true,
  speed: 500,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  breakpoints: {
    1200: {
      slidesPerView: 1,
      spaceBetween: 150,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 150,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
    bulletClass: 'hero__toggle',
    bulletActiveClass: 'hero__toggle--active',
    dynamicBullets: false,
  },

  navigation: {
    nextEl: '.programs__button--next',
    prevEl: '.programs__button--prev',
    disabledClass: 'disabled',
  },
});

const ourWorksSwiper = document.querySelector('.our-works-swiper');
const ourWorksSlider = new Swiper(ourWorksSwiper, {
 modules: [Navigation, Scrollbar, Pagination],
  loop: true,
  speed: 500,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  breakpoints: {
    1200: {
      slidesPerView: 1,
      spaceBetween: 50,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 150,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
    bulletClass: 'hero__toggle',
    bulletActiveClass: 'hero__toggle--active',
    dynamicBullets: false,
  },

  navigation: {
    nextEl: '.programs__button--next',
    prevEl: '.programs__button--prev',
    disabledClass: 'disabled',
  },
});
