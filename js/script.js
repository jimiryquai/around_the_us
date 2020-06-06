import FormValidator from "./formValidator.js";
import Card from "./card.js";

const initialCards = [
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

const formConfig = ({
  inputSelector: ".form__input",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active"
});

//Profile inputs
const profile = document.querySelector('.profile');
const name = profile.querySelector('.profile__name');
const job = profile.querySelector('.profile__job');

//Global popup
const popup = document.querySelector('.popup');

// Edit form variables
const editPopup = document.querySelector('.popup_type_edit');
const nameInput = editPopup.querySelector('.form__input_name');
const jobInput = editPopup.querySelector('.form__input_job');

//Add form variables
const addPopup = document.querySelector('.popup_type_add');
const addForm = addPopup.querySelector('.form_type_add');
const titleInput = addPopup.querySelector('.form__input_title');
const urlInput = addPopup.querySelector('.form__input_url');

const cardsContainer = document.querySelector('.photo-grid');

const editFormValidator = new FormValidator(formConfig, editPopup);
const addFormValidator = new FormValidator(formConfig, addPopup);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

function renderCard (element) {
  const card = new Card(element, ".card-template").generateCard();
  cardsContainer.append(card);
}

// Edit form functions
function renderEditForm() {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

//Toggle popup function
// Function to open/close popup windows
function togglePopup(popup) {
  popup.classList.toggle( 'popup_opened' );

  popup.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'popup' ) ) {
        togglePopup(popup);
    }
  });

  // fires only once - when the user releases the key
  window.addEventListener('keyup', function (evt) {
    if ( evt.key === 'Escape' ) {
      togglePopup(popup);
    }
  });

  editPopup.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'popup__close_type_edit' ) ) {
        togglePopup(editPopup);
    }
  });

  addPopup.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'popup__close_type_add' ) ) {
        togglePopup(addPopup);
    }
  });
}

function submitEditForm (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    togglePopup(editPopup);
}

//Add form functions
function submitAddForm (evt) {
    evt.preventDefault();
    renderCard ({name: titleInput.value, link: urlInput.value});
    addForm.reset();
    togglePopup(addPopup);
}

//Event handlers
//Edit button clicks
profile.addEventListener('click', function (evt) {
  if ( evt.target.classList.contains( 'button_edit' ) ) {
      togglePopup(editPopup);
      renderEditForm();
  }
});

//Edit form submit
editPopup.addEventListener('submit', submitEditForm);

//Add button clicks
profile.addEventListener('click', function (evt) {
  if ( evt.target.classList.contains( 'button_add' ) ) {
      togglePopup(addPopup);
  }
});

//Add form submit
addPopup.addEventListener('submit', submitAddForm);

initialCards.forEach(element => renderCard(element));

renderEditForm();
