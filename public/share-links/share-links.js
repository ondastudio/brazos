
export function shareLinks() {
  console.log("shareLinks");


  const element = document.querySelector("[copy-link-button]");
  if (!element) return;





  const copyButton = document.querySelector("[copy-link-button]");

  copyButton.addEventListener("click", function () {
    const currentURL = window.location.href; // Get the current page URL

    navigator.clipboard.writeText(currentURL).catch((error) => {
      console.error("Failed to copy the link: ", error);
    });
  });

  // TWITTER
  // —————————————————————————————————————————————————
  const twitterShareButton = document.querySelector("[share-twitter]");

  twitterShareButton.addEventListener("click", function () {
    const currentURL = encodeURIComponent(window.location.href); // Encode the current URL
    const tweetText = encodeURIComponent("Brazos "); // Optional tweet text
    const twitterShareURL = `https://twitter.com/intent/tweet?url=${currentURL}&text=${tweetText}`;

    // Open the Twitter share URL in a new tab
    window.open(twitterShareURL, "_blank");
  });

  // FACEBOOK
  // —————————————————————————————————————————————————
  const facebookShareButton = document.querySelector("[share-facebook]");

  facebookShareButton.addEventListener("click", function () {
    const currentURL = encodeURIComponent(window.location.href); // Encode the current URL
    const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;

    // Open the Facebook share URL in a new tab
    window.open(facebookShareURL, "_blank");
  });

  // LINKEDIN
  // —————————————————————————————————————————————————
  const linkedinShareButton = document.querySelector("[share-linkedin]");

  linkedinShareButton.addEventListener("click", function () {
    const currentURL = encodeURIComponent(window.location.href); // Encode the current URL
    const linkedinShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`;

    // Open the LinkedIn share URL in a new tab
    window.open(linkedinShareURL, "_blank");
  });
}
