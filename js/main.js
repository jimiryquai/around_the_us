const editButton = document.querySelector('.button_edit');
const closeButton = document.querySelector('.popup__close');
// get and set form values
const cardsContainer = document.querySelector(".photo-grid");
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('.form__input_name');
const jobInput = formElement.querySelector('.form__input_job');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
// Initial card values
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
//Build card

function buildCard () {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector(".photo-grid__image").src = initialCards.link;
    cardElement.querySelector(".photo-grid__title").textContent = initialCards.name;
    cardsContainer.append(cardElement);
}

// Add six initial cards on load
window.onload = (event) => {
    initialCards.forEach(function (item) {
        const cardTemplate = document.querySelector('#card-template').content;
        const cardElement = cardTemplate.cloneNode(true);
        const cardImage = cardElement.querySelector(".photo-grid__image");
        const cardTitle =  cardElement.querySelector(".photo-grid__title");
        cardImage.src = item.link;
        cardImage.alt = item.name;
        cardTitle.textContent = item.name;
        cardsContainer.append(cardElement);
    });
  };

// Toggles class of popup_opened
function popupToggle() {
    let popup = document.querySelector('.popup')
    popup.classList.toggle('popup_opened');
}

editButton.addEventListener("click", popupToggle);
closeButton.addEventListener("click", popupToggle);


function formLoadHandler() {
    let nameText = name.textContent;
    let jobText = job.textContent;

    nameInput.value = nameText;
    jobInput.value = jobText;
}

editButton.addEventListener('click', formLoadHandler);

// Next is the form submit handler, though
// it won't submit anywhere just yet
function formSubmitHandler (evt) {
    evt.preventDefault(); // This line stops the browser from submitting the form in the default way.
                                                // Having done so, we can define our own way of submitting the form.
                                                // We'll explain it in more detail later

    // Insert new values using the textContent property of the querySelector() method
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
}

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', popupToggle);