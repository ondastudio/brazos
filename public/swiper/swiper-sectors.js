
export function swiperSectors() {
  const element = document.querySelector(".swiper-sector");
  if (!element) return;


  var swiper = new Swiper(".swiper-sector", {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 700,
    freeMode: true,
    grabCursor: false, // ✅ Disable grab cursor
    allowTouchMove: false, // ✅ Disable touch gestures
    simulateTouch: false, // ✅ Disable simulated touch interactions
    navigation: {
      nextEl: ".sectors-next-arrow",
      prevEl: ".sectors-prev-arrow",
    },
    breakpoints: {
      0: {
        spaceBetween: 16,
        slidesPerView: 1,
      },
      999: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: 2,
      hide: false,
    },
  });
}
