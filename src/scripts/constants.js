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
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
});

// Buttons
export const editButton = document.querySelector('.button_edit');
export const addButton = document.querySelector('.button_add');

// Popups
export const editPopup = document.querySelector('.popup_type_edit');
export const addPopup = document.querySelector('.popup_type_add');

//Form inputs
export const nameInput = editPopup.querySelector('.form__input_name');
export const jobInput = editPopup.querySelector('.form__input_job');
