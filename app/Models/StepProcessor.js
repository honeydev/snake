define(function() {

    'use strict';

    return class StepProcessor {

        constructor(container, deck, snake, observable, foodProcessor) {
            this._observable = observable;
            this._snake = snake;
            this._deck = deck;
            this._moveStrategy = container.getDependency('MoveStrategy', container);
            this._foodProcessor = foodProcessor;
        };

        doStep() {
            let snakeDirection = this._snake.universalGetter('_direction');
            let snakeHeadCoordinates = this._snake.getFirstSnakePart().getCoordinates();
            let newHeadCoordinates = this._moveStrategy.
                getHeadCoordinates(snakeDirection, snakeHeadCoordinates);

            this._whetherEatingSnake();
            this._refreshDeckAndSnakeStatments(newHeadCoordinates);
            this._sendMessageFromView();
        };

        _whetherEatingSnake() {
            if (this._foodProcessor.snakeHeadAndSnakeFoodCoordinatesIsEqual()) {
                this._snake.eat();
                this._foodProcessor.generateFood();
            }
        };

        _refreshDeckAndSnakeStatments(newHeadCoordinates) {
            this._snake.refreshSnakeStatment(newHeadCoordinates);
            this._deck.synchronizeDeckAndSnake(this._snake.getAllSnakeParts());
        };

        _sendMessageFromView() {
            let allSnakePartsCoordinaes = this._snake.getAllSnakePartsCoordinates();
            let snakeParts = this._snake.universalGetter('_snake');
            let lastSnakePartCoordinates = snakeParts[snakeParts.length - 1].getOldCoordinates();

            this._observable.sendMessage({
                higlightCells: allSnakePartsCoordinaes,
                unHiglightCells: [lastSnakePartCoordinates]
            });
        };
    };
});