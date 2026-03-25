export function swiperHighlights() {
  const element = document.querySelector(
    ".section_highlights"
  );

  if (!element) return;


  var swiper_base = new Swiper(".swiper-highlights", {
    slidesPerView: 2,
    speed: 700,
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-highlights .swiper-button-next",
      prevEl: ".swiper-highlights .swiper-button-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      0: {
        spaceBetween: 16,
        slidesPerView: 1,
      },
      1024: {
        spaceBetween: 40,
      },
    },
    on: {
      init: function () {
        const realTotal = this.slides.filter(
          (s) => !s.classList.contains("swiper-slide-duplicate")
        ).length;
        document.querySelector("[swiper-total-number]").textContent = realTotal;
        document.querySelector("[swiper-current-number]").textContent =
          this.realIndex + 1;
      },
      slideChange: function () {
        document.querySelector("[swiper-current-number]").textContent =
          this.realIndex + 1;
      },
    },
  });
}
