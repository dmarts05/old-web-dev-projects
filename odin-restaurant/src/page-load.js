import createElement from './create-element';
import createNavBar from './navbar';
import createHomeTab from './home-tab';
import enableTabSwitching from './tab-switching';

function loadPage() {
  const content = document.getElementById('content');

  content.appendChild(createNavBar());

  const main = createElement('main', '', '');
  main.appendChild(createHomeTab());

  content.appendChild(main);

  enableTabSwitching();
}

export default loadPage;
