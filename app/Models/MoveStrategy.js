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
         * @param  {[string]} direction
         * @param  {[array]} snakeHeadCoordinates
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
         * @param  {[array]} snakeHeadCoordinates [description]
         * @throws Error
         */
        _checkSnakeHeadCoordinates(snakeHeadCoordinates) {
            const COORDINATE_LENGTH = 2;
            if (!Array.isArray(snakeHeadCoordinates)) 
                throw new Error('snakeHeadCoordinates is not array');
            if (snakeHeadCoordinates.length !== COORDINATE_LENGTH)
                throw new Error('snakeHeadCoordinates has invalid length');
        };
        /**
         * @param  {[array]} snakeHeadCoordinates [description]
         * @return {[array]}                      [description]
         */
        _getLeftStepCoordinates(snakeHeadCoordinates) {
            if (snakeHeadCoordinates[1] === 0) {
                snakeHeadCoordinates[1] = this._config.deckRowSize;
            }
            snakeHeadCoordinates[1] = snakeHeadCoordinates[1] - 1;
            return snakeHeadCoordinates;
        };
        /**
         * @param  {[array]} snakeHeadCoordinates
         * @return {[array]}
         */
        _getUpStepCoordinates(snakeHeadCoordinates) {
            if (snakeHeadCoordinates[0] === 0) {
                snakeHeadCoordinates[0] = this._config.deckRowSize;
            }
            snakeHeadCoordinates[0] = snakeHeadCoordinates[0] - 1;
            return snakeHeadCoordinates;
        };
        /**
         * @param  {[array]} snakeHeadCoordinates [description]
         * @return {[array]}                      [description]
         */
        _getRightStepCoordinates(snakeHeadCoordinates) {
            if (snakeHeadCoordinates[1] === this._config.deckRowSize - 1) {
                snakeHeadCoordinates[1] = -1;
            }
            snakeHeadCoordinates[1] = snakeHeadCoordinates[1] + 1;
            return snakeHeadCoordinates;
        };
        /**
         * @param  {[array]} snakeHeadCoordinates [description]
         * @return {[array]}                      [description]
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