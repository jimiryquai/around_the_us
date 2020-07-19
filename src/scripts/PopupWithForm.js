import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this._callback = callback;
    this._form = this._popupElement.querySelector('.form');
  }

  _getInputValues() {
    return Object.fromEntries(new FormData(this._form));
  };

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callback(this._getInputValues());
      this.close();
      evt.stopPropagation();
    });
  }
}

export default PopupWithForm;
