
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_disabled");
  } else {
    buttonElement.classList.remove("button_disabled");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const buttonElement = formElement.querySelector(".button_submit");

  // here, to check the button state in the very beginning
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      // and here, to check it whenever any field input is changed
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
     setEventListeners(formElement);
  });
};

// enabling validation by calling enableValidation()
// pass all the settings on call

enableValidation({
  formElement: ".form",
  inputElement: ".form__input",
  buttonElement: ".button_submit",
  inactiveButtonClass: "button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form_input-error_active"
});
