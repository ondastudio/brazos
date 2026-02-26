
export function swiperMainFeatures() {
  console.log("swiperMainFeatures");


  const element = document.querySelector(".swiper-main-features");
  if (!element) return;



  // Initialize Swiper
  var swiper_base = new Swiper(".swiper-main-features", {
    slidesPerView: 1,
    speed: 700,
    spaceBetween: 40,
    loop: false, // Do not loop the slides
    navigation: {
      nextEl: ".features-next-arrow",
      prevEl: ".features-prev-arrow",
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
      1400: {
        spaceBetween: 40,
      },
    },
    on: {
      init: function () {
        // Set the total number of slides
        document.querySelector("[swiper-features-total-number]").textContent =
          this.slides.length;

        // Set the initial current slide number (account for zero-based index)
        document.querySelector("[swiper-features-current-number]").textContent =
          this.activeIndex + 1;
      },
      slideChange: function () {
        // Update the current slide number on slide change
        document.querySelector("[swiper-features-current-number]").textContent =
          this.activeIndex + 1;
      },
    },
  });
}
