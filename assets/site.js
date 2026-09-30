document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');

if (menuButton && menu) {
  const mobile = window.matchMedia('(max-width: 800px)');
  const syncMenu = () => {
    menu.hidden = mobile.matches;
    menuButton.setAttribute('aria-expanded', String(!menu.hidden));
  };
  syncMenu();
  mobile.addEventListener('change', syncMenu);
  menuButton.addEventListener('click', () => {
    menu.hidden = !menu.hidden;
    menuButton.setAttribute('aria-expanded', String(!menu.hidden));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden && mobile.matches) {
      menu.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.focus();
    }
  });
}
