// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const textInput = document.querySelector('#validation-input');

// Solution #1 //

// textInput.addEventListener('blur', inputValidate);

// function inputValidate(event) {
//   if (event.currentTarget.value.length === +textInput.dataset.length) {
//     return textInput.classList.value === ''
//       ? textInput.classList.add('valid')
//       : textInput.classList.replace('invalid', 'valid');
//   }

//   textInput.classList.value === ''
//     ? textInput.classList.add('invalid')
//     : textInput.classList.replace('valid', 'invalid');
// }

// Solution #2 //

inputValidate(textInput);

function inputValidate(input) {
  const { dataset, classList } = input;
  input.addEventListener('blur', classSet);

  function classSet(event) {
    if (event.currentTarget.value.length === +dataset.length) {
      if (classList.value) {
        return classList.replace('invalid', 'valid');
      } else {
        return classList.add('valid');
      }
    } else {
      if (classList.value) {
        return classList.replace('valid', 'invalid');
      } else {
        return classList.add('invalid');
      }
    }
  }
}
