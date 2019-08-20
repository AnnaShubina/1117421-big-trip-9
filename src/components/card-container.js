export default class CardContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return `
      <li class="trip-events__item">
      </li>
    `.trim();
  }
}
