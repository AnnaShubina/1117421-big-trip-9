import AbstractComponent from '../components/absctract-component.js';
import {monthNames} from '../utils.js';

export default class Day extends AbstractComponent {
  constructor(cards, date, number) {
    super();
    this._date = new Date(+date);
    this._cards = cards;
    this._number = number;
  }

  getTemplate() {
    return `
      <li class="trip-days__item  day">
        <div class="day__info">
          ${this._number !== undefined ? `
          <span class="day__counter">${this._number + 1}</span>
          <time class="day__date" datetime="${this._date.toISOString().split(`T`)[0]}">
            ${monthNames[this._date.getMonth()]} ${this._date.getDate()}
          </time>` : ``}
        </div>
        <ul class="trip-events__list">
          ${this._cards.map(() => `<li class="trip-events__item"></li>`).join(``)}
        </ul>
      </li>
    `.trim();
  }
}
