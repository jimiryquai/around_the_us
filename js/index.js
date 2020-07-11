import {
  titleInput,
  urlInput,
  profileName,
  profileJob,
  editPopup,
  addPopup,
  addForm,
  nameInput,
  jobInput,
  initialCards,
  cardsContainer,
  formConfig,
  editButton,
  addButton
}
from "./constants.js";

import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import FormValidator from "./FormValidator.js";
import UserInfo from "./UserInfo.js";
////////////////////////////////
const userInfo = new UserInfo(".profile__name", ".profile__job");
const imgPopup = new PopupWithImage(".popup_type_image");
imgPopup.setEventListeners();

// profile popup

const handleProfileEdit = (name, job) => {
  userInfo.setUserInfo(name, job);
}

const editFormPopup = new PopupWithForm(".popup_type_edit", handleProfileEdit);
editFormPopup.setEventListeners();

// add Popup
const handleAddCard = (imageTitle, imageLink) => {
  const handleCardClick = (imageTitle, imageLink) => {
    addFormPopup.open(imageTitle, imageLink);
  };

  const card = new Card(imageTitle, imageLink, '.card-template', handleCardClick).generateCard();
  cardsList.addItem(card);
}


const addFormPopup = new PopupWithForm(".popup_type_add", handleAddCard);
addFormPopup.setEventListeners();

//Create Section and Initial Cards
const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const handleCardClick = (itemName, itemLink) => {
      imgPopup.open(itemName, itemLink);
    };
    const card = new Card(item.name, item.link, '.card-template', handleCardClick).generateCard();
    cardsList.addItem(card);
    },
  },
  cardsContainer
);
// Render the initial cards
cardsList.renderItems();

// Render any subsequent cards
const renderCard = (element, cardsContainer) => {
  const card = new Card(element, ".card-template", handleCardClick).generateCard();
  cardsContainer.prepend(card);
}

// Edit form functions
function renderEditForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function submitEditForm (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    editFormPopup.close();
}

//Add form functions
function submitAddForm (evt) {
    evt.preventDefault();
    renderCard ({name: titleInput.value, link: urlInput.value});
    addForm.reset();
    addFormPopup.close();
}

//Edit form submit,
editPopup.addEventListener('submit', submitEditForm);

editButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;
  editFormPopup.open();
});

addButton.addEventListener("click", () => {
  addFormPopup.open();
});

//Add form submit
addPopup.addEventListener('submit', submitAddForm);

renderEditForm();
new FormValidator(formConfig, editPopup).enableValidation();
new FormValidator(formConfig, addPopup).enableValidation();
