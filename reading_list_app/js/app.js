document.addEventListener('DOMContentLoaded', () => {
console.log("I loaded! :D");

// const button = document.querySelector('#button');
// button.addEventListener('click', handleButtonClick);
//
// const input = document.querySelector('#input');
// input.addEventListener('input', handleInputChanged);
//
// const select = document.querySelector('#select');
// select.addEventListener('change', handleSelectInputChanged);

const form = document.querySelector('#form');
form.addEventListener('submit', handleFormInputChanged);

});
// const handleButtonClick = function () {
//   const buttonLabel = document.querySelector('#button-result');
//   buttonLabel.textContent = 'You clicked me 8U';
// }
//
// const handleInputChanged = function (event) {
//   const inputResult = document.querySelector('#input-result');
//   inputResult.textContent = `You inputted the text ${event.target.value}`;
// }
// const handleSelectInputChanged = function (event) {
//   const selectInputResult = document.querySelector('#select-result');
//   selectInputResult.textContent = `You Selected the option ${event.target.value}`;
// }
const handleFormInputChanged = function (event) {
  event.preventDefault();
  const formInputResult = document.querySelector('#form-result');
  formInputResult.textContent = 'Title: ' + event.target.title.value + '\n' + 'Author: ' + event.target.author.value + '\n' + 'Genre: ' + event.target.select.value + ' ' + 'Category: ' + event.target.category.value;
}
