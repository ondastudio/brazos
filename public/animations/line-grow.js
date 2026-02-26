export function lineGrow() {
  console.log("line grow");
  const element = document.querySelector("[line-grow-animation]");
  if (!element) return;


  $("[line-grow-animation]").each(function () {
    let triggerElement = $(this);

    gsap.fromTo(
      triggerElement,
      { width: "0%" },
      {
        width: "100%",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  $("[line-vertical-grow-animation]").each(function () {
    let triggerElement = $(this);

    gsap.fromTo(
      triggerElement,
      { height: "0%" },
      {
        height: "100%",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  });

}