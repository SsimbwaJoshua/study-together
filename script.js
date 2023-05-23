const mobileBtn = document.querySelector(".mobile-btn");
const navLinks = document.querySelector(".nav-link");

mobileBtn.addEventListener("click", () => {
  console.log("clicked");
  navLinks.classList.toggle("hidden");
});
