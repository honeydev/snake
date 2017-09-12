define(['app/Models/Cell'], function(Cell) {
    
    'use strict';
    console.log(Cell);
    return class SnakePart extends Cell {
        
        constructor(container, previousPart) {
            super(container);
            this._previousPart = previousPart;
            this._oldCoordinates = null;
        };

        setCoordinates(newCoordinates) {
        	console.log('set coordinates ', newCoordinates, this._currentCoordinates);
        	this._oldCoordinates = this._currentCoordinates.slice();
        	super.setCoordinates(newCoordinates);
            console.log(this._oldCoordinates, this._currentCoordinates);
        };

        getOldCoordinates() {
        	return this._oldCoordinates;
        };
    };
});