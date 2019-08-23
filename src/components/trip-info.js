import {monthNames} from '../utils.js';
import AbstractComponent from '../components/absctract-component.js';

export default class TripInfo extends AbstractComponent {
  constructor(cards) {
    super();
    this._cards = cards;
  }

  getRouteTemplate(cards) {
    const cities = cards.map(({city}) => city);
    const count = cities.length;
    let result;
    switch (count) {
      case 2:
        result = `<h1 class="trip-info__title">${cities[0]} &mdash; ${cities[1]}</h1>`;
        break;
      case 3:
        result = `<h1 class="trip-info__title">${cities[0]} &mdash; ${cities[1]} &mdash; ${cities[2]}</h1>`;
        break;
      default:
        result = `<h1 class="trip-info__title">${cities[0]} &mdash; ... &mdash; ${cities[cities.length - 1]}</h1>`;
    }
    return result;
  }

  getTemplate() {
    return `
      <div class="trip-info__main"> 
        ${this._cards.length ? `${this.getRouteTemplate(this._cards)}` : ``}
        <p class="trip-info__dates">
        ${this._cards.length ? `
          ${monthNames[new Date(this._cards[0].startTime).getMonth()]} ${new Date(this._cards[0].startTime).getDay()}
          &nbsp;&mdash;&nbsp;
          ${monthNames[new Date(this._cards[this._cards.length - 1].endTime).getMonth()]} ${new Date(this._cards[this._cards.length - 1].endTime).getDay()}` : ``}
        </p>
      </div>`.trim();
  }
}
