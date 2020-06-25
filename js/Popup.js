import togglePopup from "./index.js";
import {popup, popupCloseButton} from "./constants.js";

export default class Popup
{
  constructor(popupSelector)
  {
    this._popupSelector = popupSelector;
  }
  open()
  {
    togglePopup(popup);
  }
  close()
  {
    togglePopup(popup);
  }
  _handleEscClose()
  {
    togglePopup(popup);
  }

  setEventListeners()
  {
    this.element.addEventListener("click", () =>
    {
      this.close();
    });

    popupCloseButton.addEventListener("click", () =>
    {
      this.close();
    });

    window.addEventListener('keyup', (evt) =>
    {
      if ( evt.key === 'Escape' ) {
        this._handleEscClose();
      }
    });
  }
}
