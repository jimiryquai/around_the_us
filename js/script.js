//Profile inputs
const profile = document.querySelector('.profile');
const name = profile.querySelector('.profile__name');
const job = profile.querySelector('.profile__job');

//Global popup
const popup = document.querySelector('.popup');

// Edit form variables
const editPopup = document.querySelector('.popup_type_edit');
const nameInput = editPopup.querySelector('.form__input_name');
const jobInput = editPopup.querySelector('.form__input_job');

//Add form variables
const addPopup = document.querySelector('.popup_type_add');
const addForm = addPopup.querySelector('.form_type_add');
const titleInput = addPopup.querySelector('.form__input_title');
const urlInput = addPopup.querySelector('.form__input_url');

//Image popup variables
const imgPopup = document.querySelector('.popup_type_image');
const figImage = imgPopup.querySelector('.popup__image');
const figCaption = imgPopup.querySelector('.popup__caption');

// Cards variables
const cardTemplate = document.querySelector('.template-card').content;
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

// Edit form functions
function renderEditForm() {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

//Toggle popup function
// Function to open/close popup windows
function togglePopup(popup) {
  popup.classList.toggle('popup_opened');

  popup.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'popup' ) ) {
        togglePopup(popup);
    }
  });

  // fires only once - when the user releases the key
  window.addEventListener('keyup', function (evt) {
    if ( evt.key === 'Escape' ) {
      togglePopup(popup);
    }
  });

  editPopup.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'popup__close_type_edit' ) ) {
        togglePopup(editPopup);
    }
  });

  addPopup.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'popup__close_type_add' ) ) {
        togglePopup(addPopup);
    }
  });

  imgPopup.addEventListener('click', function (evt) {
    if ( evt.target.classList.contains( 'popup__close_type_image' ) ) {
        togglePopup(imgPopup);
    }
  });

}

//Image popup function
function renderImgPopup(evt) {
    figImage.src = evt.target.src;
    figImage.alt = evt.target.alt;
    figCaption.textContent = evt.target.alt;
    togglePopup(imgPopup);
}

function createCard(card) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.photo-grid__image');
    const cardTitle =  cardElement.querySelector('.photo-grid__title');
    const cardLove =  cardElement.querySelector('.button_heart');
    const cardTrash =  cardElement.querySelector('.button_trash');
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardTitle.textContent = card.name;

    //Image and image popup clicks
    cardImage.addEventListener('click', function (evt) {
        renderImgPopup(evt);
    });

    cardLove.addEventListener('click', function (evt) {
        evt.target.classList.toggle('button_heart_liked');
    });

    //trash button clicks
    cardTrash.addEventListener('click', function (evt) {
        evt.target.parentElement.remove();
    });

    return cardElement;
}

function renderCard (card) {
    createCard(card);
    cardsContainer.append(createCard(card));
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
    addForm.reset();
    togglePopup(addPopup);
}

//Event handlers
//Edit button clicks
profile.addEventListener('click', function (evt) {
  if ( evt.target.classList.contains( 'button_edit' ) ) {
      togglePopup(editPopup);
      renderEditForm();
  }
});

//Edit form submit
editPopup.addEventListener('submit', submitEditForm);

//Add button clicks
profile.addEventListener('click', function (evt) {
  if ( evt.target.classList.contains( 'button_add' ) ) {
      togglePopup(addPopup);
  }
});

//Add form submit
addPopup.addEventListener('submit', submitAddForm);

// Add six initial cards on load
initialCards.forEach(function (card) {
    renderCard(card);
});

renderEditForm();
