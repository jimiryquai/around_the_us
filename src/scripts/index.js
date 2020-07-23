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

// Class instances
const imgPopup = new PopupWithImage(".popup_type_image");

const userInfoPopup = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  handleFormSubmit: ({
    'name-input': name,
    'job-input': job
  }) => userInfo.setUserInfo({ name, job })
});

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
      renderer: (element) => {
        const card = new Card({ ...element,
          handleCardClick: (data) =>
          imgPopup.open(data)
        },
        '.card-template'
        );
        cardsList.addItem(card.generateCard());
      },
    },
    '.photo-grid'
  );
  // Render the initial cards
  cardsList.renderItems();
  // Set user info
  userInfo.setUserInfo({ name: userInfoData.name, job: userInfoData.about });

  const newCardPopup = new PopupWithForm({
    popupSelector: ".popup_type_add",
    handleFormSubmit: ({
      'title-input': name,
      'url-input': link
    }) => {
    api.addCard({ name, link })
    .then(res => {
        const card = new Card({ name, link,
          handleCardClick: (data) =>
          imgPopup.open(data)
        },
        '.card-template'
      );
    cardsList.addItem(card.generateCard());
    })
    // .catch(() => console.log("Error during rendering"))
    }
  });
  newCardPopup.setEventListeners();
  addButton.addEventListener("click", () => newCardPopup.open());
})

.catch(console.log)


// Event Listeners
editButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;
  userInfoPopup.open();
});

userInfoPopup.setEventListeners();
imgPopup.setEventListeners();
