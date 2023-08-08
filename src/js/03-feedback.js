import throttle from 'lodash.throttle';

const myForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const savedFormState = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedFormState) {
  myForm.email.value = savedFormState.email;
  myForm.message.value = savedFormState.message;
}

const throttleEvent = throttle(formState => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
  console.log(formState);
}, 500);

myForm.addEventListener('input', event => {
  const {
    elements: { email, message },
  } = event.currentTarget;

  const formState = { email: email.value, message: message.value };
  throttleEvent(formState);
});

myForm.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  const formState = { email: email.value, message: message.value };
  console.log(formState);
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
});
