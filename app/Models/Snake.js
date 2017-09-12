/** @class Snake implement singleton pattern */
define(['app/Models/BaseModel'], function(BaseModel) {
    
    'use strict';

    return class Snake extends BaseModel {
    

        constructor(container) {
            super();
            this._container = container;
            this._snake = [];
            this._direction = 'up';
            this._validator = container.getDependency('SnakeValidator');
        };

        eat() {
            console.log('snake eat om nom nom');
            const snakeLastPart = this._snake[this._snake.length - 1];
            let snakeNewPart = this._container.getDependency('SnakePart', this._container, snakeLastPart);
            let snakeLastPartCoordinates = snakeLastPart.getCoordinates();
            console.log(snakeLastPartCoordinates);
            snakeNewPart.setCoordinates(snakeLastPartCoordinates);
            snakeNewPart._oldCoordinates = null;
            this._snake.push(snakeNewPart);
        };

        _getNewPartCoordinates(lastPartCoordinates) {
            let newPartCoordinates = [];

            if (this._direction === 'left') {
                newPartCoordinates[0] = lastPartCoordinates[0];
                newPartCoordinates[1] = lastPartCoordinates[1] + 1;
            } else if (this._direction === 'up') {
                newPartCoordinates[0] = lastPartCoordinates[0] + 1;
                newPartCoordinates[1] = lastPartCoordinates[1];
            } else if (this._direction === 'right') {
                newPartCoordinates[0] = lastPartCoordinates[0];
                newPartCoordinates[1] = lastPartCoordinates[1] - 1;
            } else if (this._direction === 'down') {
                newPartCoordinates[0] = lastPartCoordinates[0] - 1;
                newPartCoordinates[1] = lastPartCoordinates[1];
            } else {
                throw new Error(`this dirrection - ${this._direction} incorrect`);
            }
            return newPartCoordinates;
        };

        addSnakePart(snakePart) {
            this._snake.push(snakePart);
        };

        getAllSnakeParts() {
            return this._snake;
        }

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

        setDirection(newDirection) {
            if (this._validator.getApprovedDirection(this._direction, newDirection)) {
                this._direction = newDirection;
                console.log('set new direction');
            }
        };

        refreshSnakeStatment(snakeHeadCoordinates) {
            this._snake[0].setCoordinates(snakeHeadCoordinates);
            //set new coordinates for all snake parts, except First (snake head)
            //new statment = coordinates previous snake part
            for (let i = 1; i < this._snake.length; i++) {
                let currentSnakeIndex = i;
                let previousSnakePartIndex = i - 1;
                console.log('current snake part', this._snake[i]);
                this._snake[currentSnakeIndex].setCoordinates(
                    this._snake[previousSnakePartIndex].getOldCoordinates()
                );
            }
            console.log(this._snake);
        };

        static createSnake(container) {
            if (this._snakeInstance !== undefined) {
                return this._snakeInstance;
            }
            this._snakeInstance = new Snake(container);
            return this._snakeInstance;
        };
    };
});