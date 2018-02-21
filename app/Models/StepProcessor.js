/** @class - StepProcessor define snake movment logic */
define(function() {

    'use strict';

    return class StepProcessor {
        /**
         * @param  {Container} container    
         * @param  {Deck} deck         
         * @param  {Snake} snake        
         * @param  {Observable} observable   
         * @param  {FoodProcessor} foodProcessor
         * @param  {Temp} temp                     
         */
        constructor(container, deck, snake, observable, foodProcessor, temp) {
            this._observable = observable;
            this._snake = snake;
            this._deck = deck;
            this._moveStrategy = container.getDependency('MoveStrategy', container);
            this._scoreCounter = container.getDependency('ScoresCounter', observable);
            this._foodProcessor = foodProcessor;
            this._temp = temp;
            this._eating = false;
            this._newDirection = null;
        };

        doStep() {
            this._snake.ifExitNewDirectionApplyIt();
            let snakeDirection = this._snake.universalGetter('_direction');
            let snakeHeadCoordinates = this._snake.getFirstSnakePart().getCoordinates();
            let newHeadCoordinates = this._moveStrategy.
                getHeadCoordinates(snakeDirection, snakeHeadCoordinates);
            this._whetherEatingSnake(snakeHeadCoordinates);            
            this._refreshDeckAndSnakeStatments(newHeadCoordinates);
            this._sendMessageFromView();
        };
        /**
         * @param  {array} snakeHeadCoordinates                   
         */
        _whetherEatingSnake(snakeHeadCoordinates) {
            if (this._foodProcessor.snakeHeadAndSnakeFoodCoordinatesIsEqual(snakeHeadCoordinates)) {
                this._snake.eat();
                this._foodProcessor.generateFood();
                this._scoreCounter.addScore();
                this._temp.ifIsReasonSetNewTemp(
                    this._scoreCounter.universalGetter('_scores')
                    );
                this._eating = true;
            }
        };
        /**
         * @param  {[array]} newHeadCoordinates
         */
        _refreshDeckAndSnakeStatments(newHeadCoordinates) {
            this._snake.refreshSnakeStatment(newHeadCoordinates);
            this._deck.synchronizeDeckAndSnake(this._snake.getAllSnakeParts());
        };

        _sendMessageFromView() {
            let allSnakePartsCoordinaes = this._snake.getAllSnakePartsCoordinates();
            let snakeParts = this._snake.universalGetter('_snake');
            let lastSnakePartCoordinates;
                
            if (this._eating) {
                lastSnakePartCoordinates = null;
                this._eating = false;            
            } else {
                lastSnakePartCoordinates = snakeParts[snakeParts.length - 1].getOldCoordinates();
            }

            this._observable.sendMessage({
                renderStep: allSnakePartsCoordinaes,
            });
        };
    };
});