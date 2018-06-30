const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const NumberData = function () {
}

NumberData.prototype.bindEvents = function () {
  PubSub.subscribe('NumberFormView:submit',(event) => {
    this.handleNumberSubmit(event.detail);
  });
};

NumberData.prototype.getData = function (number) {
  const url = `http://numbersapi.com/${ number }?json`;
  const request = new Request(url);
  // request.get((data) => {
  //   PubSub.publish('NumberData:fact-ready', data);
  // });
  request.get()
  .then(data => PubSub.publish('NumberData:fact-ready', data))
  .catch(err => console.log(err))
};

NumberData.prototype.handleNumberSubmit = function (number) {
  this.getData(number);
};


module.exports = NumberData;
