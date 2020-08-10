import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor( {popupSelector, handleFormSubmit, submitButtonText }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector('.form');
    this._submitButton = this._form.querySelector('.button_delete');
    this._submitButtonText = submitButtonText;
  }

  _getInputValues() {
    return Object.fromEntries(new FormData(this._form));
  };


  setEventListeners() {
    super.setEventListeners();
    // this._submitButton.textContent = submitButtonText;
    this._form.addEventListener("submit", (e) => {
      this._handleFormSubmit(this._getInputValues(e));
      this.close();
      e.stopPropagation();
    });
  }

  close() {
    this._form.reset();
    super.close();
  }
    // function the changes default _handleFormSubmit wich was passed
  // inside on the new PopupWithForm  step
  setSubmitHandler(newHandler) {
    this._handleFormSubmit = newHandler;
  } 
}

export default PopupWithForm;
