// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const categoriesEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesEl.children.length}`);

// 2. Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

for (const category of categoriesEl.children) {
  let categoryTitle = category.querySelector('h2');
  let categoryElements = category.querySelectorAll('li');
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryElements.length}`);
}
