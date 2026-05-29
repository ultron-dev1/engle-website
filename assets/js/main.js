// Mobile nav toggle
const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav-links a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('open'))
  );
}

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.section, .hero, .page-hero, .feature-card, .service-card, .team-card, .property-card, .post-card')
  .forEach(el => { el.classList.add('reveal'); io.observe(el); });
