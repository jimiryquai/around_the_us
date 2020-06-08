import {togglePopup, imgPopup, figImage, figCaption} from './script.js';

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

  _setEventListeners() {
    this._element.querySelector(".card__image").addEventListener("click", () => {
      figImage.src = this._image;
      figImage.alt = this._title;
      figCaption.textContent = this._title;
      // open the popup
      togglePopup(imgPopup);
      });

    this._element.querySelector(".button_heart").addEventListener('click', () => {
      this._handleButtonHeartClick();
      });

    //trash button clicks
    this._element.querySelector(".button_trash").addEventListener("click", () => {
      this._handleButtonTrashClick();
      });
    }

  _handleButtonHeartClick() {
    this._element.querySelector(".button_heart").classList.toggle("button_heart_liked");
  }

  _handleButtonTrashClick() {
    this._element.remove();
  }
}
