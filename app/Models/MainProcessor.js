define(['app/Models/BaseModel'], function(BaseModel) {
    
    'use strict';

    return class MainProcessor extends BaseModel {
         
        constructor(container, observable) {
            super();
            this._container = container;
            this._observable = observable;
            this._snake = container.getDependency('Snake');
            this._deck = container.getDependency('Deck', container);
            //sthis._moveStrategy = container.getDependency('MoveStrategy', container);
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

            this._deviceDetector = container.getDependency('DeviceDetector', this._observable);
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
            this._timer.runTimer();
            setTimeout(function loop() {
                this._stepProcessor.doStep();
                let temp = this._temp.getTemp();
                if (this._gameOver.checkForGameOver()) {
                    return false;
                }
                this._moveLoopId = setTimeout(loop.bind(this), 500);
            }.bind(this), 500);
        };

        stopSnake() {
            clearTimeout(this._moveLoopId);
            this._timer.stopTimer();
        };

        destroyGame() {
            this.stopSnake();
            let snakePartCoordinates = this._snake.getAllSnakePartsCoordinates();
            let snakeFoodCoordinates = this._foodProcessor.universalGetter('_foodPart').getCoordinates();
            let coordinatesCellsForUnhiglight = snakePartCoordinates;
            coordinatesCellsForUnhiglight.push(snakeFoodCoordinates);
            this._observable.sendMessage({
                unHiglightCells: snakePartCoordinates   
            });
            this._deleteAllProperties();
        };
    };  
});
