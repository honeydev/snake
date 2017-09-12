define(['app/Models/BaseModel'], function(BaseModel) {

    'use strict';

    return class GameOverStrategy extends BaseModel {

        isGameOver(snake) {
            console.log(snake);
            const SNAKE_HEAD_COORDINATES = snake.getFirstSnakePart().getCoordinates();
            const POSSIBLE_EQUAL_COORDINATES = this._getSnakePartsPossibleEqualCoordinates(snake);
            if (this._isEqualCoordinates(SNAKE_HEAD_COORDINATES, POSSIBLE_EQUAL_COORDINATES)) {
                return true;
            }
            return false;
        };

        _isEqualCoordinates(snakeHeadCoordinates, possibleEqualCoordinates) {
            let z = possibleEqualCoordinates.length -1;
            console.log(snakeHeadCoordinates, possibleEqualCoordinates);
            for (z; z > 0; z--) {
                if (this._coordinatesIsEqual(snakeHeadCoordinates, possibleEqualCoordinates[z])) {
                    return true;
                }
            }
        };

        _getSnakePartsPossibleEqualCoordinates(snake) {
            let allSnakeCoordinates = snake.getAllSnakePartsCoordinates();
            let possibleEqualCoordinates = allSnakeCoordinates.slice(3, allSnakeCoordinates.length);
            console.log(allSnakeCoordinates, possibleEqualCoordinates);
            return possibleEqualCoordinates;
        };
    }; 
});