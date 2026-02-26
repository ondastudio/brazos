export function greenEffect() {
  console.log("greenEffect");


  const element = document.querySelector(".green-effect");
  if (!element) return;



  gsap.to(".green-effect", {
    backgroundPositionX: "-200%", // Move the gradient smoothly
    duration: 5,
    ease: "linear",
    repeat: -1,
  });
}
