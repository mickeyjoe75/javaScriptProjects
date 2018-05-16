const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic', 50, ['T-Rex, Rex']);

  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic' );
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  describe('dinosaurs', function () {

    it('should have a collection of dinosaurs', function () {
      const actual = park.dinosaurs;
      assert.deepStrictEqual(actual, []);

    });

    it('should be able to add a dinosaur to its collection', function () {
      park.addDinosaur('T-Rex');
      const actual = park.dinosaurs.length;
      assert.deepStrictEqual(actual, 1);
    });

    it('should be able to remove a dinosaur from its collection', function () {
      park.removeDinosaur();
      const actual = park.dinosaurs.length;
      assert.deepStrictEqual(actual,0);
    });

    xit('should be able to find all dinosaurs of a particular species', function () {

    });

    xit('should be able to remove all dinosaurs of a particular species', function () {

    });

    xit('should be able to find the dinosaur that attracts the most visitors', function () {

    });
  });

});
