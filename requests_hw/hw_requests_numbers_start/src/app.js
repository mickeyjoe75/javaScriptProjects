const NumberFormView = require('./views/number_form_view.js');
const NumberData = require('./models/number_data.js');
const Result = require('./views/results_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const numberForm = document.querySelector('form#number-form');
  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEvents();

  const resultContainer = document.querySelector('#number-fact');
  const Result = 


  const result = new Result();
  result.bindEvents();


});
