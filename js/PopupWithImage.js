import Popup from "./Popup.js";
class PopupWithImage extends Popup
{
  constructor(popupSelector)
  {
    super(popupSelector);
  }

  setEventListeners()
  {
    document.addEventListener("click", () =>
    {
      super.close();
    });
    super.setEventListeners();
  }

  open(name, link) {
    this._popupElement.querySelector(".popup__image").src = link;
    this._popupElement.querySelector(".popup__image").alt = name;
    this._popupElement.querySelector(".popup__caption").textContent = name;
    super.open();
  }

}

export default PopupWithImage;
