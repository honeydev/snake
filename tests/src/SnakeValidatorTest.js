define(['tests/BaseTest'], function(BaseTest) {

    'use strict';

    return class SnakeValidatorTest extends BaseTest {

        constructor(container) {
            super(container);
            this._snakeValidator = container.getDependency('SnakeValidator');
        };

        test() {
            this._testGetApprovedDirection();
        };

       _testGetApprovedDirection() {
            
            let assert = this._chai.assert;
            let snakeValidator = this._snakeValidator;
            
            describe(`snakeValidator._getApprovedDirection method accept direction and new direction string if 
                new string correct return new direction string, 
                if not - return current direction string`, function() {

                    it('set correct current and new values', function() {
                        assert.deepEqual(snakeValidator.getApprovedDirection('up', 'right'), true);
                        assert.deepEqual(snakeValidator.getApprovedDirection('right', 'down'), true);
                        assert.deepEqual(snakeValidator.getApprovedDirection('down', 'left'), true);
                        assert.deepEqual(snakeValidator.getApprovedDirection('left', 'up'), true);
                    });

                    it('set incorrect current and new values', function() {
                        assert.deepEqual(snakeValidator.getApprovedDirection('up', 'down'), false);
                        assert.deepEqual(snakeValidator.getApprovedDirection('right', 'left'), false);
                        assert.deepEqual(snakeValidator.getApprovedDirection('down', 'up'), false);
                        assert.deepEqual(snakeValidator.getApprovedDirection('left', 'right'), false);
                    });

                    it('set incorrect currentDirection ', function() {
                        assert.throws(() => snakeValidator.getApprovedDirection('sadsas', 'right'), 'Invalid direction');
                        assert.throws(() => snakeValidator.getApprovedDirection(1312320, 'right'), 'Invalid direction');
                        assert.throws(() => snakeValidator.getApprovedDirection(false, 'right'), 'Invalid direction');
                    });
                });
        };
    };
});
