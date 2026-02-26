export function technicalGuide() {
  console.log("technicalGuide");


  const element = document.querySelector("#wf-form-Report");
  if (!element) return;




  window.Webflow ||= [];
  window.Webflow.push(() => {
    console.log("entra");

    const formInputs = $(
      "#wf-form-Report input, #wf-form-Report textarea, #wf-form-Report select"
    ).not("#Phone-Number");
    const emailInput = $("#email");
    const buttonDisabled = $(".form-button-disabled");
    const submitButton = $(".form-submit-button");

    function validateForm() {
      let allFilled = true;
      let emailValid = validateEmail(emailInput.val());

      formInputs.each(function () {
        const type = $(this).attr("type");
        const value = $(this).val();

        if (type === "email") {
          if (!emailValid) allFilled = false;
        } else {
          if (!value || (typeof value === "string" && !value.trim())) {
            allFilled = false;
          }
        }
      });

      if (allFilled) {
        console.log("disabled");
        buttonDisabled.css({ opacity: "0", pointerEvents: "none" });
        submitButton.css({ pointerEvents: "auto" });
      } else {
        console.log("enabled");
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
            .css("background-color", "var(--_colours---colors--orange-100)");
        }
      }
    });

    // DOWNALOD

    $("#wf-form-Report").on("submit", function () {
      const pdfLink = $('a[href$=".pdf"]:contains("Download Report")').attr(
        "href"
      );

      if (pdfLink) {
        setTimeout(() => {
          window.open(pdfLink, "_blank");
        }, 500); // Wait for Webflow success state to render
      }
    });

    validateForm();
  });
}