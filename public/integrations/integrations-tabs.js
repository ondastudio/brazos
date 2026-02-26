
export function integrationsTabs() {
  console.log("integrationsTabs");


  const element = document.querySelector(".hardware_wrapper");
  if (!element) return;



  $("[data-hardware-tab-content]").on("click", function () {
    console.log("hard");
    $(".hardware_wrapper").css("display", "block");
    $(".software_wrapper").css("display", "none");
  });

  $("[data-software-tab-content]").on("click", function () {
    $(".hardware_wrapper").css("display", "none");
    $(".software_wrapper").css("display", "block");
  });

  $(".integration-link").on("click", function () {
    $(".integration-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
}
