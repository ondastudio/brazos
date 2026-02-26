
export function loader() {
  console.log("loader");


  const element = document.querySelector(".loader-other-pages");
  if (!element) return;



  // Create a GSAP timeline
  var othersHeroTl = gsap.timeline();

  // Add animation to the timeline
  othersHeroTl.to("[loader-bg-1]", {
    duration: 0.6,
    y: "-100%",
    ease: "power3.inOut",
  });

  othersHeroTl.to(
    "[loader-bg-2]",
    {
      duration: 0.6,
      y: "-100%",
      ease: "power3.inOut",
    },
    "<+.25"
  );

  othersHeroTl.to(
    "[loader-bg-3]",
    {
      duration: 0.6,
      y: "-100%",
      ease: "power3.inOut",
    },
    "<+.25"
  );

  othersHeroTl.to(
    ".loader-other-pages",
    {
      duration: 0.9,
      y: "-100%",
      ease: "power3.inOut",
    },
    "<+.3"
  );
  //
}
