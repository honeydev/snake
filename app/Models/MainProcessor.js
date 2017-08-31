define(['app/Models/BaseModel'], function(BaseModel) {
    
    'use strict';

    return class MainProcessor extends BaseModel {
         
        constructor(observable, cell, snake, SnakePart, deck, moveStrategy) {
            super();
            this._observable = observable;
            this._cell = cell;
            this._snake = snake;
            this._SnakePart = SnakePart;
            this._deck = deck;
            this._moveStrategy = moveStrategy;
            //this.doStep(snake = this._snake, 'right');
        };

        runSnake(
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
            console.log('send message');
            this._observable.sendMessage({
                higlightCells: [snakeHead.getCoordinates(), snakePart.getCoordinates()]
            });
        };

        /**
         * @var direction string set snake dirrection
         */
        doStep(
            newDirection, 
            snake = this._snake, 
            moveStrategy = this._moveStrategy, 
            deck = this._deck
            ) {
            console.log(newDirection);
            let currentDirection = snake.universalGetter('_direction');
            let snakeHeadCoordinates = snake.getFirstSnakePart().getCoordinates();
            console.log(currentDirection);
            let newHeadCoordinates = moveStrategy.getHeadCoordinates(currentDirection, snakeHeadCoordinates, newDirection);
            console.log(newHeadCoordinates);
            snake.refreshSnakeStatment(newHeadCoordinates);
            deck.synchronizeDeckAndSnake(snake.getAllSnakeParts());

            let snakeCoordinates = snake.universalGetter('_snake');
            let lastSnakePart = snakeCoordinates[snakeCoordinates.length - 1].getOldCoordinates();
            
            this._observable.sendMessage({
                higlightCells: [newHeadCoordinates]
            });
            this._observable.sendMessage({
                unHiglightCells: [lastSnakePart]
            });
        };

        movment() {
            
        };
    };  
});