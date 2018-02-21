/** @class Snake implement singleton pattern */
define(['app/Models/BaseModel'], function(BaseModel) {
    
    'use strict';

    return class Snake extends BaseModel {
    
        constructor(container) {
            super();
            this._container = container;
            this._snake = [];
            this._direction = 'up';
            this._canChangeDirection = true;
            this._validator = container.getDependency('SnakeValidator');
            this._observable = container.getDependency('Observable');
            this._observable.addSubscriber(
                container.getDependency(
                    'GameDeckStatmentSetter',
                    container
                )
            );
        };

        eat() {
            const snakeLastPart = this._snake[this._snake.length - 1];
            let snakeNewPart = this._container.getDependency('SnakePart', this._container, snakeLastPart);
            let snakeLastPartCoordinates = snakeLastPart.getCoordinates();
            snakeNewPart.setCoordinates(snakeLastPartCoordinates);
            snakeNewPart._oldCoordinates = null;
            this._canChangeDirection = true;
            this._snake.push(snakeNewPart);
            this._observable.sendMessage({
                createCells: [snakeNewPart.getCoordinates()]
            });
        };

        addSnakePart(snakePart) {
            this._snake.push(snakePart);
        };

        refreshSnakeStatment(snakeHeadCoordinates) {
            //set new coordinates for all snake parts, except First (snake head)
            //new statment = coordinates previous snake part           
            this._setHeadCoordinate(snakeHeadCoordinates);
            this._setSnakePartsCoordinates();
        };

        _setHeadCoordinate(headCoordinate) {
            this._snake[0].setCoordinates(headCoordinate);
        };

        _setSnakePartsCoordinates() {
            for (let i = 1; i < this._snake.length; i++) {
                let currentSnakeIndex = i;
                let previousSnakePartIndex = i - 1;
                this._snake[currentSnakeIndex].setCoordinates(
                    this._snake[previousSnakePartIndex].getOldCoordinates()
                );
            }
        };

        setDirection(newDirection) {

            if (!this._canChangeDirection) {
                console.log('change direction false');
                return null;
            }

            if (this._validator.getApprovedDirection(this._direction, newDirection)) {
                this._direction = newDirection;
            }
            this._canChangeDirection = false;
            setTimeout(() => this._canChangeDirection = true, 300);
        };

        getAllSnakeParts() {
            return this._snake.slice();
        };

        getAllSnakePartsCoordinates() {
            let allCoordinates = [];

            for (let i = 0; i < this._snake.length; i++) {
                allCoordinates.push(this._snake[i].getCoordinates());
            }

            return allCoordinates;
        };

        getLastSnakePart() {
            if (this._snake.length === 0) {
                return false;
            }
            return this._snake[this._snake.length - 1];
        };

        getFirstSnakePart() {

            if (this._snake.length === 0) {
                return false;
            }
            return this._snake[0];
        };


        static createSnake(container) {
            if (Snake._snakeInstance !== undefined) {
                return Snake._snakeInstance;
            }
            Snake._snakeInstance = new Snake(container);
            return Snake._snakeInstance;
        };

        deleteSnakeInstance() {
            Snake._snakeInstance = undefined;
        };
    };
});