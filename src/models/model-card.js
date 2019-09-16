import {types} from "./model-types.js" ;

export default class ModelCard {
  constructor(data) {
    this.id = data[`id`];
    this.type = {
      id: data[`type`],
      title: types.find(({id}) => id === data[`type`]).title,
      type: types.find(({id}) => id === data[`type`]).type,
      placeholder: types.find(({id}) => id === data[`type`]).placeholder,
      offers: data[`offers`].map((offer) => {
        return {
          id: offer.title.toLowerCase().replace(/ +/g, ' ').trim(),
          title: offer.title,
          price:  offer.price
        }
      })
    };
    this.city = data[`destination`];
    this.startTime = data[`date_from`];
    this.endTime = data[`date_to`];
    this.price = data[`base_price`];
    this.isFavorite = Boolean(data[`is_favorite`]);
  }

  static parseCard(data) {
    return new ModelCard(data);
  }

  static parseCards(data) {
    return data.map(ModelCard.parseCard);
  }
};
