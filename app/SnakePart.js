define(['app/Cell'], function(Cell) {
    
    'use strict';

    return class SnakePart extends Cell {
        
        constructor(previousPart) {
            super();
            this._previousPart = previousPart;
        };

        setCoordinates(newCoordinates) {
        	console.log(newCoordinates, this._currentCoordinates);
        	this._oldCoordinates = this._currentCoordinates;
        	super.setCoordinates(newCoordinates);
        };

        getOldCoordinates() {
        	return this._oldCoordinates;
        };
    };
});