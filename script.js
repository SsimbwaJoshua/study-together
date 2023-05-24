"use-strict";

const mobileBtn = document.querySelector(".mobile-btn");
const navLinks = document.querySelector(".nav-links");

mobileBtn.addEventListener("click", () => {
  console.log("clicked");
  navLinks.classList.toggle("menu-open");
  mobileBtn.classList.toggle("mobileBtn-color");
});
