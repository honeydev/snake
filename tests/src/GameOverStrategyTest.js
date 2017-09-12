define(['tests/BaseTest'], function(BaseTest) {

    'use strict';

    return class GameOverStrategyTest extends BaseTest {

        constructor(container) {
            super(container);
            console.log('food generator');
            this._gameOverStrategy = container.getDependency('GameOverStrategy');
            this._snake = container.getDependency('Snake', container);
            this._container = container;
        };

        test() {
            this._testIsGameOver();
        };

        _testIsGameOver() {

            let gameOverStrategy = this._gameOverStrategy;
            let snake = this._snake;
            let assert = this._chai.assert;
            this._fillSnake();
            describe(`
                gameOverStrategy.isGameOver method return true if gameOverStrategy._isEqualCoordinates()
                method find snake parts coordinates equal snake part coordinates (first element of snake).
                we create snake object, and add some snake parts. One of snake part has equal coordinates
                with snake part.
                `,
                function() {
                    it('method isGameOver should find snakePart coordinates that equal snake head coordinates',
                        function() {
                            assert.deepEqual(gameOverStrategy.isGameOver(snake), true, 'must be true');
                    });
                }); 
        };

        _fillSnake() {
            this._snake._snake = [];
            let snakeHead = this._container.getDependency('SnakePart', this._container, null);
            snakeHead.setCoordinates([6, 7]);
            let secondSnakePart = this._container.getDependency('SnakePart', this._container, snakeHead);
            secondSnakePart.setCoordinates([7, 7]);
            let thirdSnakePart = this._container.getDependency('SnakePart', this._container, secondSnakePart);
            thirdSnakePart.setCoordinates([7, 8])
            let fourSnakePart = this._container.getDependency('SnakePart', this._container, thirdSnakePart);
            fourSnakePart.setCoordinates([6, 8]);
            let fiveSnakePart = this._container.getDependency('SnakePart', this._container, fourSnakePart);
            fiveSnakePart.setCoordinates([6, 7]);
            this._snake.addSnakePart(snakeHead);
            this._snake.addSnakePart(secondSnakePart);
            this._snake.addSnakePart(thirdSnakePart);
            this._snake.addSnakePart(fourSnakePart);
            this._snake.addSnakePart(fiveSnakePart);
        };
    }; 
});