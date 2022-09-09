// Напиши скрипт управління формою логіна.

const formLogin = document.querySelector('.login-form');

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
formLogin.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  // Під час відправлення форми сторінка не повинна перезавантажуватися.
  event.preventDefault();

  // Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
  // Для доступу до елементів форми використовуй властивість elements.
  const {
    elements: { email, password },
  } = event.currentTarget;

  // Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
  if (email.value === '') {
    return alert('Будь ласка заповніть поле email!');
  }
  if (password.value === '') {
    return alert('Будь ласка заповніть поле password!');
  }

  // Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
