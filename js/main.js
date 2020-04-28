const editButton = document.querySelector('.button_edit');
const addButton = document.querySelector('.button_add');

const editPopup = document.querySelector('.popup_type_edit');
const editForm = editPopup.querySelector('.form_type_edit');
const editClose = editPopup.querySelector('.popup__close_type_edit');
const nameInput = editForm.querySelector('.form__input_name');
const jobInput = editForm.querySelector('.form__input_job');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');

const addPopup = document.querySelector('.popup_type_add');
const addForm = addPopup.querySelector('.form_type_add');
const addClose = addPopup.querySelector('.popup__close_type_add');
const titleInput = addPopup.querySelector('.form__input_title');
const urlInput = addPopup.querySelector('.form__input_url');

const imgPopup = document.querySelector('.popup_type_image');
const imgClose = imgPopup.querySelector('.popup__close_type_image');

const cardsContainer = document.querySelector('.photo-grid');
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

function createCard (card) {
    const cardTemplate = document.querySelector('.template-card').content;
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.photo-grid__image');
    const cardTitle =  cardElement.querySelector('.photo-grid__title');
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardTitle.textContent = card.name;
    return cardElement;
}

function renderCard(card) {
    createCard(card);
    cardsContainer.append(createCard(card));
  }

// Toggles class of popup_opened
function togglePopup(popup) {
    popup.classList.toggle('popup_opened');
}

// // Edit form functions //////////////

//Populate input elements on edit form
function renderEditForm() {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
}

//Submit edit form
function editFormSubmit (evt) {
    evt.preventDefault(); 
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    togglePopup(editPopup);
}

// Add form functions
//Form submit handler
function addFormSubmit (evt) {
    evt.preventDefault(); 
    const cardTemplate = document.querySelector('.template-card').content;
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.photo-grid__image');
    const cardTitle =  cardElement.querySelector('.photo-grid__title');
    cardImage.src = urlInput.value;
    cardImage.alt = titleInput.value;
    cardTitle.textContent = titleInput.value;
    cardsContainer.append(cardElement);
    togglePopup(addPopup);
}


// Clear form after submit
function addFormClear () {
    urlInput.value = "";
    titleInput.value = "";
}

// //End of add form functions ////////////////////////////////////////////

// // Image modal functions //////////////

//Create modal
function renderImgModal() {
    const title = document.querySelector('.photo-grid__title');
    const img = document.querySelector('.photo-grid__image');
    const imgModal = imgPopup.querySelector('.popup__image');
    const caption = imgPopup.querySelector('.popup__caption');
    imgModal.src = img.src;
    imgModal.alt = img.alt;
    caption.textContent = title.textContent;
}

// // End of Image modal functions //////////////////////////////////////////

//Perform multiple actions on edit button click
editButton.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'button_edit' ) ) {
        togglePopup(editPopup);
        renderEditForm();
    }
}, false);

addButton.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'button_add' ) ) {
        togglePopup(addPopup);
    }
}, false);

document.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'photo-grid__image' ) ) {
        togglePopup(imgPopup);
        renderImgModal();
    }
}, false);

document.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'button_heart' ) ) {
        evt.target.classList.toggle('button_heart_liked');
    }
}, false);

editClose.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'popup__close_type_edit' ) ) {
        togglePopup(editPopup);
    }
}, false);

addClose.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'popup__close_type_add' ) ) {
        togglePopup(addPopup);
        addFormClear();
    }
}, false);


imgClose.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'popup__close_type_image' ) ) {
        togglePopup(imgPopup);
    }
}, false);

document.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'button_trash' ) ) {
        evt.target.parentElement.remove()
    }
}, false);

// //Form submission listeners
editForm.addEventListener('submit', editFormSubmit);
addForm.addEventListener('submit', addFormSubmit);
addForm.addEventListener('submit', addFormClear);