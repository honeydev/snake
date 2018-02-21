define(['tests/BaseTest'], function(BaseTest) {

    'use strict';

    return class FoodGenerator extends BaseTest {
        
        constructor(container) {
            super(container);
            this._snake = container.getDependency('Snake', container);
            this._container = container;
            this._fillSnake(this._snake);
            this._config = container.getDependency('config');
            this._foodGenerator = container.getDependency('FoodGenerator', container, this._snake);
        };

        _fillSnake(snake) {

            let counter = 7;
            
            let snakeHead = this._container.getDependency('SnakePart', this._container, null);
            snakeHead.setCoordinates([6, 7]);
            snake.addSnakePart(snakeHead);
            let previousPart = snakeHead;  

            while (counter < 12) {
                let snakePart = this._container.getDependency('SnakePart', this._container, previousPart);
                snakePart.setCoordinates([counter, 7]);
                snake.addSnakePart(snakePart);
                previousPart = snakePart;
                counter++;
            }
        };

        test() {
            this._testGenerateFood();
        };

        _testGenerateFood() {
            let foodGenerator = this._foodGenerator;
            let assert = this._chai.assert;
            const yMinimal = 6;
            const yMaximal = 11;
            const xCoordinate = 7;
            describe(`foodGenerator.generateFoodPart method generate foodPart object with correct 
                cordinates. Cordinates should not match with snake parts coordinates`, function() {
                let foodPart = foodGenerator.generateFoodPart();
                const foodPartYCoorinate = foodPart.getCoordinates()[0];
                it('foodPart must be object', function() {
                    assert.isObject(foodPart);
                });

                it('foodPart must have property _currentCoordinates', function() {
                    assert.nestedProperty(foodPart, '_currentCoordinates');
                   
                });

                it('foodPart y coordinate must be less then all snake parts y coordinate', function() {
                    
                    for (let i = 0; i < 50; i++) {
                        let foodPart = foodGenerator.generateFoodPart();
                        if (foodPartYCoorinate <= yMinimal && xCoordinate == 7) {
                            assert.isAtMost(foodPartYCoorinate, yMinimal);
                        } else if (foodPartYCoorinate >= yMaximal && xCoordinate == 7) {
                            assert.isAtLeast(foodPartYCoorinate, yMaximal);
                        }                    
                    }
                });
            });
        };
    }; 
});