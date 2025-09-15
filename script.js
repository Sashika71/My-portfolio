// =========================
// NAVBAR SCROLL ACTIVE
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// =========================
// MOBILE MENU TOGGLE
// =========================
const navbar = document.querySelector(".navbar");
const navList = document.querySelector(".nav-links");
const toggleBtn = document.createElement("div");

toggleBtn.innerHTML = "&#9776;";
toggleBtn.classList.add("menu-toggle");
navbar.insertBefore(toggleBtn, navList);

toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// =========================
// TYPING EFFECT
// =========================
const typingText = document.querySelector(".hero-text h3");
const text = "Hello, It's Me";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingText.textContent = text.slice(0, index + 1);
    index++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

// =========================
// SCROLL REVEAL ANIMATION
// =========================
const revealElements = document.querySelectorAll(".skill, .project-card, #about p, .contact-form, .contact-card");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("show");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();



// =========================
// FORM VALIDATION
// =========================
const form = document.querySelector(".contact-form form");
form.addEventListener("submit", (e) => {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert("Please fill in all fields before submitting.");
  }
});

