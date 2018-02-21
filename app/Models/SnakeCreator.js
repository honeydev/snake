/**
 * @class SnakeCreator - jsut create first two snake part
 */
define(function() {
    
    'use strict';

    return class SnakeCreator {
        /**
         * @param  {Container} container     
         * @param  {Deck} deck          
         * @param  {Snake} snake         
         * @param  {FoodProcessor} foodProcessor 
         * @param  {[Observable} observable    
         */
        constructor(container, deck, snake, foodProcessor, observable) {
            this._container = container;
            this._deck = deck;
            this._snake = snake;
            this._foodProcessor = foodProcessor;
            this._observable = observable;
        };

        create() {
            let snakeHead = this._container.getDependency('SnakePart', this._container, null);
            let snakePart = this._container.getDependency('SnakePart', this._container, snakeHead);
            snakeHead.setCoordinates([6, 6]);
            snakePart.setCoordinates([7, 6]);
            this._deck.changeDeckCell(snakeHead);  
            this._deck.changeDeckCell(snakePart);
            this._snake.addSnakePart(snakeHead);
            this._snake.addSnakePart(snakePart);
            this._foodProcessor.generateFood(); 
            this._observable.sendMessage({
                createCells: [snakeHead.getCoordinates(), snakePart.getCoordinates()]
            });
        };
    };
});