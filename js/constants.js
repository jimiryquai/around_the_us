import FormValidator from "./FormValidator.js";

export const initialCards = [
  {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
      name: "Vanois National Park",
      link: "https://code.s3.yandex.net/web-code/vanois.jpg"
  },
  {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

export const formConfig = ({
  inputSelector: ".form__input",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active"
});

//Profile inputs
export const profile = document.querySelector('.profile');
export const name = profile.querySelector('.profile__name');
export const job = profile.querySelector('.profile__job');

// Popups
export const editPopup = document.querySelector('.popup_type_edit');
export const addPopup = document.querySelector('.popup_type_add');
export const popup = document.querySelector('.popup');

//Form inputs
export const titleInput = addPopup.querySelector('.form__input_title');
export const urlInput = addPopup.querySelector('.form__input_url');
export const nameInput = editPopup.querySelector('.form__input_name');
export const jobInput = editPopup.querySelector('.form__input_job');

//Add form variables

export const addForm = addPopup.querySelector('.form_type_add');


export const cardsContainer = '.photo-grid';

export const popupCloseButton = document.querySelector('.popup__close');
export const imgPopupClose = document.querySelector('.popup__close_type_img');
