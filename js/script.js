//Profile inputs
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const editButton = document.querySelector('.button_edit');
const addButton = document.querySelector('.button_add');

// Edit form variables
const editPopup = document.querySelector('.popup_type_edit');
const editForm = editPopup.querySelector('.form_type_edit');
const editClose = editPopup.querySelector('.popup__close_type_edit');
const nameInput = editPopup.querySelector('.form__input_name');
const jobInput = editPopup.querySelector('.form__input_job');

//Add form variables
const addPopup = document.querySelector('.popup_type_add');
const addForm = addPopup.querySelector('.form_type_add');
const addClose = addPopup.querySelector('.popup__close_type_add');
const titleInput = addPopup.querySelector('.form__input_title');
const urlInput = addPopup.querySelector('.form__input_url');

//Image popup variables
const imgPopup = document.querySelector('.popup_type_image');
const imgClose = imgPopup.querySelector('.popup__close_type_image');
const imgModal = imgPopup.querySelector('.popup__modal_type_image');
const figImage = imgPopup.querySelector('.popup__image');
const figCaption = imgPopup.querySelector('.popup__caption');

// Cards variables
const cardTemplate = document.querySelector('.template-card').content.querySelector('.photo-grid__item');
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

//Cards functions
// Add six initial cards on load
window.onload = (event) => {
    initialCards.forEach(function (card) {
        renderCard(card);
    });
  };

//Toggle popups function
// Function to open/close Popup Wimdows
function togglePopup(popup) {
    if (!popup.classList.contains('.popup_opened')) {
    }
    popup.classList.toggle('popup_opened');
  }  

function createCard(card) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.photo-grid__image');
    const cardTitle =  cardElement.querySelector('.photo-grid__title');
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardTitle.textContent = card.name;
    return cardElement;
}

function renderCard (card) {
    createCard(card);
    cardsContainer.append(createCard(card));
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
    renderCard({name: titleInput.value, link: urlInput.value});
    urlInput.value = "";
    titleInput.value = "";
    togglePopup(addPopup);
}

//Image popup function
function renderImgPopup(evt) {
    figImage.src = evt.target.src;
    figImage.alt = evt.target.alt;
    figCaption.textContent = evt.target.alt;
    togglePopup(imgPopup);
}

//Event handlers
//Edit button clicks
document.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'button_edit' ) ) {
        togglePopup(editPopup);
        renderEditForm();
    }
}, false);

editPopup.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'popup__close_type_edit' ) ) {
        togglePopup(editPopup);
    }
}, false);

//Edit form submit
editPopup.addEventListener('submit', submitEditForm);

//Add button clicks
document.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'button_add' ) ) {
        togglePopup(addPopup);
    }
}, false);

addPopup.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'popup__close_type_add' ) ) {
        togglePopup(addPopup);
    }
}, false);

//Add form submit 
addPopup.addEventListener('submit', submitAddForm);



//Image and image popup clicks
cardsContainer.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'photo-grid__image' ) ) {
        renderImgPopup(evt);
    }
}, false);

imgPopup.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'popup__close_type_image' ) ) {
        togglePopup(imgPopup);
    }
}, false);

//Like button clicks
cardsContainer.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'button_heart' ) ) {
        evt.target.classList.toggle('button_heart_liked');
    }
}, false);

//trash button clicks
cardsContainer.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'button_trash' ) ) {
        evt.target.parentElement.remove();
    }
}, false);
