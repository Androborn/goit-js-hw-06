function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

const backgroundContainer = document.querySelector('body');
const colorNamer = document.querySelector('.color');
const colorChangeBtn = document.querySelector('button.change-color');

colorChangeBtn.addEventListener('click', handleClickBgColorChange);

function handleClickBgColorChange() {
  const colorPicker = getRandomHexColor();
  backgroundContainer.style.backgroundColor = colorPicker;
  colorNamer.textContent = colorPicker;
}
