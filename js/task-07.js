// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const fontSizeSlider = document.querySelector('#font-size-control');
const adjustedText = document.querySelector('#text');

fontSizeSlider.addEventListener('input', fontSizeAlter);

function fontSizeAlter(event) {
  return (adjustedText.style.fontSize = `${event.currentTarget.value}px`);
}
