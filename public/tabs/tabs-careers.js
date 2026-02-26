export function tabsCareers() {
  console.log("tabsCareers");


  const element = document.querySelector(".tab-item");
  if (!element) return;



  if ($(window).width() > 991) {
    const tabs = document.querySelectorAll(".tab-item");
    const imageChange = document.querySelector(".tab-image-change");
    const linkIconWrappers = document.querySelectorAll(
      ".tab-link-icon_wrapper"
    );
    let currentIndex = 0;
    let interval;

    // Function to activate the current tab, animate its line, update the image, and manage icon wrapper
    const activateTab = (index) => {
      tabs.forEach((tab, i) => {
        const line = tab.querySelector(".tab-line");
        const tabImage = tab.querySelector(".tab-image"); // Get the image inside the tab
        const linkIconWrapper = linkIconWrappers[i]; // Get the corresponding .tab-link-icon_wrapper

        if (i === index) {
          // Add "is-active" class and animate the line from 0% to 100%
          tab.classList.add("is-active");

          // Add "is-active" class to the corresponding .tab-link-icon_wrapper
          if (linkIconWrapper) {
            linkIconWrapper.classList.add("is-active");
          }
          $(tab).find(".tab-eye-icon_wrapper").css("opacity", "0");

          // Stop any ongoing animation for this line
          gsap.killTweensOf(line);

          // Animate the line from 0% to 100%
          gsap.fromTo(
            line,
            { width: "0%" },
            { width: "100%", duration: 5, ease: "none" }
          );

          // Update the source of the .tab-image-change to the active tab's image source
          if (tabImage) {
            imageChange.src = tabImage.src;
          }
        } else {
          $(tab).find(".tab-eye-icon_wrapper").css("opacity", "1");
          // Remove "is-active" class and reset the line width to 0% instantly
          tab.classList.remove("is-active");

          // Remove "is-active" class from the corresponding .tab-link-icon_wrapper
          if (linkIconWrapper) {
            linkIconWrapper.classList.remove("is-active");
          }

          // Stop any ongoing animation for this line
          gsap.killTweensOf(line);

          // Reset the line to 0% immediately
          gsap.set(line, { width: "0%" });
        }
      });
    };

    // Function to start the timer
    const startTimer = () => {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % tabs.length; // Loop back to the first tab
        activateTab(currentIndex);
      }, 5000);
    };

    // Function to reset the timer
    const resetTimer = () => {
      clearInterval(interval); // Stop the current timer
      startTimer(); // Restart the timer
    };

    // Detect the initial active tab
    tabs.forEach((tab, index) => {
      if (tab.classList.contains("is-active")) {
        currentIndex = index; // Set the currentIndex to the pre-active tab
      }
    });

    // Animate the initial active tab's line
    activateTab(currentIndex);

    // Add click event listener to each tab
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        currentIndex = index; // Update the current index
        activateTab(currentIndex); // Activate the clicked tab
        resetTimer(); // Reset the timer
      });
    });

    // Start the timer on page load
    startTimer();
  } else {
    //MOBILE ANIMATION
    $(document).ready(function () {
      let $firstTab = $(".tab-item").first();
      let $firstTextWrapper = $firstTab.find(".tab-text_wrapper");
      let $firstIconWrapper = $firstTab.find(".tab-link-icon_wrapper");

      // Set the first tab as active
      $firstTab.addClass("is-active");
      $firstTextWrapper.addClass("is-active").css("height", "auto");
      $firstIconWrapper.addClass("is-active");
    });

    $(document).on("click", ".tab-title_wrapper", function () {
      let $tabItem = $(this).closest(".tab-item");
      let $textWrapper = $tabItem.find(".tab-text_wrapper");
      let $iconWrapper = $tabItem.find(".tab-link-icon_wrapper");

      // Prevent closing the currently open tab
      if ($tabItem.hasClass("is-active")) {
        return;
      }

      // Find all other active items and their elements
      let $otherItems = $(".tab-item").not($tabItem);
      let $otherTextWrappers = $(".tab-text_wrapper").not($textWrapper);
      let $otherIconWrappers = $(".tab-link-icon_wrapper").not($iconWrapper);

      // Animate height to 0 for all other active text wrappers before removing the class
      gsap.to($otherTextWrappers, {
        height: 0,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: function () {
          $otherItems.removeClass("is-active");
          $otherTextWrappers.removeClass("is-active");
          $otherIconWrappers.removeClass("is-active");
        },
      });

      // Add active class to the clicked element
      $tabItem.addClass("is-active");
      $textWrapper.addClass("is-active");
      $iconWrapper.addClass("is-active");

      // Animate height to auto
      gsap.fromTo(
        $textWrapper,
        { height: 0 },
        { height: "auto", duration: 0.5, ease: "power1.inOut" }
      );
    });
  }
}
