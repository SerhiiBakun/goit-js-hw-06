// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
const refs = {
  value: document.querySelector('#value'),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
};

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.

let counterValue = 0;

// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.

refs.decrementBtn.addEventListener('click', onClickDecrementBtn);
refs.incrementBtn.addEventListener('click', onClickIncrementBtn);

// Оновлюй інтерфейс новим значенням змінної counterValue.

function onClickDecrementBtn() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

function onClickIncrementBtn() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
