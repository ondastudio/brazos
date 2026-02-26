export function menuDropdown() {
  console.log("menuDropdown");



  if ($(window).width() > 991) {
    function updateNavBackground() {
      let $openDropdowns = $(".menu-dropdown-toggle.w--open");

      if ($openDropdowns.length > 0) {
        gsap.to(".nav_background", {
          height: "21rem",
          duration: 0.5,
          ease: "power1.inOut",
        });
        lenis.stop();

        // ✅ Add .is-disabled to all others, except the open dropdown
        $(".menu-dropdown-toggle").not($openDropdowns).addClass("is-disabled");
      } else {
        gsap.to(".nav_background", {
          height: "7.75rem",
          duration: 0.5,
          ease: "power1.inOut",
        });
        lenis.start();

        // ✅ Remove the disabled state when all dropdowns are closed
        $(".menu-dropdown-toggle").removeClass("is-disabled");
      }
    }

    $(".menu-dropdown-toggle").on("click", function () {
      $(".menu-dropdown-toggle").removeClass("is-disabled"); // ✅ Remove disabled class when clicking a dropdown
      setTimeout(updateNavBackground, 10); // ✅ Ensure Webflow updates the class before GSAP runs
    });

    $(".menu-dropdown-toggle").on("mouseenter", function () {
      let $this = $(this);

      // Stop execution if the hovered element has .is-lang
      if ($this.hasClass("is-lang")) return;

      $(".menu-dropdown-toggle")
        .not(".w--open")
        .not($this)
        .not(".is-lang") // Exclude elements with .is-lang
        .addClass("is-disabled");
    });

    $(".menu-dropdown-toggle").on("mouseleave", function () {
      // ✅ Remove .is-disabled when not hovering anymore (but keep it for open ones)
      $(".menu-dropdown-toggle").not(".w--open").removeClass("is-disabled");
    });

    $(document).on("click", function (event) {
      if (
        !$(event.target).closest(".menu-dropdown-toggle, .w-dropdown-list")
          .length
      ) {
        $(".menu-dropdown-toggle.w--open").removeClass("w--open");
        updateNavBackground();
      }
    });
  } else {
    //IS MOBILE ————————————————————————————————————————————————————————————
    //IS MOBILE ————————————————————————————————————————————————————————————
    //IS MOBILE ————————————————————————————————————————————————————————————
    $(".menu-dropdown-toggle").on("click", function () {
      console.log("click");
      let $this = $(this);

      // Stop execution if the clicked element has .is-lang
      if ($this.hasClass("is-lang")) return;

      // Remove is-disabled from all menu items first
      $(".menu-dropdown-toggle").not(".is-lang").removeClass("is-disabled");

      // Add is-disabled to all others except the clicked one and those with .is-lang
      $(".menu-dropdown-toggle")
        .not($this)
        .not(".is-lang")
        .addClass("is-disabled");
    });

    // Close dropdowns when clicking outside
    $(document).on("click", function (event) {
      if (
        !$(event.target).closest(".menu-dropdown-toggle, .w-dropdown-list")
          .length
      ) {
        $(".menu-dropdown-toggle.w--open").removeClass("w--open");
        $(".menu-dropdown-toggle").removeClass("is-disabled"); // Remove is-disabled from all
      }
    });
  }
}
