/**
 * @class Deck create and contain game deck, set deck statements
 * @property {array} - _deck - contain all deck elements
 * @property {object} _foodPart food element, eat for snake
 */
define(['app/Models/BaseModel'], function(BaseModel) {
    
    'use strict';

    return class Deck extends BaseModel {

        constructor(container) {
            super();
            this._container = container;
            this._config = container.getDependency('config');
            this._deck = this._generateDeck(this._config.deckRowSize);
            this._foodPart = null;
        };

        /**
         * @method _generateDeck create deck arrray, fill it Cell objects
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
         * @method replace object in deck array (cell on snake part and conversely)
         */
        changeDeckCell(newDeckPart) {
            let newPartCoordinates = newDeckPart.getCoordinates();
            this._deck[newPartCoordinates[0]][newPartCoordinates[1]] = newDeckPart;
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
    };
});