/** @class CoordinatesValidator - validate arrays with coordinates */
define(function() {
	
    'use strict';

    return class CoordinatesValidator {
        /**
         * @method checkCoordinates
         * @param {array} array with coordintaes typeof [int, int]
         * @throws Error if coordinates is not array
         * @throws Error coordinates has invalid length
         */
        checkCoordinates(coordinates) {
            const COORDINATE_LENGTH = 2;
            if (!Array.isArray(coordinates)) 
                throw new Error('coordinates is not array');
            if (coordinates.length !== COORDINATE_LENGTH)
                throw new Error(`coordinates has invalid length - ${coordinates}`);
            this._checkArrayElementsOnIntgerType(coordinates);
        };
        /**
         * @method _checkArrayElementsOnIntgerType
         */
        _checkArrayElementsOnIntgerType(coordinates) {
            for (let i = 0; i < coordinates; i++) {
                if (!Number.isInteger(coordinates[i]))
                    throw new Error('Coordinates array element is not number');
            }            
        };
    };
});