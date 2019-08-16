export const getFilterTemplate = (filterItems) => {
  return `
    <form class="trip-filters" action="#" method="get">
      ${filterItems.map((item) => `
        <div class="trip-filters__filter">
          <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
          <label class="trip-filters__filter-label" for="filter-everything">${item}</label>
        </div>`).join(``)}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `.trim();
};
