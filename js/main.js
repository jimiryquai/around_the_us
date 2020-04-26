const editButton = document.querySelector('.button_edit');
const closeButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
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

// Edit form fucntions //////////////

//Toggle visibility of edit form
function editFormVisibility () {
    const editFormDialog = popup.querySelector('.popup__dialog_edit');
    editFormDialog.classList.toggle('popup__dialog_visible');
}

// Create edit form
function editFormCreate () {
    const dialog = document.createElement("div");
    const closeButton = document.createElement("button");
    const header = document.createElement("h2");
    const form = document.createElement("form");
    const nameLabel = document.createElement("label");
    const nameInput = document.createElement("input");
    const jobLabel = document.createElement("label");
    const jobInput = document.createElement("input");
    const submitButton = document.createElement("button");
    dialog.classList.add('popup__dialog', 'popup__dialog_edit')
    closeButton.classList.add('popup__close', 'popup__close_edit')
    header.classList.add('content-title');
    header.textContent = "Edit Profile";
    form.classList.add('form', 'form_edit');
    nameLabel.classList.add('form__label');
    nameLabel.textContent = "Name";
    nameInput.classList.add('form__input', 'form__input_name');
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.placeholder = "Name";
    nameInput.required = true;
    jobLabel.classList.add('form__label');
    jobLabel.textContent = "Image URL";
    jobInput.classList.add('form__input', 'form__input_job');
    jobInput.type = "text";
    jobInput.name = "job";
    jobInput.placeholder = "Job";
    jobInput.required = true;
    submitButton.classList.add('button', 'button_submit');
    submitButton.type = "submit";
    submitButton.textContent = "Save";
    form.append(nameLabel, nameInput, jobLabel, jobInput, submitButton);
    dialog.append(closeButton, header, form);
    popup.append(dialog);
    form.onsubmit = editFormSubmit;
}

//Populate input elements on edit form
function editFormValues() {
    const editForm = document.querySelector('.form_edit');
    const nameInput = editForm.querySelector('.form__input_name');
    const jobInput = editForm.querySelector('.form__input_job');
    const name = document.querySelector('.profile__name');
    const job = document.querySelector('.profile__job');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
}

//Submit edit form
function editFormSubmit (evt) {
    evt.preventDefault(); 
    const editForm = document.querySelector('.form_edit');
    const nameInput = editForm.querySelector('.form__input_name');
    const jobInput = editForm.querySelector('.form__input_job');
    const name = document.querySelector('.profile__name');
    const job = document.querySelector('.profile__job');
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
}

// Add form functions

//Toggle visibility of add form
function addFormVisibility () {
    const addFormDialog = popup.querySelector('.popup__dialog_add');
    addFormDialog.classList.toggle('popup__dialog_visible');
}

//Create add form
function addFormCreate () {
    const dialog = document.createElement("div");
    const closeButton = document.createElement("button");
    const header = document.createElement("h2");
    const form = document.createElement("form");
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    const urlLabel = document.createElement("label");
    const urlInput = document.createElement("input");
    const submitButton = document.createElement("button");
    dialog.classList.add('popup__dialog', 'popup__dialog_add')
    closeButton.classList.add('popup__close', 'popup__close_add')
    header.classList.add('content-title');
    header.textContent = "New Place";
    form.classList.add('form', 'form_add');
    titleLabel.classList.add('form__label');
    titleLabel.textContent = "Title";
    titleInput.classList.add('form__input', 'form__input_title');
    titleInput.type = "text";
    titleInput.name = "title";
    titleInput.placeholder = "Title";
    titleInput.required = true;
    urlLabel.classList.add('form__label');
    urlLabel.textContent = "Image URL";
    urlInput.classList.add('form__input', 'form__input_url');
    urlInput.type = "text";
    urlInput.name = "url";
    urlInput.placeholder = "Image URL";
    urlInput.required = true;
    submitButton.classList.add('button', 'button_submit');
    submitButton.type = "submit";
    submitButton.textContent = "Save";
    form.append(titleLabel, titleInput, urlLabel, urlInput, submitButton);
    dialog.append(closeButton, header, form);
    popup.append(dialog);
    form.onsubmit = addFormSubmit;
}

//Form submit handler
function addFormSubmit (evt) {
    evt.preventDefault(); 
    const titleInput = document.querySelector('.form__input_title');
    const urlInput = document.querySelector('.form__input_url');
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.photo-grid__image');
    const cardTitle =  cardElement.querySelector('.photo-grid__title');
    cardImage.src = urlInput.value;
    cardImage.alt = titleInput.value;
    cardTitle.textContent = titleInput.value;
    cardsContainer.append(cardElement);
}


// Clear form after submit
function addFormClear () {
    const titleInput = document.querySelector('.form__input_title');
    const urlInput = document.querySelector('.form__input_url');
    urlInput.value = "";
    titleInput.value = "";
}

//End of add form functions ////////////////////////////////////////////

// Image modal functions //////////////

//Create modal
function createImageModal() {
    const title =  document.querySelector('.photo-grid__title');
    const img = document.querySelector('.photo-grid__image');
    const imgSrc = img.src;
    const close = document.createElement("button");
    const figure = document.createElement("figure"); 
    const imgModal = document.createElement("img");
    const caption = document.createElement("figcaption");
    figure.classList.add('photo-grid__modal');
    close.classList.add('popup__close', 'popup__close_modal');
    imgModal.classList.add('photo-grid__image', 'photo-grid__image_modal');
    imgModal.src += imgSrc;
    caption.textContent = title.textContent;
    figure.append(close, img, caption);
    popup.append(figure);
}

//Toggle modal visibility
function imageModalVisibility () {
    const imgModal = popup.querySelector('.photo-grid__modal');
    imgModal.classList.toggle('photo-grid__modal_visible');
}

// End of Image modal functions //////////////////////////////////////////

document.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'photo-grid__image' ) ) {
        popupToggle();
        createImageModal();
        imageModalVisibility();
    }
}, false);

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
        editFormCreate();
        editFormValues();
        editFormVisibility();
    }
}, false);

document.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'button_add' ) ) {
        popupToggle();
        addFormCreate();
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

document.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'popup__close_modal' ) ) {
        imageModalVisibility();
        popupToggle();
    }
}, false);

document.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'button_trash' ) ) {
        evt.target.parentElement.remove()
    }
}, false);

//Form submission listeners
document.addEventListener('submit', popupToggle);
document.addEventListener('submit', editFormVisibility);
document.addEventListener('submit', popupToggle);
document.addEventListener('submit', addFormVisibility);
document.addEventListener('submit', addFormClear);
