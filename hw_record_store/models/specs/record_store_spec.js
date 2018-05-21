const assert = require('assert');
const RecordStore = require('../record_store.js');
const Record = require('../record.js');

describe('RecordStore',function () {
  let recordStore;


  beforeEach(function () {
    recordStore = new RecordStore('Virgin');
  });
  // should have a name:
  it('should have a name',function () {
    assert.strictEqual(recordStore.name, 'Virgin')
  });
  /*
  should start with no funds
  should be able to add funds
  should start with an empty collection of records
  should be able to add a record to its stock
  should be able to remove a record from its stock
  should be able to sell a record if it has the record
  */

});
