const showInputError = (form, input, errorMessage, {inputErrorClass, errorClass}) => {
  const error = form.querySelector(`#${input.id}-error`);
  input.classList.add(inputErrorClass);
  error.textContent = errorMessage;
  error.classList.add(errorClass);
};

const hideInputError = (form, input, {inputErrorClass, errorClass}) => {
  const error = form.querySelector(`#${input.id}-error`);
  input.classList.remove(inputErrorClass);
  error.classList.remove(errorClass);
  error.textContent = "";
};

const checkInputValidity = (form, input, rest) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, rest);
  } else {
    hideInputError(form, input, rest);
  }
};

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputs, submitButton, {inactiveButtonClass}) => {
  if (hasInvalidInput(inputs)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.setAttribute("disabled", "");
  } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.removeAttribute("disabled");
  }
};

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, ...rest}) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    const inputs = Array.from(form.querySelectorAll(inputSelector));
    const submitButton = form.querySelector(submitButtonSelector);

    // here, to check the button state in the very beginning
    toggleButtonState(inputs, submitButton, rest);

    inputs.forEach((input) => {
      input.addEventListener("input", function () {
        checkInputValidity(form, input, rest);
        // and here, to check it whenever any field input is changed
        toggleButtonState(inputs, submitButton, rest);
      });
    });
  });
};

// enabling validation by calling enableValidation()
// pass all the settings on call

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".button_submit",
  inactiveButtonClass: "button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active"
});
