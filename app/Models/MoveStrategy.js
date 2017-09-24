/**
 * @class MoveStrategy calculade new coordinates for snake head (first snake element)
 */
define(function() {

    'use strict';

    return class MoveStrategy {

        constructor(container) {
            this._config = container.getDependency('config');
        };
        /**
         * @method getHeadCoordinates return new snake head coordinates
         * @param {string} newDirection - new snake move direction
         * @param {array} snakeHeadCoordinates - arra must be contain two integer value - current coordinates
         * snake head in game deck 
         * @return {array|boolean} - if new coordinates calculate is correct return array with new
         * coordinatse, if not - return false
         */
        getHeadCoordinates(direction, snakeHeadCoordinates) {

            this._checkSnakeHeadCoordinates(snakeHeadCoordinates);

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
         * @method get coordinates for left direction
         * @return {array} snakeHeadCoordinates
         */
        _getLeftStepCoordinates(snakeHeadCoordinates) {
            if (snakeHeadCoordinates[1] === 0) {
                snakeHeadCoordinates[1] = this._config.deckRowSize;
            }
            snakeHeadCoordinates[1] = snakeHeadCoordinates[1] - 1;
            return snakeHeadCoordinates;
        };
        /**
         * @method get coordinates for up direction
         * @return {array} snakeHeadCoordinates
         */
        _getUpStepCoordinates(snakeHeadCoordinates) {
            if (snakeHeadCoordinates[0] === 0) {
                snakeHeadCoordinates[0] = this._config.deckRowSize;
            }
            snakeHeadCoordinates[0] = snakeHeadCoordinates[0] - 1;
            return snakeHeadCoordinates;
        };
        /**
         * @method get coordinates for right direction
         * @return {array} snakeHeadCoordinates
         */
        _getRightStepCoordinates(snakeHeadCoordinates) {
            if (snakeHeadCoordinates[1] === this._config.deckRowSize - 1) {
                snakeHeadCoordinates[1] = -1;
            }
            snakeHeadCoordinates[1] = snakeHeadCoordinates[1] + 1;
            return snakeHeadCoordinates;
        };
        /**
         * @method get coordinates for down direction
         * @return {array} snakeHeadCoordinates
         */
        _getDownStepCoordinates(snakeHeadCoordinates) {
            if (snakeHeadCoordinates[0] === this._config.deckRowSize - 1) {
                snakeHeadCoordinates[0] = -1;
            }
            snakeHeadCoordinates[0] = snakeHeadCoordinates[0] + 1;
            return snakeHeadCoordinates;
        };
    };
});