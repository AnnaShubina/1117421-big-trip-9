export const getMenuTemplate = (menuItems) => {
  return `
    <nav class="trip-controls__trip-tabs  trip-tabs">
    ${menuItems.map((item) => ` <a class="trip-tabs__btn" href="#">${item}</a>`).join(``)}
    </nav>
  `.trim();
};
