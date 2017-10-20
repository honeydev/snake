/**
 * @class MainProcessor - high level abstraction class, realise 
 * main game process - snake create, snake movment, snake stop.
 * Init main logic @class - snake, deck, timer etc.
 */
define(['app/Models/BaseModel'], function(BaseModel) {
    
    'use strict';

    return class MainProcessor extends BaseModel {
         
        constructor(container, observable) {
            super();
            this._container = container;
            this._observable = observable;
            this._snake = container.getDependency('Snake');
            this._deck = container.getDependency('Deck', container);
            this._timer = container.getDependency('Timer', this._observable);
            this._foodProcessor = container.getDependency(
                'FoodProcessor', 
                container,
                this._deck,
                this._snake,
                this._observable
                );

            this._temp = container.getDependency('Temp', this._observable);
            this._stepProcessor = container.getDependency(
                'StepProcessor',
                this._container, 
                this._deck, 
                this._snake, 
                this._observable,
                this._foodProcessor,
                this._temp
                );
            this._gameOver = container.getDependency(
                'GameOver',
                container, 
                this, 
                this._observable
                );
        };

        initSnake() {
            //add two first parts of snake
            let snakeCreator = this._container.getDependency(
                'SnakeCreator', 
                this._container, 
                this._deck, 
                this._snake,
                this._foodProcessor,
                this._observable
                );
            snakeCreator.create();
        };

        moveSnake() {
            this._timer.runTimer();
            setTimeout(function loop() {
                this._stepProcessor.doStep();
                let temp = this._temp.getTemp();
                if (this._gameOver.checkForGameOver()) {
                    return false;
                }
                this._moveLoopId = setTimeout(loop.bind(this), temp);
            }.bind(this), this._temp.getTemp());
        };

        stopSnake() {
            clearTimeout(this._moveLoopId);
            this._timer.stopTimer();
        };

        destroyGame() {
            this.stopSnake();
            this._deleteAllProperties();
        };
    };  
});
