// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

// Dynamic footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Lead form handler (connect to your backend/email service)
document.getElementById('leadForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  
  // Replace with your actual form endpoint:
  // - Netlify: add `netlify` to form tag
  // - Formspree: action="https://formspree.io/f/your-id"
  // - HubSpot/Mailchimp: use their embed JS or API
  
  console.log('Lead captured:', email);
  alert('✅ Thanks! Check your inbox for next steps.');
  this.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
