// Boots up the app
function init() {
  console.log("WebPage Loaded");
}

// mobile header ui
const mobileIcon = document.querySelector(".mobile-icon");
const header = document.querySelector(".header");
mobileIcon.addEventListener("click", () => header.classList.toggle("active"));

window.addEventListener("load", function () {
  init();
});
