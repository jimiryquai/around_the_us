let editButton = document.querySelector('.button_edit');
let closeButton = document.querySelector('.popup__close');

// Toggles class of popup_opened
function popupToggle() {
    let popup = document.querySelector('.popup')
    popup.classList.toggle('popup_opened');
}

editButton.addEventListener("click", popupToggle);
closeButton.addEventListener("click", popupToggle);

// get and set form values
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');

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