define(['tests/BaseTest'], function(BaseTest) {

    'use strict';

    return class MoveStrategyTest extends BaseTest {

        constructor(container) {
            super(container);
            this._moveStrategy = container.getDependency('MoveStrategy', container);
            this._config = container.getDependency('config');
        };

        test() {
            this._testGetHeadCoordinates();
        };

        _testGetHeadCoordinates() {

            let assert = this._chai.assert;
            let moveStrategy = this._moveStrategy;
            const deckRowSize = this._config.deckRowSize;

            describe(`moveStrategy._getHeadCoordinates method accept direction and snakeHeadCoordinates and
                return new coordinates array or trhow error if accepted values incorrect`, function() {
                    
                    it('set correcct snakeHeadCoordinates', function() {
                        assert.deepEqual(moveStrategy.getHeadCoordinates('up', [4, 5]), [3, 5]);
                        assert.deepEqual(moveStrategy.getHeadCoordinates('right', [4, 5]), [4, 6]);
                        assert.deepEqual(moveStrategy.getHeadCoordinates('down', [4, 5]), [5, 5]);
                        assert.deepEqual(moveStrategy.getHeadCoordinates('left', [4, 5]), [4, 4]);
                    });

                    it(`set current snakeHeadCoordinate in last element in array,
                     function should return coordinates with 0 position, for axis Y, X`, function() {
                        assert.deepEqual(moveStrategy.getHeadCoordinates('up', [0, 4]), [deckRowSize-1, 4]);                    
                        assert.deepEqual(moveStrategy.getHeadCoordinates('left', [4, 0]), [4, deckRowSize-1]);
                    });

                    it(`set current snakeHeadCoordinate in first element in array,
                     function should return coordinates with maximal array position, for axis Y, X`, function() {
                    
                        assert.deepEqual(moveStrategy.getHeadCoordinates('right', [4, deckRowSize-1]), [4, 0]);
                        assert.deepEqual(moveStrategy.getHeadCoordinates('down', [deckRowSize-1, 4]), [0, 4]);
                    });


                    it('set incorrecct snakeHeadCoordinates', function() {
                        assert.throws(() => moveStrategy.getHeadCoordinates('left', 'not array'), 'snakeHeadCoordinates is not array');
                        assert.throws(() => moveStrategy.getHeadCoordinates('left', [0, 0, 0]), 'snakeHeadCoordinates has invalid length');
                    });
                });
        };
    };
});