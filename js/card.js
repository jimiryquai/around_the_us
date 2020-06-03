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

const popup = document.querySelector('.popup');
const imgPopup = document.querySelector('.popup_type_image');
const figImage = imgPopup.querySelector('.popup__image');
const figCaption = imgPopup.querySelector('.popup__caption');
const popupCloseButton = imgPopup.querySelector('.popup__close_type_image');

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
    const cardTitle =  cardElement.querySelector('.card__title');
    const cardLove =  cardElement.querySelector('.button_heart');
    const cardTrash =  cardElement.querySelector('.button_trash');

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
    popup.classList.add("popup_opened");
  }

  _handleClosePopup() {
    figImage.src = "";
    popup.classList.remove("popup_opened");
    }

  _setEventListeners() {
  this._element.addEventListener("click", () => {
    // open the popup
    _handleOpenPopup();
    });

  popupCloseButton.addEventListener("click", () => {
    // close the popup
    _handleClosePopup();
    });

  cardLove.addEventListener('click', function (evt) {
      evt.target.classList.toggle('button_heart_liked');
    });

  //trash button clicks
  cardTrash.addEventListener('click', function (evt) {
      evt.target.parentElement.remove();
    });
  }
}

items.forEach((item) => {
  const card = new Card(item, ".card");
  const cardElement = card.generateCard();

  // Add to the DOM
  document.querySelector(".photo-grid").append(cardElement);
});
