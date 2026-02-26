
export function swiperTestimonials() {
  console.log("swiperTestimonials");


  const element = document.querySelector(
    ".section_home-testimonials, .section_customers"
  );

  if (!element) return;


  var swiper_base = new Swiper(".swiper-testimonials", {
    slidesPerView: 1,
    speed: 700,
    spaceBetween: 40,
    centeredSlides: true,
    loop: false,
    navigation: {
      nextEl: ".customers-next-arrow",
      prevEl: ".customers-prev-arrow",
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
  });
}
