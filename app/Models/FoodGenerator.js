/** @class FoodGenerator */
define(function() {

    'use strict';

    return class FoodGenerator {

        constructor(container, snake) {

            this._container = container;
            this._snake = snake;
            this._config = container.getDependency('config');
        };
        /**
         * @return {FoodPart}
         */
        generateFoodPart() {
            let foodPart = this._container.getDependency('FoodPart', this._container);
            foodPart.setCoordinates(this._getNotOccupiedCoordinates());
            return foodPart;
        };
        /**
         * @return {array}
         */
        _getOccupiedCoordinates() {
            const SNAKE_PARTS = this._snake.getAllSnakeParts() ;
            let occupiedCoordinates = [];

            for (let i = 0; i < SNAKE_PARTS.length; i++) {
                occupiedCoordinates.push(SNAKE_PARTS[i].getCoordinates());
            }

            return occupiedCoordinates;
        };
        /**
         * @return {[array]}
         */
        _getNotOccupiedCoordinates() {
            const OCCUPIED_COORDINATES = this._getOccupiedCoordinates();
            let generatedCoordinates;

            while (true) {
                generatedCoordinates = this._generateCoordinates();
                if (this._coordinatesIsNotOccupied(OCCUPIED_COORDINATES, generatedCoordinates)) {
                    break;
                }
            }
            return generatedCoordinates;
        };
        /**
         * @return {[array]} [description]
         */
        _generateCoordinates() {
            const MIN_COORDINATE = 0;
            const MAX_COORDINATE = this._config.deckRowSize - 1;
            let coordinates = [];

            let getRandomCoordinateInInerval = () => {
                let coordinate;
                coordinate = Math.random()*(MAX_COORDINATE-MIN_COORDINATE) + MIN_COORDINATE;
                coordinate = Math.round(coordinate);
                return coordinate;
            };

            coordinates.push(getRandomCoordinateInInerval());
            coordinates.push(getRandomCoordinateInInerval());
            return coordinates;
        };
        /**
         * @param  {[array]} occupiedCoordinates  [description]
         * @param  {[array]} generatedCoordinates [description]
         * @return {[bool]}                      [description]
         */
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