let icon = document.querySelector(".hamburger-icon");
let hamburgerLinks = document.querySelector(".menu-links");

function toggleMenu() {
  icon.classList.toggle("open");
  hamburgerLinks.classList.toggle("menu-links");
}