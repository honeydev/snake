define(['app/Models/Cell'], function(Cell) {

    'use strict';

    return class FoodPart extends Cell {
        
        constructor(container) {
        	super(container);
        };

        static createFoodPart(container) {

            if (this._foodPartInstance !== undefined) {
                return this._foodPartInstance;
            }
            this._snakeInstance = new FoodPart(container);
            return this._snakeInstance;
        };
    };
});