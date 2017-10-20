/** @class SnakeValidator validate data given Snake class */ 
define(function() {

    'use strict';

    return class SnakeValidator {

        getApprovedDirection(currentDirection, newDirection) {
            this._checkDirection(currentDirection);
            if (this._isNewCorrectDirrection(currentDirection, newDirection))
                return true;
            return false;
        };

        _isNewCorrectDirrection(currentDirection, newDirection) {
            try {
                this._checkDirection(newDirection);
                this._checkNewDirectionOnOpposite(currentDirection, newDirection);
                this._checkDirectionOnChange(currentDirection, newDirection) 
                return true;
            } catch (Error) {
                return false;
            }
        };
        /**
         * @method _checkNewDirectionOnOpposite check new dirrecion on opposite current dirrection,
         * snake can't start move in opposite direction
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
            const VALID_DIRECTIONS = ['left', 'up', 'right', 'down'];

            if (VALID_DIRECTIONS.indexOf(direction) === -1) {
                throw new Error('Invalid direction');
            }
        };
        /** 
         * @method _checkDirectionOnChange checks whether the changed move direction
         */
        _checkDirectionOnChange(currentDirection, newDirection) {
            if (this._directionNotChnaged(currentDirection, newDirection))
                throw new Error('Direction not change');
        };

        _directionNotChnaged(currentDirection, newDirection) {
            if (currentDirection == newDirection) return true;
            return false;
        };
    };
});