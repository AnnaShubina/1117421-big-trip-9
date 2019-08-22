import TripInfo from "./components/trip-info";
import Menu from "./components/menu";
import Filter from "./components/filter";
import Sorting from "./components/sorting";
import CardEdit from "./components/card-edit";
import DayList from "./components/day-list";
import Day from "./components/day";
import CardList from "./components/card-list";
import CardContainer from "./components/card-container";
import Card from "./components/card";
import cards from "./mocks/card.js";
import {Position, render} from "./utils.js";

const tripInfoContainer = document.querySelector(`.trip-info`);
const navHeader = document.querySelector(`.trip-controls h2:first-child`);
const filterHeader = document.querySelector(`.trip-controls h2:last-child`);
const mainContainer = document.querySelector(`.trip-events`);

const tripInfo = new TripInfo(cards);
const menu = new Menu();
const filter = new Filter();
const dayList = new DayList();
const sorting = new Sorting();
const day = new Day();
const cardList = new CardList();

render(navHeader, menu.getElement(), Position.AFTER);
render(filterHeader, filter.getElement(), Position.AFTER);

const renderCard = (cardMock) => {
  const cardContainer = new CardContainer();
  const card = new Card(cardMock);
  const cardEdit = new CardEdit(cardMock);
  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      container.replaceChild(card.getElement(), cardEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };
  let container;

  card.getElement()
    .querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      container.replaceChild(cardEdit.getElement(), card.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  cardEdit.getElement()
    .addEventListener(`submit`, () => {
      container.replaceChild(card.getElement(), cardEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  render(cardList.getElement(), cardContainer.getElement(), Position.BEFOREEND);
  container = cardList.getElement().querySelector(`.trip-events__item:last-child`);
  render(container, card.getElement(), Position.BEFOREEND);
};

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

if (cards.length) {
  render(tripInfoContainer, tripInfo.getElement(), Position.AFTERBEGIN);
  render(mainContainer, sorting.getElement(), Position.BEFOREEND);
  render(mainContainer, dayList.getElement(), Position.BEFOREEND);
  render(dayList.getElement(), day.getElement(), Position.BEFOREEND);
  render(day.getElement(), cardList.getElement(), Position.BEFOREEND);

  cards.forEach((card) => {
    renderCard(card);
  });

  costContainer.innerHTML = getTotalSum(cards);
} else {
  mainContainer.insertAdjacentHTML(`beforeend`, `<p class="trip-events__msg">Click New Event to create your first point</p>`);
}
