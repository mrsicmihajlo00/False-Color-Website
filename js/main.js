// main.js — runs on every page

document.addEventListener('DOMContentLoaded', () => {

  // Year
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Back to top
  const btn = document.getElementById('backTop');
  if (btn) {
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Mobile burger
  const burger = document.querySelector('.nav-burger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
      // Animate burger → X
      const spans = burger.querySelectorAll('span');
      if (open) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        burger.setAttribute('aria-expanded', false);
        burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      });
    });
  }

});
