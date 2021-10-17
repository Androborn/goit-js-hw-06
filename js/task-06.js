// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', inputValidate);

// function inputValidate(event) {
//   if (textInput.classList.value === '') {
//     if (event.currentTarget.value.length === +textInput.dataset.length) {
//       return textInput.classList.add('valid');
//     }

//     textInput.classList.add('invalid');
//   }

//   if (textInput.classList !== '') {
//     if (event.currentTarget.value.length === +textInput.dataset.length) {
//       return textInput.classList.replace('invalid', 'valid');
//     }

//     textInput.classList.replace('valid', 'invalid');
//   }
// }

function inputValidate(event) {
  if (event.currentTarget.value.length === +textInput.dataset.length) {
    return textInput.classList.value === ''
      ? textInput.classList.add('valid')
      : textInput.classList.replace('invalid', 'valid');
  }

  textInput.classList.value === ''
    ? textInput.classList.add('invalid')
    : textInput.classList.replace('valid', 'invalid');
}
