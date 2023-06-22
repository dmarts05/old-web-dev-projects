import createHomeTab from './home-tab';
import createMenuTab from './menu-tab';
import createContactTab from './contact-tab';

function clearTab() {
  const tab = document.querySelector('main');

  tab.classList.add('fade');

  setTimeout(() => {
    tab.childNodes.forEach((child) => {
      tab.removeChild(child);
    });
  }, 100);
}

function switchTab(e) {
  const tab = document.querySelector('main');

  // Remove current active link styling
  document.querySelector('.active').classList.remove('active');
  clearTab();

  setTimeout(() => {
    tab.classList.remove('fade');
    const selectedTab = e.target;
    selectedTab.parentNode.classList.add('active');

    switch (selectedTab.id) {
      case 'home-link':
        tab.appendChild(createHomeTab());
        break;
      case 'menu-link':
        tab.appendChild(createMenuTab(8));
        break;
      case 'contact-link':
        tab.appendChild(createContactTab());
        break;
      default:
        break;
    }
  }, 100);
}

function enableTabSwitching() {
  const menuLinks = document.querySelectorAll('.nav-menu li');

  menuLinks.forEach((link) => link.addEventListener('click', switchTab));
}

export default enableTabSwitching;
