define(['tests/BaseTest'], function(BaseTest) {

    'use strict';

    return class MoveStrategyTest extends BaseTest {

        constructor(mocha, chai, moveStrategy, config) {
            super(mocha, chai);
            this._moveStrategy = moveStrategy;
            this._config = config;
        };

        test(
            mocha = this._mocha, 
            chai = this._chai, 
            moveStrategy = this._moveStrategy,
            expectedRowLength = this._config.deckRowSize,
            config = this._config
            ) {
            
            let assert = this._chai.assert;
            this._testStrategy(assert, moveStrategy, config);
        };

        _testStrategy(assert, moveStrategy, chai) {

            describe(`moveStrategy._getHeadCoordinates. getHeadCoordinates method accept direction, 
                        array with coordinates, stepType and must return changed coordinates array`,
                function() {

                it('answer is array', function() {
                    assert.isArray(moveStrategy.getHeadCoordinates('left', [6, 4], 'up'), 'Yeah, answer is array');
                });

                it('first test left move', function() {

                    assert.deepEqual(moveStrategy.getHeadCoordinates('down', [6, 4], 'left'), [6, 3]);
                });

                it('test up move', function() {
                    assert.deepEqual(moveStrategy.getHeadCoordinates('left', [6, 4], 'up'), [5, 4]);
                });

                it('test right move', function() {
                    assert.deepEqual(moveStrategy.getHeadCoordinates('up', [6, 4], 'right'), [6, 5]);
                });

                it('test down move', function() {
                    assert.deepEqual(moveStrategy.getHeadCoordinates('left', [6, 4], 'down'), [5, 4]);
                });
            });

            describe(`moveStrategy._getHeadCoordinates. Trying set incorrect values`,
                function() {

                it('throw exception if coordinates array incorrect length', function() {
                    assert.throws(() => moveStrategy.getHeadCoordinates('left', [6, 4, 5], 'up'), Error, "Invalid snakeHeadCoordinates");
                });

                it('throw exception if if dirrection and newDirrection is equal', function() {
                    assert.throws(() => moveStrategy.getHeadCoordinates('up', [6, 4], 'up'), Error, "Dirrection is not changed");
                });

                it('throw exception if dirrection and newDirrection is opposite', function() {
                    assert.throws(() => moveStrategy.getHeadCoordinates('left', [6, 4], 'right'), 
                        Error, "New snake dirrection is opposite current dirrection");
                    assert.throws(() => moveStrategy.getHeadCoordinates('up', [6, 4], 'down'), 
                        Error, "New snake dirrection is opposite current dirrection");
                    assert.throws(() => moveStrategy.getHeadCoordinates('right', [6, 4], 'left'), 
                        Error, "New snake dirrection is opposite current dirrection");
                    assert.throws(() => moveStrategy.getHeadCoordinates('down', [6, 4], 'up'), 
                        Error, "New snake dirrection is opposite current dirrection");
                });
            });
        };
    };
});