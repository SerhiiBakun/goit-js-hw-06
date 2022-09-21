// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
  event.currentTarget.value.trim() === ''
    ? (refs.nameOutput.textContent = 'Anonymous')
    : (refs.nameOutput.textContent = event.currentTarget.value);
}
