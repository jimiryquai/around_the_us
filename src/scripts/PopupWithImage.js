import Popup from "./Popup.js";
class PopupWithImage extends Popup
{

  open({name, link}) {
    this._popupElement.querySelector(".popup__caption").textContent = name;
    const popupImage = this._popupElement.querySelector(".popup__image");
    popupImage.src = link;
    popupImage.alt = name;
    super.open();
  }

}

export default PopupWithImage;
