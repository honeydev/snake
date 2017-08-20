define(['app/Models/BaseModel'], function(BaseModel) {
    
    'use strict';

    return class Snake extends BaseModel {
        
        constructor() {
            super();
            this._snake = [];
            this._direction = 'up';
        };

        addSnakePart(snakePart) {
            this._snake.push(snakePart);
        };

        getAllSnakeParts() {
            return this._snake;
        }

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

        setDirection() {

        };

        refreshSnakeStatment(snakeHeadCoordinates) {

            this._snake[0].setCoordinates(snakeHeadCoordinates);
            //set new coordinates for all snake parts, except First (snake head)
            //new statment = coordinates previous snake part
                for (let i = 1; i < this._snake.length; i += 2) {
                    let currentSnakeIndex = i;
                    let previousSnakePartIndex = i - 1;
                    this._snake[currentSnakeIndex].setCoordinates(
                        this._snake[previousSnakePartIndex].getOldCoordinates()
                    );
                }
        };
    };
});