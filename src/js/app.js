import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from "./config/ui.config";
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login } from './services/auth.service';
import { notify} from './views/notifications';
import { getNews } from './services/news.service';

const {form, inputEmail, inputPassword} = UI;
const inputs = [inputEmail, inputPassword];

// Events
form.addEventListener("submit", (e) => {
  e.preventDefault();
  onSubmit();
});
inputs.forEach((input) => {
  input.addEventListener("focus", (e) => {
    removeInputError(input);
  });
});

// Handlers
async function onSubmit() {
  let isValidForm = inputs.every((input) => {
    const isValidInput = validate(input);
    if(!isValidInput) {
      removeInputError(input);
      showInputError(input);
    }
    return isValidInput;
  });

  if(!isValidForm) return;
  try {
    await login(inputEmail.value, inputPassword.value);
    await getNews();
    form.reset();
    notify({msg: "Success!", className: "alert-success"});
  } catch(error) {
    notify({msg: "Error!", className: "alert-danger"});
  }
}