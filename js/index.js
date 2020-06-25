import Card from "./Card.js";
import Section from "./Section.js";
import {
  titleInput,
  urlInput,
  name,
  job,
  formConfig,
  profile,
  editPopup,
  addPopup,
  imgPopup,
  editFormValidator,
  addFormValidator,
  nameInput,
  jobInput,
  initialCards,
  cardsContainer
} from "./constants.js";

const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.card-template');
    const cardElement = card.generateCard();

    cardsList.addItem(cardElement);
    },
  },
  cardsContainer
);

// rendering the cards
cardsList.renderItems();


editFormValidator.enableValidation();
addFormValidator.enableValidation();

function renderCard (element, cardsContainer) {
  const card = new Card(element, ".card-template").generateCard();
  cardsContainer.append(card);
}

// Edit form functions
function renderEditForm() {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

  editPopup.addEventListener('click', evt => {
    if ( evt.target.classList.contains( 'popup__close_type_edit' ) ) {
        togglePopup(editPopup);
    }
  });

  addPopup.addEventListener('click', evt => {
    if ( evt.target.classList.contains( 'popup__close_type_add' ) ) {
        togglePopup(addPopup);
    }
  });

function submitEditForm (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    togglePopup(editPopup);
}

//Add form functions
function submitAddForm (evt) {
    evt.preventDefault();
    renderCard ({name: titleInput.value, link: urlInput.value});
    addForm.reset();
    togglePopup(addPopup);
}

//Event handlers
//Edit button clicks
profile.addEventListener('click', evt => {
  if ( evt.target.classList.contains( 'button_edit' ) ) {
      togglePopup(editPopup);
      renderEditForm();
  }
});

//Edit form submit
editPopup.addEventListener('submit', submitEditForm);

//Add button clicks
profile.addEventListener('click', evt => {
  if ( evt.target.classList.contains( 'button_add' ) ) {
      togglePopup(addPopup);
  }
});

//Add form submit
addPopup.addEventListener('submit', submitAddForm);

// initialCards.forEach(element => renderCard(element));

renderEditForm();
//Toggle popup function
// Function to open/close popup windows
export default function togglePopup(popup) {
  popup.classList.toggle( 'popup_opened' );

  popup.addEventListener('click', evt => {
    if ( evt.target.classList.contains( 'popup' ) ) {
        togglePopup(popup);
    }
  });
}
