import {
  editPopup,
  addPopup,
  nameInput,
  jobInput,
  initialCards,
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

// Render new cards
const renderCard = (element) => {
  const card = new Card({ ...element, popup: PopupWithImage, handleCardClick},
  '.card-template');
    return card.generateCard();
}

// Handlers
// Profile edit
const handleProfileEdit = ({ 'name-input': name, 'job-input': job }) => userInfo.setUserInfo({ name, job });

// Add card
const handleAddCard = (evt) => cardsList.addItem(renderCard(evt));

// Card clicks
const handleCardClick = (data) => imgPopup.open(data);
//End Handlers

// Class instances
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__job"
});

const imgPopup = new PopupWithImage(".popup_type_image");
const editFormPopup = new PopupWithForm(".popup_type_edit", handleProfileEdit);
const addFormPopup = new PopupWithForm(".popup_type_add", handleAddCard);
new FormValidator(formConfig, editPopup).enableValidation();
new FormValidator(formConfig, addPopup).enableValidation();

//Create Section and Initial Cards
const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = renderCard(item);
    cardsList.addItem(card);
    },
  },
  '.photo-grid'
);
// Render the initial cards
cardsList.renderItems();

// Event Listeners
editButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;
  editFormPopup.open();
});

editFormPopup.setEventListeners();
addButton.addEventListener("click", () => addFormPopup.open());
addFormPopup.setEventListeners();
imgPopup.setEventListeners();
