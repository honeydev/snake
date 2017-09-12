define(['app/Models/BaseModel'], function(BaseModel) {

    'use strict';

    return class FoodProcessor extends BaseModel {
        
        constructor(container, deck, snake, observable) {
            super();
            this._container = container;
            this._foodGenerator = container.getDependency('FoodGenerator', container, snake);
            this._deck = deck;
            this._snake = snake;
            this._observable = observable;
            this._foodPart = null;
        };

        generateFood() {
            let newFoodPart = this._foodGenerator.generateFoodPart();
            this._setNewFoodPart(newFoodPart);
            this._deck.setFoodPart(this._foodPart);
            return this._foodPart;
        };

        _setNewFoodPart(newFoodPart) {

            if (this._foodPart !== null) {
                this._observable.sendMessage({
                    unHiglightCells: [this._foodPart.getCoordinates()]
                });
            }

            this._foodPart = newFoodPart;
            this._observable.sendMessage({
                higlightCells: [this._foodPart.getCoordinates()]
            });
        };

        snakeHeadAndSnakeFoodCoordinatesIsEqual() {
            let snakeHeadCoordinates = this._snake.getFirstSnakePart().getCoordinates();
            let foodPartCoordinates = this._foodPart.getCoordinates();
            if (this._coordinatesIsEqual(snakeHeadCoordinates, foodPartCoordinates)) {
                return true;
            }
            return false;
        };
    }; 
});