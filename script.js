// script.js - Animacije i funkcionalnosti sajta

document.addEventListener('DOMContentLoaded', function() {
    // Toggle za mobilni meni (hamburger)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Inicijalizacija ScrollReveal animacija (pri skrolovanju)
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('.hero-content h1', {
            origin: 'top',
            distance: '50px',
            duration: 1000
        });
        ScrollReveal().reveal('.hero-content p', {
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            delay: 300
        });
        ScrollReveal().reveal('#about .container', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            reset: true
        });
        ScrollReveal().reveal('#contact .container', {
            origin: 'right',
            distance: '50px',
            duration: 1000,
            reset: true
        });
        ScrollReveal().reveal('#prijava .container', {
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            reset: true
        });
    }
});
