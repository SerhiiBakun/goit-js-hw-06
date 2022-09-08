// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onCheckInputLength);

function onCheckInputLength(event) {
  inputEl.classList.remove('invalid');
  inputEl.classList.remove('valid');
  Number(inputEl.dataset.length) === inputEl.value.length
    ? inputEl.classList.add('valid')
    : inputEl.classList.add('invalid');
}
