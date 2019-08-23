import Sorting from "../components/sorting";
import CardEdit from "../components/card-edit";
import DayList from "../components/day-list";
import Day from "../components/day";
import CardList from "../components/card-list";
import CardContainer from "../components/card-container";
import Card from "../components/card";
import {Position, render} from "../utils.js";

export default class TripController {
  constructor(container, cards) {
    this._container = container;
    this._cards = cards;
    this._dayList = new DayList();
    this._sorting = new Sorting();
    this._day = new Day();
    this._cardList = new CardList();
  }

  init() {
    if (this._cards.length) {
      render(this._container, this._sorting.getElement(), Position.BEFOREEND);
      render(this._container, this._dayList.getElement(), Position.BEFOREEND);
      render(this._dayList.getElement(), this._day.getElement(), Position.BEFOREEND);
      render(this._day.getElement(), this._cardList.getElement(), Position.BEFOREEND);

      this._cards.forEach((card) => {
        this._renderCard(card);
      });
    } else {
      this._container.insertAdjacentHTML(`beforeend`, `<p class="trip-events__msg">Click New Event to create your first point</p>`);
    }
    this._getTotalSum(this._cards);
  }

  _renderCard(cardMock) {
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

    render(this._cardList.getElement(), cardContainer.getElement(), Position.BEFOREEND);
    container = this._cardList.getElement().querySelector(`.trip-events__item:last-child`);
    render(container, card.getElement(), Position.BEFOREEND);
  }

  _getTotalSum(cardsItems) {
    const sumMain = cardsItems.map(({price}) => price).reduce((sum, current) => {
      return sum + current;
    }, 0);
    const allOffers = cardsItems.map(({offers}) => Array.from(offers));
    const appliedOffers = allOffers.map((item) => item.filter(({isApplied}) => isApplied));
    const offersPrices = appliedOffers.map((items) => items.map((item) => item.price));
    const offersPricesTotals = offersPrices.map((prices) => prices.reduce((sum, current) => {
      return sum + current;
    }, 0));
    const sumAdd = offersPricesTotals.reduce((sum, current) => {
      return sum + current;
    }, 0);
    const result = sumMain + sumAdd;
    const costContainer = document.querySelector(`.trip-info__cost-value`);
    costContainer.innerHTML = result;
  }
}
