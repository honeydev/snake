define(['app/BaseModel'], function(BaseModel) {
    
    'use strict';

    return class MainProcessor extends BaseModel {
         
        constructor(cell, snake, SnakePart, deck, moveStrategy) {
            super();
            this._cell = cell;
            this._snake = snake;
            this._SnakePart = SnakePart;
            this._deck = deck;
            this._moveStrategy = moveStrategy;
            this.initSnake();
            this.doStep(snake = this._snake, 'right');
        };

        initSnake(
            snake = this._snake, 
            SnakePart = this._SnakePart, 
            deck = this._deck
            ) {
            //add two first parts of snake
            let snakeHead = new SnakePart(null);
            let snakePart = new SnakePart(snakeHead);
            snakeHead.setCoordinates([6, 7]);
            snakePart.setCoordinates([7, 7]);
            deck.changeDeckCell(snakeHead);  
            deck.changeDeckCell(snakePart);
            snake.addSnakePart(snakeHead);
            snake.addSnakePart(snakePart);
        };

        /**
         * @var direction string set snake dirrection
         */
        doStep(
            snake = this._snake, 
            newDirection, 
            moveStrategy = this._moveStrategy, 
            deck = this._deck) {
            let currentDirection = snake.universalGetter('_direction');
            console.log(this._snake);
            let snakeHeadCoordinates = snake.getFirstSnakePart().getCoordinates();
            let newHeadCoordinates = moveStrategy.getHeadCoordinates(currentDirection, snakeHeadCoordinates, newDirection);
            snake.refreshSnakeStatment(newHeadCoordinates);
            deck.synchronizeDeckAndSnake(snake.getAllSnakeParts());
            console.log(deck)
        };
    };  
});