const NAME_PATTERN = /^[a-zа-яё]/i;
const MAX_LENGTH_OF_COMMENT = 150;

const validateNameField = (input) => {
  const errorMessage = input.parentElement.querySelector('span');

  input.classList.remove('invalid');

  if (!input.value || !NAME_PATTERN.test(input.value)) {
    input.classList.add('invalid');
  }

  errorMessage.textContent = createErrorMessage(input);
};

const validateCommentField = (input) => {
  const errorMessage = input.parentElement.querySelector('span');

  input.classList.remove('invalid');

  if (!input.value || input.value.length > MAX_LENGTH_OF_COMMENT) {
    input.classList.add('invalid');
  }

  errorMessage.textContent = createErrorMessage(input);
};

function createErrorMessage(input) {
  let str = '';

  if (!input.value) {
    return str = 'Это обязательное поле';
  }

  if (!NAME_PATTERN.test(input.value)) {
    return str = 'Имя должно начинаться с буквы';
  }

  if (input.value.length > MAX_LENGTH_OF_COMMENT) {
    return str = `Максимальное число символов: ${MAX_LENGTH_OF_COMMENT}`;
  }
}

export { validateCommentField, validateNameField };
