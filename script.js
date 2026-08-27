const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

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

document.querySelectorAll('nav a[href^="#"], #mobile-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const mobileMenuElement = document.getElementById('mobile-menu');
            if (mobileMenuElement && !mobileMenuElement.classList.contains('hidden')) {
                mobileMenuElement.classList.add('hidden');
            }

            const navHeight = 90;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});