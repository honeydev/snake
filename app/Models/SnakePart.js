/** @class SnkaePart - snake body part model */
define(['app/Models/Cell'], function(Cell) {
    
    'use strict';

    return class SnakePart extends Cell {
        
        constructor(container, previousPart) {
            super(container);
            this._previousPart = previousPart;
            this._oldCoordinates = null;
        };

        setCoordinates(newCoordinates) {
        	this._oldCoordinates = this._currentCoordinates.slice();
        	super.setCoordinates(newCoordinates);
        };

        getOldCoordinates() {
        	return this._oldCoordinates;
        };
    };
});