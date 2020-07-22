import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor( {popupSelector, handleAddCard }) {
    super(popupSelector);
    this._handleAddCard = handleAddCard;
    this._form = this._popupElement.querySelector('.form');
  }

  _getInputValues() {
    return Object.fromEntries(new FormData(this._form));
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      // evt.preventDefault();
      this._handleAddCard(this._getInputValues());
      this.close();
      // evt.stopPropagation();
    });
  }

  close() {
    this._form.reset();
    super.close();
  }
}

export default PopupWithForm;
