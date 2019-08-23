import AbstractComponent from '../components/absctract-component.js';

export default class CardContainer extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `
      <li class="trip-events__item">
      </li>
    `.trim();
  }
}
