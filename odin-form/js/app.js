function checkSamePassword() {
  const password = document.querySelector('input[name=password]');
  const confirm = document.querySelector('input[name=confirm-password]');
  if (confirm.value === password.value) {
    confirm.setCustomValidity('');
    password.classList.remove('error');
    confirm.classList.remove('error');
  } else {
    confirm.setCustomValidity('Passwords do not match');
    password.classList.add('error');
    confirm.classList.add('error');
  }
}
