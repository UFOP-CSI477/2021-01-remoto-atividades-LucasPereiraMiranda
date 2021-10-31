function validateIsEmpty(InputField) {
  let value = InputField.value;
  if (value.length == 0) {
    window.alert(`O campo está vazio!`);
    InputField.value = '';
    InputField.focus();
    return false;
  }
  return true;
}

function validateIsNumber(InputField) {
  let value = InputField.value;
  if (isNaN(parseInt(value))) {
    window.alert(`O campo não é um número!`);
    InputField.value = '';
    InputField.focus();
    return false;
  }
  return true;
}

function validateIsEmail(InputField) {
  let value = InputField.value;
  if (!value.includes('@')) {
    window.alert(`O não é um e-mail `);
    InputField.value = '';
    InputField.focus();
    return false;
  }
  return true;
}

function validateFields() {
  const nameField = document.newPersonForm.name;
  const lastNameField = document.newPersonForm.lastName;
  const ageField = document.newPersonForm.age;
  const emailField = document.newPersonForm.email;
  const isValid =
    validateIsEmpty(nameField) &&
    validateIsEmpty(lastNameField) &&
    validateIsEmpty(ageField) &&
    validateIsEmpty(emailField) &&
    validateIsNumber(ageField) &&
    validateIsEmail(emailField);
  return isValid;
}
