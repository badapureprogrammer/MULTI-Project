// Boots up the app
function init() {
  console.log("WebPage Loaded");
}

// mobile header ui
const mobileIcon = document.querySelector(".mobile-icon");
const header = document.querySelector(".header");
mobileIcon.addEventListener("click", () => header.classList.toggle("active"));

// about section accordion ui
const accordion = document.getElementsByClassName("content-box");
for (let i = 0; i <= accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

window.addEventListener("load", function () {
  init();
});
