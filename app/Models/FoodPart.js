define(['app/Models/Cell'], function(Cell) {

    'use strict';

    return class FoodPart extends Cell {
        
        constructor(container) {
        	super(container);
        };
        /**
         * @return {FoodPart}
         */
        static createFoodPart(container) {

            if (this._foodPartInstance !== undefined) {
                return this._foodPartInstance;
            }
            this._foodPartInstance = new FoodPart(container);
            return this._foodPartInstance;
        };
    };
});