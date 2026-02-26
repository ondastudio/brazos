
export function imageClip() {
  console.log("image-clip");


  const element = document.querySelector("[image-clip-animation]");
  if (!element) return;



  $("[image-clip-animation]").each(function () {
    let element = $(this);
    let borderRadius = element.css("border-radius") || "0px";

    gsap.fromTo(
      element,
      { clipPath: `inset(100% round ${borderRadius})` },
      {
        clipPath: `inset(0% round ${borderRadius})`,
        ease: "power1.out",
        duration: 1.2,
        scrollTrigger: {
          trigger: element[0],
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}
