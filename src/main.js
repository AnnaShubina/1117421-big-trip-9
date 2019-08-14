import {getTripInfoTemplate} from "./components/trip-info";
import {getMenuTemplate} from "./components/menu";
import {getFilterTemplate} from "./components/filter";
import {getSortingTemplate} from "./components/sorting";
import {getCardEditTemplate} from "./components/card-edit";
import {getDayListTemplate} from "./components/day-list";
import {getDayTemplate} from "./components/day";
import {getCardListTemplate} from "./components/card-list";
import {getCardContainerTemplate} from "./components/card-container";
import {getCardTemplate} from "./components/card";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripInfo = document.querySelector(`.trip-info`);
const navContainer = document.querySelector(`.trip-controls h2:first-child`);
const filterContainer = document.querySelector(`.trip-controls h2:last-child`);
const main = document.querySelector(`.trip-events`);

render(tripInfo, getTripInfoTemplate(), `afterBegin`);
render(navContainer, getMenuTemplate(), `afterEnd`);
render(filterContainer, getFilterTemplate(), `afterEnd`);
render(main, getSortingTemplate(), `beforeEnd`);
render(main, getCardEditTemplate(), `beforeEnd`);
render(main, getDayListTemplate(), `beforeEnd`);

const dayList = main.querySelector(`.trip-days`);
render(dayList, getDayTemplate(), `beforeEnd`);

const day = dayList.querySelector(`.day`);
render(day, getCardListTemplate(), `beforeEnd`);

const cardList = main.querySelector(`.trip-events__list`);

const CARD_AMOUNT = 3;

for (let i = 0; i < CARD_AMOUNT; i++) {
  render(cardList, getCardContainerTemplate(), `beforeEnd`);
  let container = cardList.querySelector(`.trip-events__item:last-child`);
  render(container, getCardTemplate(), `beforeEnd`);
}
