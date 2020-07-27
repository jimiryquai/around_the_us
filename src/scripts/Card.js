class Card {
  constructor({ data, handleCardClick, handleCardDelete }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._owner = data.owner._id;
    this._likes = data.likes;
    this._user = data.likes._id;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
    this._handleCardDelete = handleCardDelete;
  }

  id() {
    return this._id;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector(".card__image")
    .addEventListener ('click', () =>
      this._handleCardClick({
        name: this._name,
        link: this._link
      }));

    this._element.querySelector(".button_heart")
    .addEventListener('click', () =>
      this._handleButtonHeartClick());

    //trash button clicks
    this._element.querySelector(".button_trash")
    .addEventListener("click", () =>
      this._handleCardDelete(this));
    }

  _handleButtonHeartClick() {
    this._element.querySelector(".button_heart")
    .classList.toggle("button_heart_liked");
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners(); // call the _setEventListeners
    this._element.querySelector(".card__title").textContent = this._name;
    const cardImage = this._element.querySelector(".card__image");
    cardImage.src = this._link;
    cardImage.alt = this._name;

    return this._element;
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }
}

export default Card;
