import createElement from "./create-element";

function createNavBar() {
  const navBar = createElement('nav', '', '');

  const logoWrapper = createElement('div', '', '', 'logo-wrapper');
  const logoImg = createElement('img', '', '', 'logo-img');
  logoImg.src = 'img/logo.png';
  const logoTitle = createElement('h1', 'RESTAURANT', '');

  logoWrapper.appendChild(logoImg);
  logoWrapper.appendChild(logoTitle);

  const navMenu = createElement('ul', '', '', 'nav-menu');
  const homeLink = createElement('li', '', '', 'active');
  homeLink.appendChild(createElement('a', 'HOME', 'home-link'));
  const menuLink = createElement('li', '', '');
  menuLink.appendChild(createElement('a', 'MENU', 'menu-link'));
  const contactLink = createElement('li', '', '');
  contactLink.appendChild(createElement('a', 'CONTACT', 'contact-link'));

  navMenu.appendChild(homeLink);
  navMenu.appendChild(menuLink);
  navMenu.appendChild(contactLink);

  navBar.appendChild(logoWrapper);
  navBar.appendChild(navMenu);

  return navBar;
}

export default createNavBar;