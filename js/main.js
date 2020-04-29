
// const addButton = document.querySelector('.button_add');
// const editButton = document.querySelector('.button_edit');
// const editPopup = document.querySelector('.popup_type_edit');
// const editForm = editPopup.querySelector('.form_type_edit');
// const editClose = editPopup.querySelector('.popup__close_type_edit');

// const addPopup = document.querySelector('.popup_type_add');
// const addForm = addPopup.querySelector('.form_type_add');
// const addClose = addPopup.querySelector('.popup__close_type_add');
// const titleInput = addPopup.querySelector('.form__input_title');
// const urlInput = addPopup.querySelector('.form__input_url');

const imgPopup = document.querySelector('.popup_type_image');
const imgClose = imgPopup.querySelector('.popup__close_type_image');
const imgModal = imgPopup.querySelector('.popup__modal_type_image');
const cardTemplate = document.querySelector('.template-card').content.querySelector('.photo-grid__item');

// const cardImages = cardsContainer.querySelectorAll('.photo-grid__image');

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

// Add six initial cards on load
window.onload = (event) => {
    initialCards.forEach(function (card) {
        renderCard(card);
    });
  };

const createCard  = function (card) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.photo-grid__image');
    const cardTitle =  cardElement.querySelector('.photo-grid__title');
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardTitle.textContent = card.name;
    return cardElement;
}

const renderCard = function (card) {
    createCard(card);
    cardsContainer.append(createCard(card));
  }

// Toggles class of popup_opened
const togglePopup = function (popup) {
    popup.classList.toggle('popup_opened');
}

// Edit form functions //////////////

//Populate input elements on edit form
// function renderEditForm() {
//     const nameInput = document.querySelector('.form__input_name');
//     const jobInput = document.querySelector('.form__input_job');
//     const name = document.querySelector('.profile__name');
//     const job = document.querySelector('.profile__job');
//     nameInput.value = name.textContent;
//     jobInput.value = job.textContent;
// }

//Submit edit form
// function editFormSubmit (evt) {
//     evt.preventDefault(); 
//     const nameInput = document.querySelector('.form__input_name');
//     const jobInput = document.querySelector('.form__input_job');
//     const name = document.querySelector('.profile__name');
//     const job = document.querySelector('.profile__job');
//     name.textContent = nameInput.value;
//     job.textContent = jobInput.value;
//     togglePopup(editPopup);
// }

//Add submit handler
// function addFormSubmit (evt) {
//     evt.preventDefault(); 
//     const cardTemplate = document.querySelector('.template-card').content;
//     const cardElement = cardTemplate.cloneNode(true);
//     const cardImage = cardElement.querySelector('.photo-grid__image');
//     const cardTitle =  cardElement.querySelector('.photo-grid__title');
//     cardImage.src = urlInput.value;
//     cardImage.alt = titleInput.value;
//     cardTitle.textContent = titleInput.value;
//     cardsContainer.append(cardElement);
//     togglePopup(addPopup);
// }

// // Clear form after submit
// function addFormClear () {
//     urlInput.value = "";
//     titleInput.value = "";
// }

// // // Image modal functions //////////////

const cardImages = function (images) {
    images = document.querySelectorAll('.photo-grid__image');
    for (image of images) {
        image.addEventListener("click", function(evt) {
          console.log(image);
        })
      }
      return image;
}

//Create modal
function renderImgModal() {
    const title = cardsContainer.querySelector('.photo-grid__title');
    const img = cardsContainer.querySelector('.photo-grid__image');
    const figImage = imgPopup.querySelector('.popup__image');
    const figCaption = imgPopup.querySelector('.popup__caption');
    figImage.src = img.src;
    figImage.alt = img.alt;
    figCaption.textContent = title.textContent;
    togglePopup(imgPopup);
}

// // // End of Image modal functions //////////////////////////////////////////

//Perform multiple actions on edit button click
// document.addEventListener('click', function (evt) {
//     if ( evt.target.classList.contains( 'button_edit' ) ) {
//         togglePopup(editPopup);
//         renderEditForm();
//     }
// }, false);

// document.addEventListener('click', function (evt) {
//     if ( evt.target.classList.contains( 'button_add' ) ) {
//         togglePopup(addPopup);
//     }
// }, false);

// cardsContainer.addEventListener('click', function (evt) {
//     if ( evt.target.classList.contains( 'photo-grid__image' ) ) {
//         togglePopup(imgPopup);
//         renderImgModal();
//     }
// }, false);

// document.addEventListener('click', function (evt) {
//     cardImages.forEach(function (image) {
//         renderImgModal(image);
//     });
//   });

// cardsContainer.addEventListener('click', function (evt) {
//     if ( evt.target.classList.contains( 'button_heart' ) ) {
//         evt.target.classList.toggle('button_heart_liked');
//     }
// }, false);

// document.addEventListener('click', function (evt) {
//     if ( evt.target.classList.contains( 'popup__close_type_edit' ) ) {
//         togglePopup(editPopup);
//     }
// }, false);

// document.addEventListener('click', function (evt) {
//     if ( evt.target.classList.contains( 'popup__close_type_add' ) ) {
//         togglePopup(addPopup);
//         addFormClear();
//     }
// }, false);


// imgClose.addEventListener('click', function (evt) {
//     if ( evt.target.classList.contains( 'popup__close_type_image' ) ) {
//         togglePopup(imgPopup);
//     }
// }, false);

// cardsContainer.addEventListener('click', function (evt) {
//     if ( evt.target.classList.contains( 'button_trash' ) ) {
//         evt.target.parentElement.remove()
//     }
// }, false);

// // //Form submission listeners
// document.addEventListener('submit', editFormSubmit);
// document.addEventListener('submit', addFormSubmit);
// document.addEventListener('submit', addFormClear);