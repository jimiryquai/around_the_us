class Card {
  constructor(name, link, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    .addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._element.querySelector(".button_heart")
    .addEventListener('click', () => {
      this._handleButtonHeartClick();
      });

    //trash button clicks
    this._element.querySelector(".button_trash")
    .addEventListener("click", () => {
      this._handleButtonTrashClick();
      });
    }

  _handleButtonHeartClick() {
    this._element.querySelector(".button_heart")
    .classList.toggle("button_heart_liked");
  }

  _handleButtonTrashClick() {
    this._element.remove();
  }


  generateCard() {

    this._element = this._getTemplate();
    this._setEventListeners(); // call the _setEventListeners
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;

    return this._element;
  }
}

export default Card;
