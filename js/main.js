const editButton = document.querySelector('.button_edit');
const closeButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const editFormDialog = popup.querySelector('.popup__dialog_edit')
const editForm = document.querySelector('.form_edit');
const addFormDialog = popup.querySelector('.popup__dialog_add');
const addForm = document.querySelector('.form_add');
const nameInput = editForm.querySelector('.form__input_name');
const jobInput = editForm.querySelector('.form__input_job');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const titleInput = addForm.querySelector('.form__input_title');
const urlInput = addForm.querySelector('.form__input_url');
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
    initialCards.forEach(function (item) {
        const cardTemplate = document.querySelector('#card-template').content;
        const cardElement = cardTemplate.cloneNode(true);
        const cardImage = cardElement.querySelector('.photo-grid__image');
        const cardTitle =  cardElement.querySelector('.photo-grid__title');
        cardImage.src = item.link;
        cardImage.alt = item.name;
        cardTitle.textContent = item.name;
        cardsContainer.append(cardElement);
    });
  };

// Toggles class of popup_opened
function popupToggle() {
    popup.classList.toggle('popup_opened');
}

//Toggle visibility of edit form
function editFormVisibility () {
    editFormDialog.classList.toggle('popup__dialog_visible');
}

//Toggle visibility of add form
function addFormVisibility () {
    addFormDialog.classList.toggle('popup__dialog_visible');
}

//Populates input elements on edit form
function editFormValues() {
    let nameText = name.textContent;
    let jobText = job.textContent;
    nameInput.value = nameText;
    jobInput.value = jobText;
}

// Next is the form submit handler, though
// it won't submit anywhere just yet
function addFormSubmit (evt) {
    evt.preventDefault(); 
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.photo-grid__image');
    const cardTitle =  cardElement.querySelector('.photo-grid__title');
    cardImage.src = urlInput.value;
    cardImage.alt = titleInput.value;
    cardTitle.textContent = titleInput.value;
    cardsContainer.append(cardElement);
}

function addFormClear () {
    urlInput.value = "";
    titleInput.value = "";
}

function editFormSubmit (evt) {
    evt.preventDefault(); 
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
}

document.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'button_heart' ) ) {
        evt.target.classList.toggle('button_heart_liked');
    }
}, false);

//Perform multiple actions on edit button click
//https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/
document.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'button_edit' ) ) {
        popupToggle();
        editFormVisibility();
        editFormValues();
    }
}, false);

document.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'button_add' ) ) {
        popupToggle();
        addFormVisibility();
    }
}, false);

//Perform multiple actions on popup close button click
document.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'popup__close_edit' ) ) {
        editFormVisibility();
        popupToggle();
    }
}, false);

document.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'popup__close_add' ) ) {
        addFormVisibility();
        popupToggle();
    }
}, false);

//Edit form submission listeners
editForm.addEventListener('submit', editFormSubmit);
editForm.addEventListener('submit', popupToggle);
editForm.addEventListener('submit', editFormVisibility);
addForm.addEventListener('submit', addFormSubmit);
addForm.addEventListener('submit', popupToggle);
addForm.addEventListener('submit', addFormVisibility);
addForm.addEventListener('submit', addFormClear);