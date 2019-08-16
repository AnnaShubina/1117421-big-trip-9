export const getCardTemplate = ({type, city, startTime, endTime, price, offers}) => {
  return `
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type.title.toLowerCase()}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type.title} ${type.placeholder} ${city}</h3>

      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${new Date(startTime).toISOString()}">${new Date(startTime).getHours(startTime)}:${new Date().getMinutes()}</time>
          &mdash;
          <time class="event__end-time" datetime="${new Date(endTime).toISOString()}">${new Date(endTime).getHours()}:${new Date(endTime).getMinutes()}</time>
        </p>
        <p class="event__duration">
        </p>
      </div>

      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>

      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${Array.from(offers).filter(({isApplied}) => isApplied).map(({title, price}, i) => i < 2 ? `
        <li class="event__offer">
          <span class="event__offer-title">${title}</span>
          &plus;
          &euro;&nbsp;<span class="event__offer-price">${price}</span>
         </li>
        ` : ``).join(``)}
      </ul>

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  `.trim();
};