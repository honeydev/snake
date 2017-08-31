/**
 * @class MoveStrategy calculade new coordinates for snake head (first snake element)
 */
define(function() {

    'use strict';

    return class MoveStrategy {
        /**
         * @method getHeadCoordinates main class interface
         * @param {string} currentDirection - curent snake move direction
         * @param {array} snakeHeadCoordinates - arra must be contain two integer value - current coordinates
         * snake head in game deck 
         * @param {string} newDirection - new snake move direction
         * @return {array|boolean} - if new coordinates calculate is correct return array with new
         * coordinatse, if not - return false
         */
        getHeadCoordinates(currentDirection, snakeHeadCoordinates, newDirection) {
            let direction, directionType;

            if (!this._checkParams(currentDirection, snakeHeadCoordinates)) {
                return false;
            }
            //if new direction is incorrect we just calculate coordinates from current direction
            if (this._isNewCorrectDirrection(currentDirection, newDirection)) {
                console.log('is new direction', newDirection);
                direction = newDirection;
            } else {
                console.log('just old direction');
                direction = currentDirection;
            }

            console.log(direction, directionType, newDirection, currentDirection);
            if (direction === 'left') {
                return this._getLeftStepCoordinates(snakeHeadCoordinates);
            } else if (direction === 'up') {
                return this._getUpStepCoordinates(snakeHeadCoordinates);
            } else if (direction === 'right') {
                return this._getRightStepCoordinates(snakeHeadCoordinates);
            } else if (direction === 'down') {
                return this._getDownStepCoordinates(snakeHeadCoordinates);
            }
        };
        /** 
         * @method _checkParams check currentDirection and snakeHeadCoordinates
         * @param {string} currentDirection
         * @param {string} snakeHeadCoordinates
         * @return {boolean} true if checkin succesful or false if not
         */
        _checkParams(currentDirection, snakeHeadCoordinates) {
            console.log(currentDirection);
            try {
                this._checkDirection(currentDirection);
                this._checkSnakeHeadCoordinates(snakeHeadCoordinates);
            } catch (Error) {
                console.log(Error);
                return false;
            }
            return true;
        }
        /** 
         * @method checking newDirection value on correct
         * @param {string} currentDirection
         * @param {string} newDirrection 
         * @return {boolean} if new dirrection valid and different from current direction
         * retrune true, if not return false 
         */
        _isNewCorrectDirrection(currentDirection, newDirection) {
            console.log(currentDirection, newDirection);
            try {
                this._checkDirection(newDirection);
                this._checkDirectionOnChange(currentDirection, newDirection) 
                this._checkNewDirectionOnOpposite(currentDirection, newDirection);
            } catch (Error) {
                console.log(Error);
                return false;
            }
            return true;
        };
        /**
         * @method check snake head coordinates array
         * @throws {Error} snakeHeadCoordinates is not array
         * @throws {Error} snakeHeadCoordinates has invalid length
         */
        _checkSnakeHeadCoordinates(snakeHeadCoordinates) {
            const COORDINATE_LENGTH = 2;
            if (!Array.isArray(snakeHeadCoordinates)) 
                throw new Error('snakeHeadCoordinates is not array');
            if (snakeHeadCoordinates.length !== COORDINATE_LENGTH)
                throw new Error('snakeHeadCoordinates has invalid length');
        };
        /**
         * @method _checkNewDirectionOnOpposite check new dirrecion on opposite current dirrection,
         * snake can't start move in opposite direction
         * @throws {Error} newDirection is opposite current direction
         */
        _checkNewDirectionOnOpposite(currentDirection, newDirection) {

            const OPPOSITE_DIRECTIONS = {
                left: 'right',
                up: 'down',
                right: 'left',
                down: 'up'
            };
            
            if (OPPOSITE_DIRECTIONS[newDirection] == currentDirection) 
                throw new Error('newDirection is opposite current direction')
        };
        /**
         * @method _checkDirection check some direction value. 
         * It's should be in array VALID_DIRECTIONS
         * @throws {Error} Invalid direction
         */
        _checkDirection(direction) {

            const VALID_DIRECTIONS = ['left', 'up', 'right', 'down'];
            console.log(direction, VALID_DIRECTIONS.indexOf(direction));
            if (VALID_DIRECTIONS.indexOf(direction) == -1) {
                throw new Error('Invalid direction');
            }
        };
        /** 
         * @method _checkDirectionOnChange checks whether the changed move direction
         * @param {string} currentDirection
         * @param {string} newDirection
         * @throws {Error} Direction not change
         */
        _checkDirectionOnChange(currentDirection, newDirection) {
            if (this._directionNotChnaged(currentDirection, newDirection))
                throw new Error('Direction not change');
        };
        /** @method comprasion currentDirection and newDirection
         * @return {boolean} if currentDirection === newDirection return true
         */
        _directionNotChnaged(currentDirection, newDirection) {
            if (currentDirection == newDirection) return true;
            return false;
        };
        /**
         * @method get coordinates for left direction
         * @return {array} snakeHeadCoordinates
         */
        _getLeftStepCoordinates(snakeHeadCoordinates) {
            snakeHeadCoordinates[1] = snakeHeadCoordinates[1] - 1;
            return snakeHeadCoordinates;
        };
        /**
         * @method get coordinates for up direction
         * @return {array} snakeHeadCoordinates
         */
        _getUpStepCoordinates(snakeHeadCoordinates) {
            snakeHeadCoordinates[0] = snakeHeadCoordinates[0] - 1;
            return snakeHeadCoordinates;
        };
        /**
         * @method get coordinates for right direction
         * @return {array} snakeHeadCoordinates
         */
        _getRightStepCoordinates(snakeHeadCoordinates) {
            let newSnakeHeadCoordinates = snakeHeadCoordinates;
            newSnakeHeadCoordinates[1] = snakeHeadCoordinates[1] + 1;
            return newSnakeHeadCoordinates;
        };
        /**
         * @method get coordinates for down direction
         * @return {array} snakeHeadCoordinates
         */
        _getDownStepCoordinates(snakeHeadCoordinates) {
            snakeHeadCoordinates[0] = snakeHeadCoordinates[0] - 1;
            return snakeHeadCoordinates;
        };
    };
});