class Popup
{
  constructor(popupSelector)
  {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    //add event listener for Esc
    this.setEventListeners();
  }

  setEventListeners() {
    document.addEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
      evt.stopPropagation();
    }
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
    this._popupElement
      .querySelector(".popup__close")
      .removeEventListener("click", this.close);
  }
}

export default Popup;
