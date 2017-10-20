/**
 * @class default element game deck 
 */
define(function() {

    'use strict';

    return class Cell {

        constructor(container) {
            this._currentCoordinates = [];
            this._coordinatesValidator = container.getDependency('CoordinatesValidator');
        };
        /** @return {array} copy of this._cuurentCoordinates */
        getCoordinates() {
            return this._currentCoordinates.slice();
        };
        setCoordinates(newCoordinates) {
            
            let checkCoordinates = function(coordinates) {
                try {
                    this._coordinatesValidator.checkCoordinates(coordinates);
                    return true;
                } catch (Error) {
                    console.log(Error);
                    return false
                }
            }.bind(this);

            if (!checkCoordinates(newCoordinates)) return false;
            this._currentCoordinates = newCoordinates;
            return true;
        };
    };
});