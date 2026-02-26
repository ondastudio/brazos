
export function formSubmit() {
  console.log("formSubmit");


  const element = document.querySelector(".form-submit-trigger");
  if (!element) return;




  $(".form-submit-trigger").on("click", function () {
    $(".contact-hero-wrapper").css("display", "none");
    $(".contact-thank_wrapper").css("display", "block");
  });
}
