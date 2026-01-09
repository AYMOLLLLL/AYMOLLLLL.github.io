const thumbsSwiper = new Swiper(".thumbs-slider", {
  spaсeBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

const mainSwiper = new Swiper(".main-slider", {
  loop: true,
  speed: 500,
  effect: "slide",
  grabCursor: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  thumbs: {
    swiper: thumbsSwiper,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 1,
    },

    1024: {
      slidesPerView: 1,
    },
  },
});
