
export function swiperTestimonialsCarrers() {
  console.log("swiperTestimonialsCarrers");


  const element = document.querySelector(".section_careers-testimonials");
  if (!element) return;



  // Initialize Swiper
  var swiper_base = new Swiper(".swiper-testimonials", {
    slidesPerView: 2,
    speed: 700,
    spaceBetween: 40,
    centeredSlides: true, // Center the slides
    loop: false, // Do not loop the slides
    initialSlide: 1, // Start with slide 2 (index starts at 0)
    navigation: {
      nextEl: ".testimonials-next-arrow",
      prevEl: ".testimonials-prev-arrow",
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
      991: {
        spaceBetween: 40,
        slidesPerView: 2,
      },
    },
    on: {
      init: function () {
        // Set the total number of slides
        document.querySelector("[swiper-total-number]").textContent =
          this.slides.length;

        // Set the initial current slide number (account for zero-based index)
        document.querySelector("[swiper-current-number]").textContent =
          this.activeIndex + 1;
      },
      slideChange: function () {
        // Update the current slide number on slide change
        document.querySelector("[swiper-current-number]").textContent =
          this.activeIndex + 1;
      },
    },
  });
}
