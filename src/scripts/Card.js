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
      this._handleDeleteClick(this.id()));
    }

  _handleButtonHeartClick() {
    const buttonHeart = this._element.querySelector(".button_heart");
      //check if heart and like should be added or removed.
      if (buttonHeart.classList.contains("button_heart_liked")) {
        this._cardClicked = true;
      } else {
        this._cardClicked = false;
      }

      if (this._cardClicked) {
        buttonHeart.classList.toggle("button_heart_liked");
        this.removeLike();
        this._handleLikeClick({
          id: this._id,
        })
        this._cardClicked = false;
      } else {
        buttonHeart.classList.toggle("button_heart_liked");
        this.addLike();
        this._handleLikeClick({
          id: this._id,
        })
        this._cardClicked = true;
      }
  }

  addLike() {
    this._element.querySelector('.card__likes').textContent = this._totalLikes;
  }
  removeLike() {
    this._element.querySelector('.card__likes').textContent = this._totalLikes;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners(); // call the _setEventListeners

    if (this._owner !== this._user) {
      this._element.querySelector('.button_trash').style.display = "none";
    }

    this._element.querySelector(".card__title").textContent = this._name;
    const cardImage = this._element.querySelector(".card__image");
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._element.querySelector('.card__likes').textContent = this._totalLikes;

    return this._element;
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }
}

export default Card;
