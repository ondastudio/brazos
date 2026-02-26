
export function signUp() {
  console.log("signUp");

  /*
    const element = document.querySelector(".field-error");
    if (!element) return;
  
  
  
    const formInputs = $("#wf-form-Form input").not("#Phone-Number"); // Exclude phone number
    const emailInput = $("#Email-3");
    const passwordInput = $("#Password");
    const nameInput = $("#Name");
    const buttonDisabled = $(".form-button-disabled");
    const submitButton = $(".form-submit-button");
  
    function validateForm() {
      let allFilled = true;
      let emailValid = validateEmail(emailInput.val());
  
      if (!nameInput.val().trim()) allFilled = false;
      if (!passwordInput.val().trim()) allFilled = false;
      if (!emailValid) allFilled = false;
  
      if (allFilled) {
        buttonDisabled.css({ opacity: "0", pointerEvents: "none" });
        submitButton.css({ pointerEvents: "auto" });
      } else {
        buttonDisabled.css({ opacity: "1", pointerEvents: "auto" });
        submitButton.css({ pointerEvents: "none" });
      }
    }
  
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    formInputs.on("input", function () {
      validateForm();
    });
  
    emailInput.on("blur", function () {
      let emailValue = $(this).val().trim();
      if (emailValue.length > 0) {
        let isValid = validateEmail(emailValue);
        if (isValid) {
          $(".field-error").hide();
          $('[underline-error="true"]')
            .find("[background-color]")
            .removeAttr("style");
        } else {
          $(".field-error").show();
          $('[underline-error="true"]')
            .find("[background-color]")
            .css(
              "background-color",
              "var(--_colours---colors--orange-100) !important"
            );
        }
      }
    });
  
    validateForm();
  
    */
}
