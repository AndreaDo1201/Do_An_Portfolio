export function hamburger() {

  const hamburgerBtn = document.querySelector('#hamburger');
  const mobileNav    = document.querySelector('#mobile-nav');
  const navLinks     = document.querySelectorAll('#mobile-nav a');

  if (!hamburgerBtn || !mobileNav) return;

  const iconBars  = hamburgerBtn.querySelector('.icon-bars');
  const iconClose = hamburgerBtn.querySelector('.icon-close');

  const openMenu = () => {
    mobileNav.classList.add('nav-open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    if (iconBars)  iconBars.style.display  = 'none';
    if (iconClose) iconClose.style.display = 'block';
  };

  const closeMenu = () => {
    mobileNav.classList.remove('nav-open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    if (iconBars)  iconBars.style.display  = 'block';
    if (iconClose) iconClose.style.display = 'none';
  };

  const toggleMenu = () => {
    const isOpen = mobileNav.classList.contains('nav-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  navLinks.forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('click', (e) => {
    const clickedOutside = !mobileNav.contains(e.target) && !hamburgerBtn.contains(e.target);
    if (clickedOutside) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

}