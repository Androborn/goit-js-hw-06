function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// 1. Размеры самого первого <div> - 30px на 30px.
// 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3. Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const collectionContainer = document.querySelector('#boxes');
const qtyInput = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  let collectionMarkupString = '';
  let boxSize = 30;

  if (qtyInput.value < +qtyInput.min || qtyInput.value > +qtyInput.max) {
    return alert(
      `Input must be within ${qtyInput.min} to ${qtyInput.max} range of integer numbers!`,
    );
  }

  for (let i = 1; i <= qtyInput.value; i += 1) {
    collectionMarkupString += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()};"></div>`;
    boxSize += 10;
  }

  collectionContainer.innerHTML = collectionMarkupString;
}

function destroyBoxes() {
  collectionContainer.innerHTML = '';
}
