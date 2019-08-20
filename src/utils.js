const monthNames = {
  1: `JUN`,
  2: `FEB`,
  3: `MAR`,
  4: `APR`,
  5: `MAY`,
  6: `JUN`,
  7: `JUL`,
  8: `AUG`,
  9: `SEP`,
  10: `OCT`,
  11: `NOV`,
  12: `DEC`
};

const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

const render = (container, element, place) => {
    switch (place) {
      case Position.AFTERBEGIN:
        container.prepend(element);
        break;
      case Position.BEFOREEND:
        container.append(element);
        break;
    }
  };
  
  const unrender = (element) => {
    if (element) {
      element.remove();
    }
  };

export {monthNames, Position, createElement, render, unrender};
