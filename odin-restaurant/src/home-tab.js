import createElement from './create-element';

function createHomeTab() {
  const homeCard = createElement('div', '', '', 'home-card');

  const homeCardImg = createElement('img', '', '', 'home-card-img');
  homeCardImg.src = 'img/chef.jpg';

  const homeCardText = createElement('div', '', '', 'home-card-text');
  const homeCardTitle = createElement('h2', 'WE HAVE THE BEST CHEFS!', '');
  const homeCardParagraph = createElement(
    'p',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sequi odit, numquam labore modi incidunt consectetur saepe.',
    ''
  );

  homeCardText.appendChild(homeCardTitle);
  homeCardText.appendChild(homeCardParagraph);

  homeCard.appendChild(homeCardImg);
  homeCard.appendChild(homeCardText);

  return homeCard;
}

export default createHomeTab;
