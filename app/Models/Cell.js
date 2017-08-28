/**
 * @class default element game deck 
 * @property {array} _currentCoordinates coordinates cell in _deck @property array
 * from @class Deck. Example [4, 1]. First value Y cordinate, second X coordinate
 * on game deck.
 */
define(function() {

    'use strict';

    return class Cell {

        constructor() {
            this._currentCoordinates = [];
        };
        /** @return {array} copy of this._cuurentCoordinates */
        getCoordinates() {
            return this._currentCoordinates.slice();
        };
        /** 
         * @method set new cell coordinates
         * @param {array} newCoordinates, must be array with two values.
         * @return {boolean} true if new coordinate correct or false if not.
         */
        setCoordinates(newCoordinates) {
            /** @function validate coordinates
             * @param {array} coordinates
             * @return {boolean} true or false
             */
            let checkCoordinates = function(coordinates) {

                if (!Array.isArray(coordinates)) return false;
                if (coordinates.length > 2) return false;

                for (let i = 0; i < coordinates; i++) {
                    if (!Number.isInteger(coordinates[i])) return false;
                }
                // if array length > 2, it's invalid coordinates array
                return true;
            };

            if (!checkCoordinates(newCoordinates)) return false;
            this._currentCoordinates = newCoordinates;
            return true;
        };
    };
});