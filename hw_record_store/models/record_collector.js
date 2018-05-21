const RecordCollector = function () {
  this.funds = 0;
  this.collection = [];
}


RecordCollector.prototype.addFunds = function (amount) {
  this.funds += amount;
};

RecordCollector.prototype.hasFunds = function (amount) {
  return this.funds >= amount;
};

RecordCollector.prototype.removeFunds = function (amount) {
  this.funds -= amount;
};



module.exports = RecordCollector;
