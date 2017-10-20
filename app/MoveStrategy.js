define(function() {

    'use strict';

    return class MoveStrategy {
        /**
         * @param currentDirection string with current snake dirrection left, up, right or down
         * @param snakeHeadCoordinates array array with int values - coordinates snakePart in deck
         * @param newDirection string with current snake dirrection left, up, right or down
         * @return array with coordinates like [0, 0]
         */
        getHeadCoordinates(currentDirection, snakeHeadCoordinates, newDirection) {
            console.log(snakeHeadCoordinates);
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
            snakeHeadCoordinates[1] = --snakeHeadCoordinates[1];
            return snakeHeadCoordinates;
        };

        _getUpStepCoordinates(snakeHeadCoordinates) {
            snakeHeadCoordinates[0] = ++snakeHeadCoordinates[0];
            return snakeHeadCoordinates;
        };

        _getRightStepCoordinates(snakeHeadCoordinates) {
            snakeHeadCoordinates[1] = ++snakeHeadCoordinates[1];
            return snakeHeadCoordinates;
        };

        _getDownStepCoordinates(snakeHeadCoordinates) {
            snakeHeadCoordinates[0] = --snakeHeadCoordinates[0];
            return snakeHeadCoordinates;
        };
    };
});