
export function marqueeTeam() {
  console.log("marqueeTeam");


  const element = document.querySelector(".marquee_track.is-team");
  if (!element) return;


  let tlmar = gsap.timeline({ repeat: -1 });

  tlmar.fromTo(
    ".marquee_track.is-team",
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
