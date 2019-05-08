const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    bulbasaur = new Dinosaur('bulbasaur', 'herbivore', 1000);
    tyranitar = new Dinosaur('tyranitar', 'carnivore', 400);
    venusaur = new Dinosaur('venusaur', 'herbivore', 70);

    park = new Park("JP", 15, [venusaur, bulbasaur]);

  });

  it('should have a name', function () {
    const actual = park.name
    assert.strictEqual(actual, "JP");
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 15);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(tyranitar);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(tyranitar);
    park.removeDino(venusaur);
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 2)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.mostVisitors();
    assert.deepStrictEqual(actual, 'bulbasaur')
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const actual = park.findSpecies('bulbasaur');
    assert.deepStrictEqual(actual, [bulbasaur]);
  });

  it('should be able to remove all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day', function () {
    const actual = park.visitorsPerDay();
    assert.strictEqual(actual, 1070)
  })

  it('should be able to Calculate the total number of visitors per year', function () {
    const actual = park.visitorsPerYear();
    assert.strictEqual(actual, 390550)
  })

  it('should be able to Calculate the total revenue from ticket sales for one year', function () {
    const actual = park.revenuePerYear();
    assert.strictEqual(actual, 5858250)
  })

});
