import {
  titleInput,
  urlInput,
  name,
  job,
  editPopup,
  addPopup,
  addForm,
  nameInput,
  jobInput,
  initialCards,
  cardsContainer,
  formConfig
}
from "./constants.js";

import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import FormValidator from "./FormValidator.js";
import UserInfo from "./UserInfo.js";
////////////////////////////////
const imgPopup = new PopupWithImage(".popup_type_image");
imgPopup.setEventListeners();

//Create Section and Initial Cards
const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const handleCardClick = (itemName, itemLink) => {
      imgPopup.open(itemName, itemLink);
      imgPopup.setEventListeners();
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
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
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

//Edit form submit
editPopup.addEventListener('submit', submitEditForm);


//Add form submit
addPopup.addEventListener('submit', submitAddForm);


renderEditForm();
new FormValidator(formConfig, editPopup).enableValidation();
new FormValidator(formConfig, addPopup).enableValidation();
