// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const textInput = document.querySelector('#name-input');
const uiOutput = document.querySelector('#name-output');

function inputHandler(event) {
  if (event.currentTarget.value === '') {
    return (uiOutput.textContent = 'Anonymous');
  }
  uiOutput.textContent = event.currentTarget.value;
}

textInput.addEventListener('input', inputHandler);
