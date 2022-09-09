// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const refs = {
  body: document.querySelector('body'),
  changeColorBtn: document.querySelector('.change-color'),
  colorValue: document.querySelector('.color'),
};

refs.changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  const colorValue = getRandomHexColor();
  refs.body.style.backgroundColor = `${colorValue}`;
  refs.colorValue.textContent = `${colorValue}`;
}
