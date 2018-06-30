const assert = require('assert');
const Transaction = require('../transaction.js');
const RecordStore = require('../record_store.js');
const Record = require('../record.js');
const RecordCollector = require('../record_Collector.js');

describe('Transaction',function () {
  let transaction;
  let record;
  let recordStore;
  let recordCollector;

  beforeEach(function () {
    recordCollector = new RecordCollector();
    recordStore = new RecordStore('Virgin');
    record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    transaction = new Transaction(recordCollector, recordStore);
  });
  // should have a buyer
  it('should have a buyer',function () {
    assert.strictEqual(transaction.buyer, recordCollector);
  });
  // should have a seller
  it('should have a seller',function () {
    assert.strictEqual(transaction.seller, recordStore);
  });
  // should be able handle an exchange of a record when the seller has the record and the buyer has enough funds



});
