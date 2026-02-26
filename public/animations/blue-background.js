
export function backgroundBlue() {
  const element = document.querySelector(".background-blue-crop");
  if (!element) return;



  $(".background-blue-crop").each(function () {
    let $this = $(this);

    // Check if screen width is under 991px
    if (window.innerWidth < 991) {
      gsap.fromTo(
        $this,
        { scaleX: 0.9, scaleY: 0.98 },
        {
          scaleX: 1,
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: $this,
            start: "top bottom",
            end: "top 90%",
            scrub: 1,
          },
        }
      );
    } else {
      gsap.fromTo(
        $this,
        { scaleX: 0.9, scaleY: 0.8 },
        {
          scaleX: 1,
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: $this,
            start: "top bottom",
            end: "top 80%",
            scrub: 1,
          },
        }
      );
    }
  });

}