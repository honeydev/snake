/**
 * @class Deck create and contain game deck, set deck statements
 * @property {object} _config contain app settings
 * @property {array} _deck 2-d array, contain Cell and SnakeParts objects.
 * First array index - y coordinate on deck, second - x coordinate.
 * @property {object}  [_foodPart] [food object theres one copy on board]
 */
define(['app/Models/BaseModel'], function(BaseModel) {
    
    'use strict';

    return class Deck extends BaseModel {
        /** @constructor set properties, generate deck */
        constructor(container) {
            super();
            this._container = container;
            this._config = container.getDependency('config');
            this._deck = this._generateDeck(this._config.deckRowSize);
            this._foodPart = null;
        };
        /**
         * @method [setFoodPart  add foodPart object in properties, and add it 
         * in deck array]
         * @param {object} foodPart [FoodPart @class instance]
         */
        setFoodPart(foodPart) {

            if (this._foodPart !== null) {
                delete this._foodPart;
            }

            this.changeDeckCell(foodPart);
            this._foodPart = foodPart;
        };
        /**
         * @method  [getFoodPart get current FoodPart object]
         * @return {[object]}
         */
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
            /** @function [createDeckRows description] */
            let createDeckRows = () => {

                let rowIndex = 0;

                for (rowIndex; rowIndex < rowSize; rowIndex++) {
                    deck.push([]);
                    fillDeckRow(rowIndex);
                }
            };
            /**
             * @function fill _deck array objects of Cell @class
             * @param  {[number]} rowIndex [index current row in 2-d array _deck]
             */
            let fillDeckRow = (rowIndex) => {
                let columnIndex = 0;

                for (columnIndex; columnIndex < rowSize; columnIndex++) {
                    let cell = this._container.getDependency('Cell', this._container);
                    cell.setCoordinates([rowIndex, columnIndex]);
                    deck[rowIndex].push(cell);
                }
            };

            createDeckRows();
            return deck;
        };
        /**
         * @method [synchronizeDeckAndSnake ]
         * @param  {[type]} snake [description]
         * @return {[type]}       [description]
         */
        synchronizeDeckAndSnake(snake) {

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
            let newPartCoordinates = newDeckPart.getCoordinates();
            this._deck[newPartCoordinates[0]][newPartCoordinates[1]] = newDeckPart;
            return true;
        };
    };
});