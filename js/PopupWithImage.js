import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
	constructor(data, popupSelector) {
    super(popupSelector);
		this._text = data.text;
		this._image = data.image;
	}


  }
