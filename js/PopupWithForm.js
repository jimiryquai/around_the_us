import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this._callback = callback;
    this._form = this._popupElement.querySelector('.form');
    this._name = this._form.querySelector('.form__input_name');
    this._job = this._form.querySelector('.form__input_job');
  }

  _getInputValues() {
    const data = {
      nameValue: this._name.value,
      jobValue: this.job.value
    };
    return data;
  };


  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.stopPropagation();
      const inputValues = this._getInputValues();
      this._callback(inputValues.nameValue, inputValues.jobValue);
      this._popupElement.reset();
      this.close();
    });
    this._popupElement
      .querySelector(".popup__close")
      .addEventListener("click", () => {
        this.close();
      });
    super.setEventListeners();
  }

  close() {
    super.close();
  }
}

export default PopupWithForm;
