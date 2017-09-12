/** @class SnakeValidator validate data given Snake class */ 
define(function() {

    'use strict';

    return class SnakeValidator {
        /**
         * @method getApprovedDirection if new direction correct return ir, if not - return current direction
         * @param currentDirection {string} 'left', 'right', 'up', 'down'
         * @param newDirrection {string} 'left', 'right', 'up', 'down'
         * @return {string} currentDirection or newDirection
         */
        getApprovedDirection(currentDirection, newDirection) {

            this._checkDirection(currentDirection);
            if (this._isNewCorrectDirrection(currentDirection, newDirection))
                return true;
            return false;
        };
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
                this._checkNewDirectionOnOpposite(currentDirection, newDirection);
                this._checkDirectionOnChange(currentDirection, newDirection) 
                return true;
            } catch (Error) {
                console.log(Error);
                return false;
            }
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
                throw new Error('newDirection is opposite current direction');
        };
        /**
         * @method _checkDirection check some direction value. 
         * It's should be in array VALID_DIRECTIONS
         * @throws {Error} Invalid direction
         */
        _checkDirection(direction) {
            console.log('_checkDirection', direction);
            const VALID_DIRECTIONS = ['left', 'up', 'right', 'down'];
            console.log(direction, VALID_DIRECTIONS.indexOf(direction));
            if (VALID_DIRECTIONS.indexOf(direction) === -1) {
                console.log('throw');
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
    };
});