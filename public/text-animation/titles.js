export function titles() {
  console.log("titles");


  const element = document.querySelector("[split-lines]");
  if (!element) return;

  function initSplitText() {
    $("[split-lines]").each(function () {
      let textElement = $(this);
      let split = new SplitType(textElement, { types: "lines" });

      // Wrap each line in a div with a class
      textElement
        .find(".line")
        .wrap('<div class="line-wrapper" line-initial></div>');
    });

    //Apply class for the green effect
    $(".green-effect .line").addClass("green-effect");
  }

  initSplitText(); // Initialize text splitting

  // Ensure [line-title-animation] is visible with opacity
  gsap.set("[line-title-animation]", { opacity: 1 });

  // Animate the lines using .line-wrapper
  $("[line-title-animation]").each(function () {
    let triggerElement = $(this);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 90%",
        onEnter: () => tl.play(),
      },
    });

    tl.fromTo(
      triggerElement.find(".line"),
      { y: "100%" }, // Start below
      { y: "0%", duration: 0.7, ease: "power2.out", stagger: { amount: 0.1 } } // Move up
    );
  });
}
