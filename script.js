const form = document.getElementById('survey-form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.querySelectorAll('input, select').forEach((el) => el.classList.add('touched'));
  if (!form.checkValidity()) {
    result.textContent = 'Please fill in your name, a valid email and your role.';
    return;
  }
  const data = new FormData(form);
  const answers = Object.fromEntries(data);
  answers.improve = data.getAll('improve');
  console.table(answers);
  result.textContent = `Thanks, ${answers.name}! Your answers were recorded.`;
  form.reset();
});
