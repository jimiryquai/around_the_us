class Popup
{
  constructor(popupSelector)
  {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.which === 27) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup')) {
        this.close(e.target);
        e.preventDefault();
      }
    });

    this._popupElement.querySelector('.popup__close')
      .addEventListener('click', (e) => {
        this.close();
        e.stopPropagation();
      });
    }
}

export default Popup;
