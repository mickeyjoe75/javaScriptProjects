const NumberFormView = require('./views/number_form_view.js');
const NumberData = require('./models/number_data.js');

document.addEventListener('DOMContentLoaded', () => {
  const numberData = new NumberData();
  numberData.getData();

  const numberForm = document.querySelector('form#number-form');
  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEvents();
});
