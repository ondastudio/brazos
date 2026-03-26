export function swiperHighlights() {
  console.log("swiperHighlights imported");

  const swiperHighlight = document.querySelector(
    ".section_highlights"
  );

  if (!swiperHighlight) return;


  var swiper_base = new Swiper(swiperHighlight, {
    slidesPerView: 2,
    speed: 700,
    spaceBetween: 40,
    centeredSlides: true,
    loop: false,
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
        // Set the total number of slides
        document.querySelector(".section_highlights [swiper-total-number]").textContent =
          this.slides.length;

        // Set the initial current slide number (account for zero-based index)
        document.querySelector(".section_highlights[swiper-current-number]").textContent =
          this.activeIndex + 1;
      },
      slideChange: function () {
        // Update the current slide number on slide change
        document.querySelector(".section_highlights [swiper-current-number]").textContent =
          this.activeIndex + 1;
      },
    },
  });
  */
}
