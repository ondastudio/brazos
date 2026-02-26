export function copyright() {
  console.log("copyright");


  const element = document.querySelector("[copyright-year]");
  if (!element) return;

  $("[copyright-year]").text(new Date().getFullYear());
}
