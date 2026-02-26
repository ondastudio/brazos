export function swiperHomeFeatured() {
  console.log("swiperHomeFeatured");


  const element = document.querySelector(".swiper-home-featured");
  if (!element) return;





  if ($(window).width() < 991) {
    var swiper_base = new Swiper(".swiper-home-featured", {
      slidesPerView: 1,
      speed: 700,
      spaceBetween: 40,
      loop: false, // Do not loop the slides
      navigation: {
        nextEl: ".home-featured-next-arrow",
        prevEl: ".home-featured-prev-arrow",
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
          const totalEl = document.querySelector(
            "[swiper-home-featured-total-number]"
          );
          const currentEl = document.querySelector(
            "[swiper-home-featured-current-number]"
          );

          if (totalEl) totalEl.textContent = this.slides.length;
          if (currentEl) currentEl.textContent = this.activeIndex + 1;
        },
        slideChange: function () {
          const currentEl = document.querySelector(
            "[swiper-home-featured-current-number]"
          );
          if (currentEl) currentEl.textContent = this.activeIndex + 1;
        },
      },
    });
  }
}
