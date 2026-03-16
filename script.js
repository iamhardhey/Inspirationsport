// Smooth scroll to Enroll section
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('#enroll').scrollIntoView({behavior: 'smooth'});
  });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// Service card animation on scroll
const serviceCards = document.querySelectorAll('.service-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {threshold:0.2});
serviceCards.forEach(card => observer.observe(card));

// Hero Slideshow with Text Animation
const slides = document.querySelectorAll('.hero-slides img');
const heroContent = document.querySelector('header .content');
let currentSlide = 0;

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
  heroContent.classList.add('show');
  slides[currentSlide].classList.add('active');
});

function changeSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');

  // Animate hero text on slide change
  heroContent.classList.remove('show');
  setTimeout(() => {
    heroContent.classList.add('show');
  }, 100);
}

// Change slide every 5 seconds
setInterval(changeSlide, 5000);
