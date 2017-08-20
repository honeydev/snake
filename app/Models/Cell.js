define(function() {

    'use strict';

    return class Cell {

        constructor() {
            this._currentCoordinates = [];
        };

        getCoordinates() {
            return this._currentCoordinates.slice();
        };

        setCoordinates(newCoordinates) {

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