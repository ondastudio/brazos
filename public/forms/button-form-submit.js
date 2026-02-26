
export function formButtonSubmit() {
  console.log("forms");


  const element = document.querySelector(".form-submit-button");
  if (!element) return;





  const formInputs = $(
    "#wf-form-Form input, #wf-form-Form textarea, #wf-form-Form select"
  );
  const emailInput = $("#email");
  const buttonDisabled = $(".form-button-disabled");

  function validateForm() {
    let allFilled = true;
    let emailValid = validateEmail(emailInput.val());

    formInputs.each(function () {
      if ($(this).attr("type") === "email") {
        if (!emailValid) allFilled = false;
      } else {
        if (!$(this).val().trim()) allFilled = false;
      }
    });

    // Toggle button based on form completion
    if (allFilled) {
      buttonDisabled.css({ opacity: "0" });
      $(".form-submit-button").css({ "pointer-events": "auto" });
    } else {
      buttonDisabled.css({ opacity: "1" });
      $(".form-submit-button").css({ "pointer-events": "none" });
    }
  }

  // Email validation function
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Detect changes in any input
  formInputs.on("input", function () {
    validateForm();
  });

  // Check email validity on blur
  emailInput.on("blur", function () {
    let emailValue = $(this).val().trim();

    if (emailValue.length > 0) {
      let isValid = validateEmail(emailValue);

      if (isValid) {
        $(".field-error").css("display", "none");
        $('[underline-error="true"]')
          .find("[background-color]")
          .each(function () {
            $(this).removeAttr("style");
          });
      } else {
        $(".field-error").css("display", "block");
        $('[underline-error="true"]')
          .find("[background-color]")
          .each(function () {
            $(this).attr(
              "style",
              "background-color: var(--_colours---colors--orange-100) !important;"
            );
          });
      }
    }
  });

  // Initial check in case fields are prefilled
  validateForm();
}
