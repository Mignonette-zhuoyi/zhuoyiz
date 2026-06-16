// TOC: appear after scrolling past first viewport
const toc = document.getElementById('toc');
function updateToc() {
  if (window.scrollY > window.innerHeight * 0.7) {
    toc.classList.add('visible');
  } else {
    toc.classList.remove('visible');
  }
}
window.addEventListener('scroll', updateToc, { passive: true });

// TOC: highlight active section
const sections = document.querySelectorAll('section[id]');
const tocLinks = document.querySelectorAll('.toc-link');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      tocLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-20% 0px -70% 0px' });
sections.forEach(s => obs.observe(s));

// Focus mode: dim sections not currently in view
const allSections = document.querySelectorAll('main section');
let focusTicking = false;

function updateFocus() {
  const midY = window.innerHeight / 2;
  let activeSection = null;

  allSections.forEach(s => {
    const rect = s.getBoundingClientRect();
    if (rect.top <= midY && rect.bottom >= midY) activeSection = s;
  });

  if (!activeSection) {
    let minDist = Infinity;
    allSections.forEach(s => {
      const rect = s.getBoundingClientRect();
      const dist = Math.abs(rect.top + rect.height / 2 - midY);
      if (dist < minDist) { minDist = dist; activeSection = s; }
    });
  }

  allSections.forEach(s => s.classList.toggle('sec-dimmed', s !== activeSection));
  focusTicking = false;
}

window.addEventListener('scroll', () => {
  if (!focusTicking) { requestAnimationFrame(updateFocus); focusTicking = true; }
}, { passive: true });

updateFocus();
