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

// Edit form variables
export const editPopup = document.querySelector('.popup_type_edit');
export const nameInput = editPopup.querySelector('.form__input_name');
export const jobInput = editPopup.querySelector('.form__input_job');

//Add form variables
export const addPopup = document.querySelector('.popup_type_add');
export const addForm = addPopup.querySelector('.form_type_add');
export const titleInput = addPopup.querySelector('.form__input_title');
export const urlInput = addPopup.querySelector('.form__input_url');

export const cardsContainer = document.querySelector('.photo-grid');

export const editFormValidator = new FormValidator(formConfig, editPopup);
export const addFormValidator = new FormValidator(formConfig, addPopup);

export const imgPopup = document.querySelector('.popup_type_image');
export const figImage = imgPopup.querySelector('.popup__image');
export const figCaption = imgPopup.querySelector('.popup__caption');
export const popup = document.querySelector('.popup');
export const popupCloseButton = document.querySelector('.popup__close');
