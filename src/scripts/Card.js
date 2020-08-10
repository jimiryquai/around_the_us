class Card {
  constructor({ data, handleCardClick, handleDeleteClick, handleLikeClick, userId  }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._owner = data.owner._id;
    this._likes = data.likes;
    this._totalLikes = data.likes.length;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._user = userId

    this._cardSelector = cardSelector;
    this._element = this._getTemplate();
    this.likeButton = this._element.querySelector('.button_heart');
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

  _manageLikes() {
    if (this._likes.some((like) => like._id === this._user)) {
      this._element.querySelector('.button_heart').classList.add('button_heart_liked');
    }
  }

    likeCount(num) {
      this._element.querySelector(".card__likes").textContent = num;
    }

  _setEventListeners() {
    this._element.querySelector(".card__image")
    .addEventListener ('click', () =>
      this._handleCardClick({
        name: this._name,
        link: this._link
      }));

      this.likeButton.addEventListener('click', () =>
        this._handleLikeClick(this._id));

    //trash button clicks
    this._element.querySelector(".button_trash")
    .addEventListener("click", () =>
      this._handleDeleteClick(this.id()));
    }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._manageLikes();
    this.likeCount(this._likes.length);

    if (this._owner !== this._user) {
      this._element.querySelector('.button_trash').style.display = "none";
    }

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
