// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
const categoriesCounter = categories => {
  console.log(`Number of categories: ${categories.children.length}`);
};

const categories = document.querySelector('#categories');

categoriesCounter(categories);

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
const categoryNamerElementsCounter = elements => {
  elements.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
  });
};

const categoryElements = document.querySelectorAll('#categories .item');

categoryNamerElementsCounter(categoryElements);
