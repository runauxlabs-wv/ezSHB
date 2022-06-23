var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });