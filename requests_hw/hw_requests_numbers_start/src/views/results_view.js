const PubSub = require('../helpers/pub_sub.js')

const Result = function (element) {
  this.element = element;
};

Result.prototype.bindEvents = function () {
  PubSub.subscribe('NumberData:fact-ready', (event) => {
    this.render(event.detail);
  });
};

Result.prototype.render = function (fact) {
  const numberElement = this.createElement('number', 'Number', fact.number);
  const factElement = this.createElement('fact', 'Fact', fact.text);
  this.element.appendChild(numberElement);
  this.element.appendChild(factElement);
};

Result.prototype.createElement = function (id, label, text) {
  const element = document.createElement('p');
  element.id = id;
  element.textContent = `${label}: ${text}`;
  return element;
};

// <p id="number">Number: 5</p>

module.exports = Result;
