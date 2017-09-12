/**
 * @class Deck create and contain game deck, set deck statements
 * @property _Cell @constructor for create cell @object
 * @property {object} _config contain app settings
 * @property {array} _deck 2-d array, contain Cell and SnakeParts objects.
 * First array index - y coordinate on deck, second - x coordinate.
 */
define(['app/Models/BaseModel'], function(BaseModel) {
    
    'use strict';

    return class Deck extends BaseModel {
        /** @constructor set properties, generate deck */
        constructor(container) {
            super();
            this._container = container;
            this._config = container.getDependency('config');
            console.log(this._config);
            this._deck = this._generateDeck(this._config.deckRowSize);
            this._foodPart = null;
            console.log(this._deck);
        };

        setFoodPart(foodPart) {
            if (this._foodPart !== null) {
                delete this._foodPart;
            }
            this.changeDeckCell(foodPart);
            this._foodPart = foodPart;
        };

        getFoodPart() {
            return this._foodPart;
        };
        /**
         * @method _generateDeck create deck arrray, fill it Cell objects
         * @param Cell constructor Cell @class
         * @rowSize {number} rowSize deck row size
         * @return {array} deck array
         */
        _generateDeck(rowSize) {

            let deck = [];

            let createDeckRows = function() {

                for (let y = 0; y < rowSize; y++) {
                    deck.push([]);
                    fillDeckRow(y)
                }

            }.bind(this);

            let fillDeckRow = function(rowIndex) {

                for (let x = 0; x < rowSize; x++) {
                    let cell = this._container.getDependency('Cell', this._container);
                    cell.setCoordinates([rowIndex, x]);
                    deck[rowIndex].push(cell);
                }

            }.bind(this);

            createDeckRows();

            return deck;
        };

        synchronizeDeckAndSnake(snake) {
            // console.log(snake);
            // for (let i = 0; i < snake.length; i++) {
            //     let snakePartCoordinates = snake[i].getCoordinates();
            //     let oldSnakePartCoordinates = snake[i].getOldCoordinates();
            //     this._deck[snakePartCoordinates[0]][snakePartCoordinates[1]] = snake[i];
            //     let cell = this._container.getDependency('Cell', this._container);
            //     console.log(this._deck);
            //     cell.setCoordinates(oldSnakePartCoordinates);
            //     this.changeDeckCell(cell);
            // }

            for (let i = 0; i < snake.length; i++) {
                let snakePartCoordinates = snake[i].getCoordinates();
                this._deck[snakePartCoordinates[0]][snakePartCoordinates[1]] = snake[i];
                if (i != snake.legnth - 1) {
                    continue;
                }
                let oldSnakePartCoordinates = snake[i].getOldCoordinates();
                if (oldSnakePartCoordinates === null) {
                    continue;
                }
                let cell = this._container.getDependency('Cell', this._container);
                console.log(oldSnakePartCoordinates);
                cell.setCoordinates(oldSnakePartCoordinates);
                this.changeDeckCell(cell);
            }
        };
        /**
         * method replace object in deck array (cell on snake part and conversely)
         * @var indexY - index in deck array
         * @var indexX - index in deck array
         * @newPartTypeObject - new part of deck object constructor
         * @partObejctArgs - array with argumets for part of deck contructor
         * @return - new object type of Cell or SnakePart
         */
        changeDeckCell(newDeckPart) {
            console.log(newDeckPart);
            let newPartCoordinates = newDeckPart.getCoordinates();
            this._deck[newPartCoordinates[0]][newPartCoordinates[1]] = newDeckPart;
            return true;
        };
    };
});