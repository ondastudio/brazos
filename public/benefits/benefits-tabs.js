
export function benefitsTabs() {
  console.log("benefitsTabs");


  const element = document.querySelector(".benefit-tab-content");
  if (!element) return;




  if ($(window).width() > 991) {
    const benefitTabContents = document.querySelectorAll(
      ".benefit-tab-content"
    );
    let isAnimating = false; // Track animation state

    benefitTabContents.forEach((benefitTabContent) => {
      const benefitIcon = benefitTabContent.querySelector(".benefit-icon");
      const initialPositionWrapper = benefitTabContent.querySelector(
        ".benefit-icon-initial-position"
      );
      const finalPositionWrapper = benefitTabContent.querySelector(
        ".service-tab-icon_wrapper"
      );
      const benefitTabContentWrapper = benefitTabContent.querySelector(
        ".benefit-tab-content_wrapper"
      );

      if (
        benefitIcon &&
        initialPositionWrapper &&
        finalPositionWrapper &&
        benefitTabContentWrapper
      ) {
        function handleFlipAnimation() {
          const state = Flip.getState(benefitIcon);

          if (benefitTabContent.classList.contains("is-active")) {
            initialPositionWrapper.appendChild(benefitIcon);
          } else {
            finalPositionWrapper.appendChild(benefitIcon);
          }

          Flip.from(state, {
            duration: 1.6,
            ease: "power2.inOut",
            absolute: true,
          });
        }

        function handleActiveClass(clickedContent) {
          if (isAnimating) return;

          isAnimating = true;

          benefitTabContents.forEach((content) => {
            const contentWrapper = content.querySelector(
              ".benefit-tab-content_wrapper"
            );
            const icon = content.querySelector(".benefit-icon");
            const finalWrapper = content.querySelector(
              ".service-tab-icon_wrapper"
            );

            if (content !== clickedContent) {
              content.classList.remove("is-active");

              // Ensure benefit-hover-icon opacity resets to 1 when a tab closes
              $(content).find(".benefit-hover-icon").css("opacity", "1");

              if (icon && finalWrapper) {
                const state = Flip.getState(icon);
                finalWrapper.appendChild(icon);
                Flip.from(state, {
                  duration: 1,
                  ease: "power1.inOut",
                  absolute: true,
                });
              }

              if (contentWrapper) {
                gsap.to(contentWrapper, { opacity: 0 });
              }
            }
          });

          clickedContent.classList.add("is-active");

          gsap.to(clickedContent.querySelector(".benefit-hover-icon"), {
            opacity: 0,
            duration: 0.3,
            ease: "power1.inOut",
          });

          setTimeout(() => {
            gsap.to(
              clickedContent.querySelector(".benefit-tab-content_wrapper"),
              { opacity: 1 }
            );
          }, 1100);

          handleFlipAnimation();

          setTimeout(() => {
            isAnimating = false;
          }, 1600);
        }

        benefitTabContent.addEventListener("click", function () {
          handleActiveClass(benefitTabContent);
        });

        if (benefitTabContent.classList.contains("is-active")) {
          initialPositionWrapper.appendChild(benefitIcon);
          gsap.set(benefitTabContentWrapper, { opacity: 1 });
        } else {
          finalPositionWrapper.appendChild(benefitIcon);
          gsap.set(benefitTabContentWrapper, { opacity: 0 });
        }
      }
    });

    // Initial Styling (No Border Change)
    $(".benefit-tab-content").each(function () {
      if (!$(this).hasClass("is-active")) {
        $(this).find(".benefit-hover-icon").css("opacity", "1");
      } else {
        $(this).find(".benefit-hover-icon").css("opacity", "0");
      }
    });

    // Hover Effects (Opacity Animation Only)
    $(".benefit-tab-content").hover(
      function () {
        if (!$(this).hasClass("is-active")) {
          $(this).css("cursor", "pointer");
        }
      },
      function () {
        if (!$(this).hasClass("is-active")) {
          $(this).css("cursor", "auto");
        }
      }
    );
  } else {
    let $firstBenefitItem = $(".benefit-tab-contain").first();
    let $firstTextWrapper = $firstBenefitItem.find(".benefit-text_wrapper");
    let $firstIconWrapper = $firstBenefitItem.find(".benefit-hover-icon");

    // Set first item as active on load
    $firstBenefitItem.addClass("is-active");
    $firstTextWrapper.addClass("is-active").css("height", "auto"); // Ensure it's expanded
    gsap.to($firstIconWrapper, {
      opacity: 0,
      duration: 0.3,
      ease: "power1.inOut",
    }); // Hide icon smoothly

    $(".benefit-title-mobile").on("click", function () {
      let $benefitItem = $(this).closest(".benefit-tab-contain");
      let $textWrapper = $benefitItem.find(".benefit-text_wrapper");
      let $iconWrapper = $benefitItem.find(".benefit-hover-icon");

      // Prevent re-clicking on the same open tab
      if ($benefitItem.hasClass("is-active")) {
        return;
      }

      // Find all other active elements
      let $otherItems = $(".benefit-tab-contain").not($benefitItem);
      let $otherTextWrappers = $(".benefit-text_wrapper").not($textWrapper);
      let $otherIconWrappers = $(".benefit-hover-icon").not($iconWrapper);

      // Close all other active tabs before opening the new one
      gsap.to($otherTextWrappers, {
        height: 0,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: function () {
          $otherItems.removeClass("is-active");
          $otherTextWrappers.removeClass("is-active");
          gsap.to($otherIconWrappers, {
            opacity: 1,
            duration: 0.3,
            ease: "power1.inOut",
          }); // Show icons back
        },
      });

      // Mark clicked item as active
      $benefitItem.addClass("is-active");
      $textWrapper.addClass("is-active");

      // Animate the opacity of the icon smoothly instead of hiding it instantly
      gsap.to($iconWrapper, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.inOut",
      });

      // Expand the clicked tab
      gsap.fromTo(
        $textWrapper,
        { height: 0 },
        { height: "auto", duration: 0.5, ease: "power1.inOut" }
      );
    });
  }
}
