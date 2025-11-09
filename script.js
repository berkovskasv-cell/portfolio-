// Simple message to check if JavaScript works
console.log("JavaScript file is connected!");

// Example: Mobile menu toggle (future use)
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}