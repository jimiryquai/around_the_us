import '../pages/index.css';// Styles

//Constants
import {
  editPopup,
  addPopup,
  avatarPopup,
  nameInput,
  jobInput,
  formConfig,
  editButton,
  addButton,
  avatarButton,
  deleteButton
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
import { data } from 'autoprefixer';

// Class instances
const imgPopup = new PopupWithImage(".popup_type_image");

const userInfoPopup = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  handleFormSubmit: ({
    'name-input': name,
    'job-input': about
  }) => {
    api.setUserInfo({ name, about })
    .then(res => {
      userInfo.setUserInfo({ name, about });
    })
    .catch(() => console.log("Error during rendering"))
  },
  submitButtonText: "Saving...",
});

const editAvatarPopup = new PopupWithForm({
  popupSelector: ".popup_type_avatar",
  handleFormSubmit: ({
    'avatar-input': avatar
  }) => {
    api.setUserAvatar({
      avatar
    }).then(() => {
      userInfo.setUserAvatar({
        avatar
      });
      editAvatarPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
  },
  submitButtonText: "Saving...",
});

const deleteCardPopup = new PopupWithForm({
  popupSelector: ".popup_type_delete",
  handleFormSubmit: () => {
    const id = deleteButton.dataset.id;
    api.removeCard(id)
    .then(() => {
      deleteCardPopup.close();
    })
  },
  submitButtonText: "Deleting..."
});

new FormValidator(formConfig, editPopup).enableValidation();
new FormValidator(formConfig, addPopup).enableValidation();
new FormValidator(formConfig, avatarPopup).enableValidation();

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__job",
  avatarSelector: ".avatar__img"
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
  const userId = userInfoData._id;
    //Create Section and Initial Cards
    const cardsList = new Section({
      items: initialCards,
      renderer: (data) => {
        const card = new Card({ data,
          handleCardClick: () =>
          imgPopup.open(data),
          handleDeleteClick: (card) => {
            deleteCardPopup.open();
            deleteCardPopup.setSubmitHandler(() => {
              api.removeCard(card.id())
                .then(res => {
                  card.removeCard();
                  deleteCardPopup.close();
                })
            });
          },
          handleLikeClick: (id) => {
            if (card.likeButton.classList.contains('button_heart_liked')) {
              card.likeButton.classList.remove('button_heart_liked');
              api.removeLike(id)
              .then(res => card.likeCount(res.likes.length))
            } else {
              card.likeButton.classList.add('button_heart_liked');
              api.addLike(id)
              .then(res => card.likeCount(res.likes.length))
            }},
          userId
        },
        '.card-template'
        );
        cardsList.addItem(card.generateCard(userId));
      },
    },
    '.photo-grid'
  );
  // Render the initial cards
  cardsList.renderItems();
  // Set user info
  userInfo.setUserInfo({ name: userInfoData.name, about: userInfoData.about });
  userInfo.setUserAvatar({ avatar: userInfoData.avatar });

  const newCardPopup = new PopupWithForm({
    popupSelector: ".popup_type_add",
    handleFormSubmit: ({
      'title-input': name,
      'url-input': link
    }) => {
        api.addCard({ name, link })
          .then(res => {
            const card = new Card({
              data: res,
              handleCardClick: () =>
                imgPopup.open(data),
              handleDeleteClick: (card) => {
                deleteCardPopup.open();
                deleteCardPopup.setSubmitHandler(() => {
                  api.removeCard(card.id())
                    .then(() => {
                      card.removeCard();
                      deleteCardPopup.close();
                    })
                });
              },
              handleLikeClick: (id) => {
                if (newCard.likeButton.classList.contains('button_heart_liked')) {
                  newCard.likeButton.classList.remove('button_heart_liked');
                  api.removeLike(id)
                  .then(res => newCard.likeCount(res.likes.length))
                } else {
                  newCard.likeButton.classList.add('button_heart_liked');
                  api.addLike(id)
                  .then(res => newCard.likeCount(res.likes.length))
                }},
              userId
            },
          '.card-template'
          );
          cardsList.addItem(card.generateCard(userID));
        })
      .catch(() => console.log("Error during rendering"))
    },
    submitButtonText: "Saving.."
  });
  newCardPopup.setEventListeners();
  addButton.addEventListener("click", () => newCardPopup.open());
})

// Add/Set Event Listeners
editButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.about;
  userInfoPopup.open();
});

avatarButton.addEventListener('click', () => editAvatarPopup.open());

userInfoPopup.setEventListeners();
imgPopup.setEventListeners();
editAvatarPopup.setEventListeners();
deleteCardPopup.setEventListeners();
