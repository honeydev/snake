define(['tests/BaseTest'], function(BaseTest) {

    'use strict';

    return class CellTest extends BaseTest {

        constructor(container) {

            super(container);
            this._cell = container.getDependency('Cell', container);
            this._config = container.getDependency('config');
        };

        test() {
            this._testSetter();
		    this._mocha.run();
		};

		_testSetter() {

            let assert = this._chai.assert;
            let cell = this._cell;

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