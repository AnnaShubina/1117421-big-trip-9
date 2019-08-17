const getCitiesCount = (cards) => {
  const cities = cards.map(({city}) => city);
  const uniqCities = new Set(cities);
  return uniqCities.size;
};
const monthNames = {
  1: `JUN`,
  2: `FEB`,
  3: `MAR`,
  4: `APR`,
  5: `MAY`,
  6: `JUN`,
  7: `JUL`,
  8: `AUG`,
  9: `SEP`,
  10: `OCT`,
  11: `NOV`,
  12: `DEC`
};
export const getTripInfoTemplate = (cards) => {
  return `
    <div class="trip-info__main"> 
      ${getCitiesCount(cards) > 2 ? `
      <h1 class="trip-info__title">${cards[0].city} &mdash; ... &mdash; ${cards[cards.length - 1].city}</h1>
      ` : ` <h1 class="trip-info__title">${cards[0].city} &mdash; ${cards[cards.length - 1].city}</h1>`} 
      <p class="trip-info__dates">
      ${monthNames[new Date(cards[0].startTime).getMonth()]} ${new Date(cards[0].startTime).getDay()}
      &nbsp;&mdash;&nbsp;
      ${monthNames[new Date(cards[cards.length - 1].endTime).getMonth()]} ${new Date(cards[cards.length - 1].endTime).getDay()}
      </p>
    </div>`.trim();
};
