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

function validateFields() {
  const nameField = document.newProductForm.name;
  const productunityField = document.newProductForm.productunity;
  const isValid =
    validateIsEmpty(nameField) && validateIsEmpty(productunityField);
  return isValid;
}
