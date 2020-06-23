import togglePopup from "./index.js";
import {popup, popupCloseButton} from "./constants.js";

export default class Section
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
  _handleEscClose(evt)
  {
    if ( evt.key === 'Escape' )
    {
      togglePopup(popup);
    }
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

    window.addEventListener('keyup', evt =>
    {
      this._handleEscClose(evt);
    });

  }
}
