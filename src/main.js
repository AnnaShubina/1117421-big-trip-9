import {getTripInfoTemplate} from "./components/trip-info";
import {getMenuTemplate} from "./components/menu";
import {getFilterTemplate} from "./components/filter";
import {getSortingTemplate} from "./components/sorting";
import {getCardEditTemplate} from "./components/card-edit";
import {getCardListTemplate} from "./components/cart-list";
import {getCardTemplate} from "./components/card";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripInfo = document.querySelector(`.trip-info`);
const tripControls = document.querySelector(`.trip-controls`);
const tripControlsHeader = tripControls.querySelector(`h2`);
const main = document.querySelector(`.trip-events`);

render(tripInfo, getTripInfoTemplate(), `afterBegin`);
render(tripControlsHeader, getMenuTemplate(), `afterEnd`);
render(tripControls, getFilterTemplate(), `beforeEnd`);
render(main, getSortingTemplate(), `beforeEnd`);
render(main, getCardEditTemplate(), `beforeEnd`);
render(main, getCardListTemplate(), `beforeEnd`);

const cardList = main.querySelector(`.trip-days`);

for (let i = 0; i < 3; i++) {
  render(cardList, getCardTemplate(), `beforeEnd`);
}
