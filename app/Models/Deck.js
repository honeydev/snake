define(['app/Models/BaseModel'], function(BaseModel, Cell, config) {
    'use strict';

    return class Deck extends BaseModel {
        
        constructor(Cell, config) {
            super();
            this._Cell = Cell;
            this._config = config;
            this._deck = this._generateDeck(this._Cell, this._config.deckRowSize);
        };
        
        _generateDeck(Cell, rowSize) {
            //deck is square
            let deck = [];
            //generate deck
            for (let i = 0; i < rowSize; i++) {
                //generate single row
                deck.push((function(rowSize, Cell) {
                    let deckRow = [];

                    for (let y = 0; y < rowSize; y++) {
                        let cell = new Cell();
                        cell.setCoordinates([i, y]);
                        deckRow.push(cell);
                    }

                    return deckRow;
                })(rowSize, Cell));
            }

            return deck;
        };

        synchronizeDeckAndSnake(snake, Cell = this._Cell, deck = this._deck) {
        

            for (let i = 0; i < snake.length; i++) {
                let snakePartCoordinates = snake[i].getCoordinates();
                let oldSnakePartCoordinates = snake[i].getOldCoordinates();
                deck[snakePartCoordinates[0]][snakePartCoordinates[1]] = snake[i];
                let cell = new Cell();
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