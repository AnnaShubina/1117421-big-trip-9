import AbstractComponent from '../components/absctract-component.js';

export default class CardList extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `
      <ul class="trip-events__list">
      </ul>
    `.trim();
  }
}
