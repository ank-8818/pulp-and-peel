// Getting elements
const form = document.querySelector('#newsletter-form');
const input = form.querySelector('input[type="email"]');
const button = form.querySelector('button[type="submit"]');
const msg = form.querySelector('#form-msg');


// Form validation
const isValid = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

button.disabled = true; // stays disabled until the email looks valid

input.addEventListener('input', () => {
  button.disabled = !isValid(input.value);
  msg.textContent = ''; // clear the old message when they start typing again
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (!isValid(input.value)) return;

  // Mock success, no backend
  msg.textContent = `You're in! Check ${input.value} for your 10% code.`;
  input.value = '';
  button.disabled = true;
});