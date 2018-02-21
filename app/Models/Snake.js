/** @class Snake implement singleton pattern */
define(['app/Models/BaseModel'], function(BaseModel) {
    
    'use strict';

    return class Snake extends BaseModel {
    
        constructor(container) {
            super();
            this._container = container;
            this._snake = [];
            this._direction = 'up';
            this._newDirection = null;
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
            let snakeLastPart = this._snake[this._snake.length - 1];
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
        /**
         * @param {SnakePart} snakePart [description]
         */
        addSnakePart(snakePart) {
            this._snake.push(snakePart);
        };
        /**
         * @param  {array} snakeHeadCoordinates [description]
         */
        refreshSnakeStatment(snakeHeadCoordinates) {
            //set new coordinates for all snake parts, except First (snake head)
            //new statment = coordinates previous snake part           
            this._setHeadCoordinates(snakeHeadCoordinates);
            this._setSnakePartsCoordinates();
        };
        /**
         * @param {[array]} headCoordinate [description]
         */
        _setHeadCoordinates(headCoordinates) {
            this._snake[0].setCoordinates(headCoordinates);
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
        /**
         * @param {string} newDirection [description]
         */
        setNewDirection(newDirection) {
            if (this._validator.getApprovedDirection(this._direction, newDirection)) {
                this._newDirection = newDirection;
            }
        };

        ifExitNewDirectionApplyIt() {
            if (this._newDirection != null) {
                this._direction = this._newDirection;
                this._newDirection = null;
            }
        };
        /**
         * @return {} [description]
         */
        getAllSnakeParts() {
            return this._snake.slice();
        };
        /**
         * @return {[array]} [description]
         */
        getAllSnakePartsCoordinates() {
            let allCoordinates = [];

            for (let i = 0; i < this._snake.length; i++) {
                allCoordinates.push(this._snake[i].getCoordinates());
            }

            return allCoordinates;
        };
        /**
         * @return {boolean|SnakePart} [description]
         */
        getLastSnakePart() {
            if (this._snake.length === 0) {
                return false;
            }
            return this._snake[this._snake.length - 1];
        };
        /**
         * @return {[type]} [description]
         */
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