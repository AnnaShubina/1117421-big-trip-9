import {createElement} from '../utils.js';

export default class CardContainer {
  constructor() {
    this._element = null;
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
      <li class="trip-events__item">
      </li>
    `.trim();
  }
}
