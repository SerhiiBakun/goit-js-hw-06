const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// HTML містить порожній список ul#ingredients.
// Напиши скрипт, який для кожного елемента масиву ingredients:

const ingredientsEl = ingredients.map(ingredient => {
  // 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement
  const ingredientEl = document.createElement('li');

  // 2.Додасть назву інгредієнта як його текстовий вміст.
  ingredientEl.textContent = ingredient;

  // 3. Додасть елементу клас item.
  ingredientEl.classList.add('item');

  return ingredientEl;
});

// 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredientList = document.querySelector('#ingredients');

ingredientList.append(...ingredientsEl);
