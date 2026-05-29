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

// Scroll-based nav (sticky after scroll on hero pages)
const isHome = document.body.dataset.page === 'home';
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (isHome) {
    if (y > 100) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  lastScroll = y;
}, { passive: true });

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll(
  '.section, .stats-band, .sector-card, .capability, .service-card, .team-card, .property-card, .post-card, .page-hero h1, .page-hero p'
).forEach(el => { el.classList.add('reveal'); io.observe(el); });
