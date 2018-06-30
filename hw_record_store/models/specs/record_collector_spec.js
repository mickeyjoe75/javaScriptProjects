const assert = require('assert');
const RecordCollector = require('../record_Collector.js');
const Record = require('../record.js');

describe('RecordCollector', function () {
  let recordCollector;

  beforeEach(function () {
    recordCollector = new RecordCollector();
  });
  // should start with no funds
  it('should start with no funds',function () {
    assert.strictEqual(recordCollector.funds, 0);
  });
  // should be able to add funds
  it('should be able to add funds',function () {
    recordCollector.addFunds(1000);
    assert.strictEqual(recordCollector.funds, 1000);
  });
  // should be able to remove funds
  it('should be able to remove funds',function () {
    recordCollector.addFunds(500);
    recordCollector.removeFunds(200);
    assert.strictEqual(recordCollector.funds, 300);
  });
  // should start with an empty collection of records
  it('should start with an empty collection of records',function () {
    assert.strictEqual(recordCollector.collection.length, 0);
  });
  // should be able to add a record to its collection
  it('should be able to add a record to its collection',function () {
    recordCollector.collection.push('MJ');
    assert.strictEqual(recordCollector.collection.length, 1);
  });
  // should be able to remove a record from it's collection
  it('should be able to remove a record to its collection',function () {
    recordCollector.collection.push('MJ','Spice Girls');
    recordCollector.collection.pop();
    assert.strictEqual(recordCollector.collection.length, 1);
  });


  /*
  should be able to find a record by title
  should be able to buy a record if it has enough funds
  should be able to sell a record if it has the record
  */

});
