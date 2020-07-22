import '../pages/index.css';// Styles

//Constants
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

// Classes
import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import FormValidator from "./FormValidator.js";
import UserInfo from "./UserInfo.js";
import Api from "./Api.js";

// Render new cards
const renderCard = (element) => {
  const card = new Card({ ...element, popup: PopupWithImage, handleCardClick},
  '.card-template');
    return card.generateCard();
}

// Handlers

const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = renderCard(item);
    cardsList.addItem(card);
  },
},
'.photo-grid'
);

const handleProfileEdit = ({ 'name-input': name, 'job-input': job }) => userInfo.setUserInfo({ name, job });
const handleAddCard = ({ 'title-input': name, 'url-input': link }) => cardsList.addItem(renderCard({ name, link }));
const handleCardClick = (data) => imgPopup.open(data);

// Class instances
const imgPopup = new PopupWithImage(".popup_type_image");
const editFormPopup = new PopupWithForm({ popupSelector: ".popup_type_edit", handleProfileEdit });
const addFormPopup = new PopupWithForm({ popupSelector: ".popup_type_add", handleAddCard });

new FormValidator(formConfig, editPopup).enableValidation();
new FormValidator(formConfig, addPopup).enableValidation();

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__job"
});

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-1",
  headers: {
    authorization: "6eb81e8e-36f6-446c-88bf-d90a004f306c",
    "Content-Type": "application/json"
  },
});

api.getAppInfo()
.then(([initialCards, userInfoData]) => {
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
  // Set user info
  userInfo.setUserInfo({ name: userInfoData.name, job: userInfoData.about })
})

.catch(console.log)

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
