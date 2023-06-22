function createElement(type, elemText, elemId, ...elemClasses) {
  const elem = document.createElement(`${type}`);

  elem.textContent = elemText;

  if (elemId !== '') {
    elem.id = elemId;
  }

  elemClasses.forEach((elemClass) => {
    if (elemClass !== '') {
      elem.classList.add(elemClass);
    }
  });

  return elem;
}

export default createElement;
