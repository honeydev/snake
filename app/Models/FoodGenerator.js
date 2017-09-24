/** @class FoodGenerator */
define(function() {

    'use strict';

    return class FoodGenerator {

        constructor(container, snake) {

            this._container = container;
            this._snake = snake;
            this._config = container.getDependency('config');
        };

        generateFoodPart() {
            let foodPart = this._container.getDependency('FoodPart', this._container);
            foodPart.setCoordinates(this._getNotOccupiedCoordinates());
            //foodPart.setCoordinates([4,7]);
            return foodPart;
        };

        _getOccupiedCoordinates() {
            const snakeParts = this._snake.getAllSnakeParts() ;
            let occupiedCoordinates = [];

            for (let i = 0; i < snakeParts.length; i++) {
                occupiedCoordinates.push(snakeParts[i].getCoordinates());
            }

            return occupiedCoordinates;
        };

        _getNotOccupiedCoordinates() {
            const occupiedCoordinates = this._getOccupiedCoordinates();
            let generatedCoordinates;

            while (true) {
                generatedCoordinates = this._generateCoordinates();
                if (this._coordinatesIsNotOccupied(occupiedCoordinates, generatedCoordinates)) {
                    break;
                }
            }
            return generatedCoordinates;
        };

        _generateCoordinates() {
            const minCoordinateValue = 0;
            const maxCoordinateValue = this._config.deckRowSize - 1;
            let coordinates = [];

            let getRandomCoordinateInInerval = function() {
                let coordinate;
                coordinate = Math.random() * (maxCoordinateValue - minCoordinateValue) + minCoordinateValue;
                coordinate = Math.round(coordinate);
                return coordinate;
            };

            coordinates.push(getRandomCoordinateInInerval());
            coordinates.push(getRandomCoordinateInInerval());
            return coordinates;
        };

        _coordinatesIsNotOccupied(occupiedCoordinates, generatedCoordinates) {

            let coordinatesEqual = function(firstCoordinate, secondCoordinate) {
                if (firstCoordinate === secondCoordinate) {
                    return true;
                }
                return false;
            };

            for (let i = 0; i < occupiedCoordinates.length; i++) {

                if (coordinatesEqual(occupiedCoordinates[i][0], generatedCoordinates[0]) &&
                    coordinatesEqual(occupiedCoordinates[i][1], generatedCoordinates[1])) {
                    return false;
                }
            }

            return true;
        };
    }; 
});