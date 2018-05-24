const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const NumberData = function () {
  this.randomNumber = null;
}

NumberData.prototype.getData = function () {
  const request = new Request('http://numbersapi.com/1?json');
  request.get((data) => {
    this.randomNumber = data[0];
    PubSub.publish('NumberFormView:submit', this.randomNumber);
  });

};

module.exports = NumberData;
