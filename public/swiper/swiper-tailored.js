
export function swiperTailored() {
  const element = document.querySelector(".swiper-tailored");
  if (!element) return;


  var swiper_base = new Swiper(".swiper-tailored", {
    slidesPerView: 1,
    speed: 700,
    spaceBetween: 40,
    centeredSlides: false,
    loop: false,
    navigation: {
      nextEl: ".tailored-next-arrow",
      prevEl: ".tailored-prev-arrow",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      0: {
        //slidesPerView: 1.8,
        spaceBetween: 16,
        slidesPerView: 1,
      },
      1024: {
        //slidesPerView: 2.8,
        spaceBetween: 40,
      },
      1400: {
        //slidesPerView: 3.5,
        spaceBetween: 40,
      },
    },
    on: {
      init: function () {
        document.querySelector("[swiper-tailored-total-number]").textContent =
          this.slides.length;
        document.querySelector("[swiper-tailored-current-number]").textContent =
          this.activeIndex + 1;

        // Set initial opacity on load
        setSlideOpacity(this);
      },
      slideChange: function () {
        document.querySelector("[swiper-tailored-current-number]").textContent =
          this.activeIndex + 1;
        setSlideOpacity(this);
      },
    },
  });


  function setSlideOpacity(swiper) {
    swiper.slides.forEach((slide, index) => {
      slide.style.opacity = index === swiper.activeIndex ? "1" : "0.5";
    });
  }
}
