export function swiperAnalitics() {
  console.log("swiperAnalitics");


  const element = document.querySelector(".swiper-analytics-features");
  if (!element) return;




  // AUTO SCROLL ANIMATION
  function initAnimation() {
    var swiper_base = new Swiper(".swiper-analytics-features", {
      slidesPerView: 2.5,
      speed: 700,
      spaceBetween: 20,
      loop: false,
      allowTouchMove: false, // Disables drag/swipe
      simulateTouch: false, // Prevents touch emulation on desktop
      noSwiping: true, // Disables swiping
      noSwipingClass: "swiper-no-swiping", // Class for elements that shouldn't be swiped
    });

    //AUTO SCROLL
    //————————————————————————————————————
    //————————————————————————————————————
    let swiperContainer = document.querySelector(".swiper-analytics-features");
    let startTrigger = document.querySelector(".analytics_sticky");
    let endTrigger = document.querySelector(".analytics-features_wrapper");

    if (swiperContainer && startTrigger && endTrigger) {
      let maxTranslateX = swiperContainer.scrollWidth - endTrigger.clientWidth;

      gsap.to(swiperContainer, {
        x: () => -maxTranslateX,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: startTrigger,
          start: "top 50%",
          endTrigger: endTrigger,
          end: "bottom bottom",
          scrub: 1,
        },
      });
    }
  }

  // ✅ Run only if screen width is 991px or more
  function checkScreenSize() {
    if (window.innerWidth >= 991) {
      initAnimation();
    }
  }

  // Run on load
  checkScreenSize();

  // Run on resize to reapply if needed
  window.addEventListener("resize", checkScreenSize);
}
