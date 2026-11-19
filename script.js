// Typing animation
const text = "Palle.Vidiya";
let index = 0;

function typeEffect() {
  const typingElement = document.getElementById("typing");
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150);
  } else {
    setTimeout(() => {
      typingElement.textContent = "";
      index = 0;
      typeEffect();
    }, 2000);
  }
}

window.onload = typeEffect;

// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Dark/Light mode toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggleBtn.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});
