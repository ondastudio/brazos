
export function marqueeTrustedBy() {
  console.log("marqueeTrustedBy");


  const element = document.querySelector(".marquee_track.is-trusted-by");
  if (!element) return;


  let tlmar = gsap.timeline({ repeat: -1 });

  tlmar.fromTo(
    ".marquee_track.is-trusted-by",
    {
      xPercent: 0,
    },
    {
      xPercent: -50,
      duration: 40,
      ease: "none",
    }
  );
}
