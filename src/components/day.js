import AbstractComponent from '../components/absctract-component.js';

export default class Day extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `
      <li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">1</span>
          <time class="day__date" datetime="2019-03-18">MAR 18</time>
        </div>
      </li>
    `.trim();
  }
}
