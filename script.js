// =========================
// MOBILE MENU TOGGLE
// =========================
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// =========================
// TYPING EFFECT
// =========================
const typingText = document.getElementById("typing-heading");
const text = "Hello, I'm";
let index = 0;

function typeEffect() {
  if (typingText && index < text.length) {
    typingText.textContent = text.slice(0, index + 1);
    index++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

// =========================
// FORM VALIDATION
// =========================
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    const name = form.name ? form.name.value.trim() : "";
    const email = form.email ? form.email.value.trim() : "";
    const message = form.message ? form.message.value.trim() : "";

    if (!name || !email || !message) {
      e.preventDefault();
      alert("Please fill in all fields before submitting.");
    }
  });
}