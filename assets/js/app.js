const form  = document.getElementById('contact-form');

btn.addEventListener('submit', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  form.reset();
});