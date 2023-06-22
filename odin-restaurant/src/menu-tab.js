import createElement from './create-element';

function createMenuTab(numMenuItems) {
  const menuWrapper = createElement('div', '', '', 'menu-wrapper');

  for (let i = 0; i < numMenuItems; i++) {
    const menuItem = createElement('div', '', '', 'menu-item');

    const menuItemImg = createElement('img', '', '', 'menu-item-img');
    menuItemImg.src = 'img/food.png';
    const menuItemTitle = createElement('h2', 'FOOD', '');

    menuItem.appendChild(menuItemImg);
    menuItem.appendChild(menuItemTitle);

    menuWrapper.appendChild(menuItem);
  }

  return menuWrapper;
}

export default createMenuTab;
