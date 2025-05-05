// Hamburger meni toggle
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Typewriter efekat
const typewriterText = [
  "Dobrodošli u TransportZonu",
  "Sve usluge na jednom mestu",
  "Bez provizije. Bez komplikacija."
];
let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeTarget = document.querySelector(".typewriter");

function typeEffect() {
  const current = typewriterText[typeIndex];
  let display = current.substring(0, charIndex);

  typeTarget.textContent = display;

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) typeIndex = (typeIndex + 1) % typewriterText.length;
    setTimeout(typeEffect, 1500);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// ScrollReveal animacije
ScrollReveal().reveal('.section h2', {
  delay: 200,
  distance: '40px',
  duration: 800,
  origin: 'bottom',
  reset: false
});
ScrollReveal().reveal('.service-card, .testimonial, .btn-main', {
  delay: 300,
  distance: '30px',
  duration: 600,
  interval: 100,
  origin: 'bottom'
});

// GSAP ulazna animacija hero teksta
gsap.from(".hero-text h1", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power3.out"
});
gsap.from(".hero-text p", {
  duration: 1.2,
  y: 30,
  opacity: 0,
  delay: 0.3,
  ease: "power3.out"
});
gsap.from(".btn-main", {
  duration: 1,
  scale: 0.8,
  opacity: 0,
  delay: 0.6,
  ease: "elastic.out(1, 0.5)"
});
gsap.from(".hero-image", {
  duration: 1,
  scale: 0.8,
  opacity: 0,
  delay: 0.9,
  ease: "power3.out"
});