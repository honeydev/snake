define(function() {

    'use strict';

    return class MoveStrategy {

        getHeadCoordinates(currentDirection, snakeHeadCoordinates, newDirection) {
           
            if (!this._checkSnakeHeadCoordinates(snakeHeadCoordinates)) 
                    throw new Error('Invalid snakeHeadCoordinates');
            if (this._directionNotChnaged(currentDirection, newDirection)) 
                    throw new Error('Dirrection is not changed');
            if (!this._checkNewDirectionOnOpposite(currentDirection, newDirection))
                    throw new Error('New snake dirrection is opposite current dirrection');
            if (!this._checkDirection(currentDirection)) 
                    throw new Error('Invalid dirrection');
                
            if (newDirection === 'left') {
                return this._getLeftStepCoordinates(snakeHeadCoordinates);
            } else if (newDirection === 'up') {
                return this._getUpStepCoordinates(snakeHeadCoordinates);
            } else if (newDirection === 'right') {
                return this._getRightStepCoordinates(snakeHeadCoordinates);
            } else if (newDirection === 'down') {
                return this._getDownStepCoordinates(snakeHeadCoordinates);
            }
        };

        _checkSnakeHeadCoordinates(snakeHeadCoordinates) {

            const COORDINATE_LENGTH = 2;
            if (!Array.isArray(snakeHeadCoordinates)) return false;
            if (snakeHeadCoordinates.length !== COORDINATE_LENGTH) return false;
            return true;
        };

        _checkNewDirectionOnOpposite(currentDirection, newDirection) {

            let oppositeDirections = {
                left: 'right',
                up: 'down',
                right: 'left',
                down: 'up'
            };
            
            if (oppositeDirections[newDirection] == currentDirection) return false;
            return true; 
        };

        _checkDirection(currentDirection) {
            let validDirections = ['left', 'up', 'right', 'down'];
            if (validDirections.indexOf(currentDirection) !== -1) return true;
            return false;
        };

        _directionNotChnaged(currentDirection, newDirection) {
            if (currentDirection == newDirection) return true;
        };

        _getLeftStepCoordinates(snakeHeadCoordinates) {
            snakeHeadCoordinates[1] = snakeHeadCoordinates[1] - 1;
            return snakeHeadCoordinates;
        };

        _getUpStepCoordinates(snakeHeadCoordinates) {
            snakeHeadCoordinates[0] = snakeHeadCoordinates[0] - 1;
            return snakeHeadCoordinates;
        };

        _getRightStepCoordinates(snakeHeadCoordinates) {
            let newSnakeHeadCoordinates = snakeHeadCoordinates;
            newSnakeHeadCoordinates[1] = snakeHeadCoordinates[1] + 1;
            return newSnakeHeadCoordinates;
        };

        _getDownStepCoordinates(snakeHeadCoordinates) {
            snakeHeadCoordinates[0] = snakeHeadCoordinates[0] - 1;
            return snakeHeadCoordinates;
        };
    };
});