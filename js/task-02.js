const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingridientsMarkup = document.querySelector('#ingredients');

function markupAdd(targetMarkupElement, features) {
  let featuresList = [];

  features.forEach(ingridient => {
    const ingridientItem = document.createElement('li');

    ingridientItem.textContent = ingridient;
    ingridientItem.classList.add('item');

    featuresList.push(ingridientItem);
  });

  targetMarkupElement.append(...featuresList);
}

markupAdd(ingridientsMarkup, ingredients);
