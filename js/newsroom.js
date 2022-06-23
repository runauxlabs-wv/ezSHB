var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 7
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 80
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
    autoplay : true,
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
  },
  });