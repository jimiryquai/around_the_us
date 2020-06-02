class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".card__image").src = `url(${this._image})`;
    this._element.querySelector(".card__image").alt = this._title;
    this._element.querySelector(".card__title").textContent = this._title;

    return this._element;
  }
}

initialCards.forEach((card) => {
  const card = new Card(item, ".card");
  const cardElement = card.generateCard();

  // Add to the DOM
  document.querySelector(".photo-grid").append(cardElement);
});

