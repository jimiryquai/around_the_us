import Popup from "./Popup.js";
import imgPopup from "./constants.js"
export default class PopupWithImage extends Popup
{
  constructor(data, popupSelector)
  {
    super(popupSelector);
		this._text = data.text;
    this._image = data.image;
  }

  generatePopup() {
    super._getTemplate();
    super._setEventListeners();

    this._element.querySelector(".popup__image").src = this._image;
    this._element.querySelector(".popup__image").alt = this._text;
    this._element.querySelector(".popup__caption").textContent = this._text;


  	return this._element;
  }
}
