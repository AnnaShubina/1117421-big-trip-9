import {monthNames, createElement} from '../utils.js';

export default class TripInfo {
  constructor(cards) {
    this._element = null;
    this._cards = cards;
  }

  getCitiesCount(cards) {
    const cities = cards.map(({city}) => city);
    const uniqCities = new Set(cities);
    return uniqCities.size;
  }

  getCityTemplate(cards) {
    const count = this.getCitiesCount(cards);
    let result;
    switch (count) {
      case 2:
        result = ``;
        break;
      case 3:
        result = `${cards[1].city} &mdash;`;
        break;
      default:
        result = `... &mdash;`;
    }
    return result;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `
      <div class="trip-info__main"> 
        <h1 class="trip-info__title">${this._cards[0].city} &mdash;
         ${this.getCityTemplate(this._cards)}
         ${this._cards[this._cards.length - 1].city}</h1>
        <p class="trip-info__dates">
        ${monthNames[new Date(this._cards[0].startTime).getMonth()]} ${new Date(this._cards[0].startTime).getDay()}
        &nbsp;&mdash;&nbsp;
        ${monthNames[new Date(this._cards[this._cards.length - 1].endTime).getMonth()]} ${new Date(this._cards[this._cards.length - 1].endTime).getDay()}
        </p>
      </div>`.trim();
  }
}
