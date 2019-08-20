export default class DayList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return `
      <ul class="trip-days">
      </ul>
    `.trim();
  }
}
