export function numberCount() {
  console.log("numberCount");


  const element = document.querySelector("[number-count]");
  if (!element) return;

  $("[number-count]").each(function () {
    let target = $(this);
    let finalNumber = parseInt(target.text().replace(/\./g, ""), 10);

    gsap.fromTo(
      target,
      { innerText: 0 },
      {
        innerText: finalNumber,
        duration: 1,
        ease: "expo.inOut",
        roundProps: "innerText",
        onUpdate: function () {
          target.text(numberWithCommas(Math.round(target.text())));
        },
        scrollTrigger: {
          trigger: target,
          start: "top 95%",
          once: true,
        },
      }
    );
  });

  function numberWithCommas(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}
