const getCitiesCount = (cards) => {
  const cities = cards.map(({city}) => city);
  const uniqCities = new Set(cities);
  return uniqCities.size;
};
export const getTripInfoTemplate = (cards) => {
  return `
    <div class="trip-info__main"> 
      ${getCitiesCount(cards) > 2 ? `
      <h1 class="trip-info__title">${cards[0].city} &mdash; ... &mdash; ${cards[cards.length - 1].city}</h1>
      ` : ` <h1 class="trip-info__title">${cards[0].city} &mdash; ${cards[cards.length - 1].city}</h1>`} 
      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;21</p>
    </div>`.trim();
};
