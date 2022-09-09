function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const refs = {
  inputAmount: document.querySelector('#controls > input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxesArea: document.querySelector('#boxes'),
};

refs.inputAmount.addEventListener('input', getBoxesAmount);
refs.createBtn.addEventListener('click', onCreateBoxesBtn);
refs.destroyBtn.addEventListener('click', onDestroyBoxes);

function getBoxesAmount(event) {
  event.currentTarget.value;
}

function onCreateBoxes() {
  let amountBoxes = refs.inputAmount.value;
  let boxesArr = [];
  for (let i = 0; i < amountBoxes; i += 1) {
    const width = 30 + i * 10;
    const height = 30 + i * 10;
    const color = getRandomHexColor();
    let box = `<div style='width: ${width}px; height: ${height}px;background-color:${color}'>
    </div>`;
    boxesArr.push(box);
  }
  return boxesArr.join('');
}

function onCreateBoxesBtn() {
  refs.boxesArea.innerHTML = onCreateBoxes();
}

function onDestroyBoxes() {
  refs.boxesArea.innerHTML = '';
}
