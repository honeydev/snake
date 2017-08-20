define(['tests/BaseTest'], function(BaseTest) {

    'use strict';

    return class CellTest extends BaseTest {

        constructor(mocha, chai, cell, config) {

            super(mocha, chai);
            this._cell = cell;
            this._config = config;
            this._mocha.setup('bdd');  
        };

        test() {
            this._testSetter(this._chai.assert, this._cell);
		    this._mocha.run();
		};

		_testSetter(assert, cell, deckSize = this._config.deckRowSize) {

            describe("this._cell.setCoordinates", function() {
                it("set Cell correct coordinates on deck", function() {
                    assert.equal(cell.setCoordinates([0, 0]), true);
                    assert.equal(cell.setCoordinates([10, 10]), true);
                });
            });

            describe("this._cell.setCoordinates", function() {
                it("set Cell incorrect coordinates on deck", function() {
                    assert.equal(cell.setCoordinates(''), false);
                    assert.equal(cell.setCoordinates(true), false);
                    assert.equal(cell.setCoordinates([0, 0, 0]), false);
                    assert.equal(cell.setCoordinates(['1', '2', 3]), false);
                });
            });
        };
	};
});