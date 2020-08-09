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
  deleteButtonSelector: ".button_delete",
  inactiveButtonClass: "button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
});

// export const forms = Array.from(document.querySelectorAll(formConfig.formSelector));
// Buttons
export const editButton = document.querySelector('.button_edit');
export const addButton = document.querySelector('.button_add');
export const avatarButton = document.querySelector('.button_avatar');

// Popups
export const editPopup = document.querySelector('.popup_type_edit');
export const addPopup = document.querySelector('.popup_type_add');
export const avatarPopup = document.querySelector('.popup_type_avatar');

//Form inputs
export const nameInput = editPopup.querySelector('.form__input_name');
export const jobInput = editPopup.querySelector('.form__input_job');
// export const avatarInput = editPopup.querySelector('.form__input_avatar');
