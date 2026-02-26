export function tabshomeSecurity() {
  console.log("tabshomeSecurity");


  const element = document.querySelector(".security-tab-content");
  if (!element) return;



  if ($(window).width() > 991) {
    const securityTabContents = document.querySelectorAll(
      ".security-tab-content"
    );
    let isAnimating = false; // Track animation state

    securityTabContents.forEach((securityTabContent) => {
      const securityIcon = securityTabContent.querySelector(
        ".security-image-icon"
      );
      const initialPositionWrapper = securityTabContent.querySelector(
        ".secutiry-icon-initial-position"
      );
      const finalPositionWrapper = securityTabContent.querySelector(
        ".security-tab-icon_wrapper"
      );
      const securityTabContentWrapper = securityTabContent.querySelector(
        ".security-tab-content_wrapper"
      );

      if (
        securityIcon &&
        initialPositionWrapper &&
        finalPositionWrapper &&
        securityTabContentWrapper
      ) {
        function handleFlipAnimation() {
          const state = Flip.getState(securityIcon);

          if (securityTabContent.classList.contains("is-active")) {
            initialPositionWrapper.appendChild(securityIcon);
          } else {
            finalPositionWrapper.appendChild(securityIcon);
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

          securityTabContents.forEach((content) => {
            const contentWrapper = content.querySelector(
              ".security-tab-content_wrapper"
            );
            const icon = content.querySelector(".security-image-icon");
            const finalWrapper = content.querySelector(
              ".security-tab-icon_wrapper"
            );

            if (content !== clickedContent) {
              content.classList.remove("is-active");

              // Ensure security-eye-icon opacity resets to 1 when a tab closes
              $(content).find(".security-eye-icon").css("opacity", "1");

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

          gsap.to(clickedContent.querySelector(".security-eye-icon"), {
            opacity: 0,
            duration: 0.3,
            ease: "power1.inOut",
          });

          setTimeout(() => {
            gsap.to(
              clickedContent.querySelector(".security-tab-content_wrapper"),
              { opacity: 1 }
            );
          }, 1100);

          handleFlipAnimation();

          setTimeout(() => {
            isAnimating = false;
          }, 1600);
        }

        securityTabContent.addEventListener("click", function () {
          handleActiveClass(securityTabContent);
        });

        if (securityTabContent.classList.contains("is-active")) {
          initialPositionWrapper.appendChild(securityIcon);
          gsap.set(securityTabContentWrapper, { opacity: 1 });
        } else {
          finalPositionWrapper.appendChild(securityIcon);
          gsap.set(securityTabContentWrapper, { opacity: 0 });
        }
      }
    });

    // Initial Styling (No Border Change)
    $(".security-tab-content").each(function () {
      if (!$(this).hasClass("is-active")) {
        $(this).find(".security-eye-icon").css("opacity", "1");
      } else {
        $(this).find(".security-eye-icon").css("opacity", "0");
      }
    });

    // Hover Effects (Opacity Animation Only)
    $(".security-tab-content").hover(
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
    // MOBILE ANIMATION ————————————————————————————————————————————————————————————
    // MOBILE ANIMATION ————————————————————————————————————————————————————————————
    // MOBILE ANIMATION ————————————————————————————————————————————————————————————
    // MOBILE ANIMATION ————————————————————————————————————————————————————————————
    $(document).ready(function () {
      let $firstTab = $(".security-tab-content_wrapper").first();
      let $firstIcon = $firstTab
        .siblings(".security-title-mobile")
        .find(".security-icon_wrapper");

      // Set the first tab as active
      $firstTab.addClass("is-active");
      gsap.set($firstTab, { height: "auto" }); // Ensure proper height
      let fullHeight = $firstTab.outerHeight(); // Get full height
      gsap.set($firstTab, { height: 0 }); // Reset to 0 before animation

      gsap.to($firstTab, {
        height: fullHeight,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: function () {
          gsap.set($firstTab, { height: "auto" }); // Reset to auto after animation
        },
      });

      // Fade out the first tab's icon
      gsap.to($firstIcon, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.inOut",
      });
    });

    $(document).on("click", ".security-title-mobile", function () {
      let $tabContent = $(this).siblings(".security-tab-content_wrapper");
      let $iconWrapper = $(this).find(".security-icon_wrapper");

      // Close all other open tabs
      $(".security-tab-content_wrapper")
        .not($tabContent)
        .each(function () {
          let $this = $(this);
          let $otherIconWrapper = $this
            .siblings(".security-title-mobile")
            .find(".security-icon_wrapper");

          if ($this.hasClass("is-active")) {
            gsap.to($this, {
              height: 0,
              duration: 0.5,
              ease: "power1.inOut",
              onComplete: function () {
                $this.removeClass("is-active");
              },
            });

            // Reset opacity of icons in other tabs
            gsap.to($otherIconWrapper, {
              opacity: 1,
              duration: 0.3,
              ease: "power1.inOut",
            });
          }
        });

      // Check if the clicked tab is already active
      if ($tabContent.hasClass("is-active")) {
        gsap.to($tabContent, {
          height: 0,
          duration: 0.5,
          ease: "power1.inOut",
          onComplete: function () {
            $tabContent.removeClass("is-active");
          },
        });

        // Reset icon opacity when closing
        gsap.to($iconWrapper, {
          opacity: 1,
          duration: 0.3,
          ease: "power1.inOut",
        });
      } else {
        // Open the clicked tab smoothly
        $tabContent.addClass("is-active");

        // Set height to auto temporarily, measure it, then reset it to 0 for animation
        gsap.set($tabContent, { height: "auto" });
        let fullHeight = $tabContent.outerHeight(); // Capture full height
        gsap.set($tabContent, { height: 0 }); // Reset to 0 before animation

        // Animate from 0 to full height
        gsap.to($tabContent, {
          height: fullHeight,
          duration: 0.5,
          ease: "power1.inOut",
          onComplete: function () {
            gsap.set($tabContent, { height: "auto" }); // Reset to auto after animation
          },
        });

        // Animate the icon opacity to 0
        gsap.to($iconWrapper, {
          opacity: 0,
          duration: 0.3,
          ease: "power1.inOut",
        });
      }
    });
  }
}
