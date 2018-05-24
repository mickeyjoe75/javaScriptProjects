const PubSub = require('../helpers/pub_sub.js')

const Result = function (element) {
  this.element = element;
};

Result.prototype.bindEvents = function () {
  PubSub.subsribe('NumberData:fact-ready', (event) => {
    this.displayResult(event.detail);
  });
};

Result.prototype.displayResult = function (fact) {
  const container = document.querySelector('#number-fact');
  const paragraph = document.createElement('p');
  paragraph.textContent = fact.text;
  container.appendChild(paragraph);
};

module.exports = Result;
