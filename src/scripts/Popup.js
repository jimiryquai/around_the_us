class Popup
{
  constructor(popupSelector)
  {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt.key));
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', () => this._handleEscClose);
  }

  _handleEscClose(key) {
    if (key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup')) {
        this.close(evt.target);
        evt.preventDefault();
      }
    });

    this._popupElement.querySelector('.popup__close')
      .addEventListener('click', (evt) => {
        this.close();
        evt.stopPropagation();
      });
    }
}

export default Popup;
