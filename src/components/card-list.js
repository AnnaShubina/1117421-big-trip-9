export default class CardList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return `
      <ul class="trip-events__list">
      </ul>
    `.trim();
  }
}
