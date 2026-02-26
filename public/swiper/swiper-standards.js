
export function swiperStandards() {
  const element = document.querySelector(".swiper-standards");
  if (!element) return;



  var swiper_base = new Swiper(".swiper-standards", {
    slidesPerView: 2,
    speed: 700,
    spaceBetween: 20,
    initialSlide: 1, // ✅ Start at slide index 2
    centeredSlides: true,
    loop: false,
    navigation: {
      nextEl: ".standards-next-arrow",
      prevEl: ".standards-prev-arrow",
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
      999: {
        spaceBetween: 20,
      },
    },
    on: {
      init: function () {
        // ✅ Get the correct total number of slides (ignoring duplicated slides)
        const realSlides = document.querySelectorAll(
          ".swiper-standards .swiper-slide:not(.swiper-slide-duplicate)"
        ).length;
        document.querySelector("[swiper-standards-total-number]").textContent =
          realSlides;

        // ✅ Show correct current slide number
        document.querySelector(
          "[swiper-standards-current-number]"
        ).textContent = this.realIndex + 1;

        // Set initial opacity on load
        setSlideOpacity(this);
      },
      slideChange: function () {
        // ✅ Update current slide number correctly
        document.querySelector(
          "[swiper-standards-current-number]"
        ).textContent = this.realIndex + 1;

        setSlideOpacity(this);
      },
    },
  });

  function setSlideOpacity(swiper) {
    swiper.slides.forEach((slide, index) => {
      slide.style.transition = "opacity 0.4s ease-in-out"; // Add transition
      slide.style.opacity = index === swiper.activeIndex ? "1" : "0.7";
    });
  }
}
