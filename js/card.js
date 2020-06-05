const items = [
  {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
      name: "Vanois National Park",
      link: "https://code.s3.yandex.net/web-code/vanois.jpg"
  },
  {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const imgPopup = document.querySelector('.popup_type_image');
const figImage = imgPopup.querySelector('.popup__image');
const figCaption = imgPopup.querySelector('.popup__caption');
const popupCloseButton = imgPopup.querySelector('.popup__close_type_image');
const cardLove =  document.querySelector('.button_heart');
const cardTrash =  document.querySelector('.button_trash');

export default class Card {
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
    this._setEventListeners(); // call the _setEventListeners
    this._element.querySelector(".card__image").src = this._image;
    this._element.querySelector(".card__image").alt = this._title;
    this._element.querySelector(".card__title").textContent = this._title;

    return this._element;
  }

  _handleOpenPopup() {
    figImage.src = this._image;
    figCaption.textContent = this._title;
    imgPopup.classList.add("popup_opened");
  }

  _handleClosePopup() {
    figImage.src = "";
    imgPopup.classList.remove("popup_opened");
  }

  _handleButtonHeartClick() {
    this._element.querySelector(".button_heart").classList.toggle("button_heart_liked");
  }

  _handleButtonTrashClick() {
    this._element.remove();
  }


  _setEventListeners() {
  this._element.querySelector(".card__image").addEventListener("click", () => {
    // open the popup
    this._handleOpenPopup();
    });

  popupCloseButton.addEventListener("click", () => {
    // close the popup
    this._handleClosePopup();
    });

  this._element.querySelector(".button_heart").addEventListener('click', () => {
    this._handleButtonHeartClick();
    });

  //trash button clicks
  this._element.querySelector(".button_trash").addEventListener("click", () => {
    this._handleButtonTrashClick();
    });
  }
}

items.forEach((item) => {
  const card = new Card(item, ".card-template");
  const cardElement = card.generateCard();

  // Add to the DOM
  document.querySelector(".photo-grid").append(cardElement);
});
