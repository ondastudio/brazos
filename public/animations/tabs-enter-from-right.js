export function tabsEnter() {
  console.log("tabsEnter");
  const element = document.querySelector("[data-tab-enter-from-right]");
  if (!element) return;




  gsap.fromTo(
    "[data-tab-enter-from-right]",
    { x: "100%", opacity: 0 },
    {
      x: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power2.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".tabs_component",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
}
