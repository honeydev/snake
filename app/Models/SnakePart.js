/** @class SnkaePart - snake body part model */
define(['app/Models/Cell'], function(Cell) {
    
    'use strict';

    return class SnakePart extends Cell {
        /**
         * @param  {Container} container   
         * @param  {SnakePart} previousPart
         */
        constructor(container, previousPart) {
            super(container);
            this._previousPart = previousPart;
            this._oldCoordinates = null;
        };
        /**
         * @param {array} newCoordinates
         */
        setCoordinates(newCoordinates) {
        	this._oldCoordinates = this._currentCoordinates.slice();
        	super.setCoordinates(newCoordinates);
        };
        /**
         * @return {array|null}
         */
        getOldCoordinates() {
        	return this._oldCoordinates;
        };
    };
});