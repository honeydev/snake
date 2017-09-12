define(['app/Models/BaseModel'], function(BaseModel) {
    
    'use strict';

    return class MainProcessor extends BaseModel {
         
        constructor(container, observable) {
            super();
            this._container = container;
            this._observable = observable;
            this._snake = container.getDependency('Snake', container);
            console.log(this._snake);
            this._deck = container.getDependency('Deck', container);
            //sthis._moveStrategy = container.getDependency('MoveStrategy', container);
            console.log(this._moveStrategy);

            this._timer = container.getDependency('Timer', this._observable);
            this._foodProcessor = container.getDependency(
                'FoodProcessor', 
                container,
                this._deck,
                this._snake,
                this._observable
                );
            this._stepProcessor = container.getDependency(
                'StepProcessor',
                this._container, 
                this._deck, 
                this._snake, 
                this._observable,
                this._foodProcessor
                );

        };

        initSnake() {
            //add two first parts of snake
            let snakeHead = this._container.getDependency('SnakePart', this._container, null);
            let snakePart = this._container.getDependency('SnakePart', this._container, snakeHead);
            snakeHead.setCoordinates([6, 7]);
            snakePart.setCoordinates([7, 7]);
            this._deck.changeDeckCell(snakeHead);  
            this._deck.changeDeckCell(snakePart);
            this._snake.addSnakePart(snakeHead);
            this._snake.addSnakePart(snakePart);
            this._foodProcessor.generateFood();
            this._observable.sendMessage({
                higlightCells: [snakeHead.getCoordinates(), snakePart.getCoordinates()]
            });
        };

        moveSnake() {
            this._moveLoopId = setTimeout(function() {
                this._stepProcessor.doStep();
                this.moveSnake();
            }.bind(this), 500);
        };

        stopSnake() {
            console.log(this._moveLoopId);
            clearTimeout(this._moveLoopId);
        };
    };  
});
