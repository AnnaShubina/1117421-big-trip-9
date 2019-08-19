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
import cards from "./mocks/card.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripInfo = document.querySelector(`.trip-info`);
const navContainer = document.querySelector(`.trip-controls h2:first-child`);
const filterContainer = document.querySelector(`.trip-controls h2:last-child`);
const main = document.querySelector(`.trip-events`);

render(tripInfo, getTripInfoTemplate(cards), `afterBegin`);
render(navContainer, getMenuTemplate(), `afterEnd`);
render(filterContainer, getFilterTemplate(), `afterEnd`);
render(main, getSortingTemplate(), `beforeEnd`);
render(main, getDayListTemplate(), `beforeEnd`);

const dayList = main.querySelector(`.trip-days`);
render(dayList, getDayTemplate(), `beforeEnd`);

const day = dayList.querySelector(`.day`);
render(day, getCardListTemplate(), `beforeEnd`);

const cardList = main.querySelector(`.trip-events__list`);
render(cardList, getCardContainerTemplate(), `beforeEnd`);
let container = cardList.querySelector(`.trip-events__item:last-child`);
render(container, getCardEditTemplate(cards[0]), `beforeEnd`);

cards.slice(1).forEach((card) => {
  render(cardList, getCardContainerTemplate(), `beforeEnd`);
  container = cardList.querySelector(`.trip-events__item:last-child`);
  render(container, getCardTemplate(card), `beforeEnd`);
});

const costContainer = document.querySelector(`.trip-info__cost-value`);
const getTotalSum = (cardsItems) => {
  const sumMain = cardsItems.map(({price}) => price).reduce((sum, current) => {
    return sum + current;
  }, 0);
  const sumAdd = cards.map(({offers}) => offers).filter(({isApplied}) => isApplied).reduce((sum, current) => {
    return sum + current;
  }, 0);
  const result = sumMain + sumAdd;
  return result;
};
render(costContainer, getTotalSum(cards), `beforeEnd`);
