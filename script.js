/* Ferry Pratama — Personal Website · script.js */

/* ── Nav toggle ── */
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
    }
  });
}

/* ── Active nav link ── */
const currentPath = location.pathname;
document.querySelectorAll('.nav-links a:not(.nav-cta)').forEach(a => {
  const href = a.getAttribute('href');
  if (href === '/' && currentPath === '/') {
    a.classList.add('active');
  } else if (href !== '/' && currentPath.startsWith(href)) {
    a.classList.add('active');
  }
});

/* ── Blog filter ── */
const filterBtns = document.querySelectorAll('.filter-btn');
const postCards  = document.querySelectorAll('.post-card[data-tag]');

if (filterBtns.length && postCards.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tag = btn.dataset.filter;
      postCards.forEach(card => {
        const show = tag === 'all' || card.dataset.tag === tag;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

/* ── Smooth scroll for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
