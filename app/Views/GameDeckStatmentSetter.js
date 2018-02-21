define(function() {

    'use strict';

    return class GameDeckStatmentSetter {
        
        constructor(container) {
            container.getDependency('GameDeckCreator', container);
            this._snake = [];
            this._food = null;
            this._cellSetter = container.getDependency('CellSetter');
            this._cellCoordinatesSetter = container.getDependency('CellCoordinatesSetter');
        };
        /**
         * @param  {[array]} coordinates 
         */
        createCell(coordinates) {
            coordinates = this._adaptateCoordinates(coordinates);
            for (let i = 0; i < coordinates.length; i++) {
                let cell = this._cellSetter.createCell(coordinates[i]);
                this._snake.push(cell);                
            }
        };

        _createFood(coordinate) {
            if (this._food !== null) {
                this._cellSetter.deleteCell(this._food);
            }
            coordinate = this._adaptateCoordinates(coordinate);
            coordinate = coordinate[0];
            console.log('create food coordinaate', coordinate);
            this._food = this._cellSetter.createCell(coordinate);
        };

        clearDeck() {
            this._cellSetter.deleteCell(...this._snake, this._food);
            this._snake = [];
            this._food = null;
        };

        setCoordinates(coordinates) {
            coordinates = this._adaptateCoordinates(coordinates);
            for (let i = 0; i < this._snake.length; i++) {
                let cell = this._snake[i];
                this._cellCoordinatesSetter.setCoordinates(coordinates[i], cell);
            }
        };

        _prepareCoordinates(coordinates) {
            coordinates.x = coordinates.x * 30;
            coordinates.y = coordinates.y * 30;
            return coordinates;
        };

        _adaptateCoordinates(coordinates) {
            coordinates = coordinates.map((currentCoordinate) => {
                return currentCoordinate = {x: currentCoordinate[1], y: currentCoordinate[0]};
            });
            coordinates = coordinates.map((currentCoordinate) => {
                return this._prepareCoordinates(currentCoordinate);
            });
            return coordinates
        };
        /**
         * @param  {[string]} message [description]
         */
        processMessage(message) {
            if (message.hasOwnProperty('createCells')) {
                this.createCell(message.createCells);
            } else if (message.hasOwnProperty('renderStep')) {
                let coordinates = message.renderStep;
                this.setCoordinates(coordinates.slice());
            } else if (message.hasOwnProperty('createFood')) {
                this._createFood(message.createFood);
            } else if (message.hasOwnProperty('deleteFood')) {
                this._deleteFood(message.deleteFood);
            }
        };

        static createGameDeckStatmentSetter(container) {
            if (GameDeckStatmentSetter._gameDeckStatmentSetterInstance !== undefined) {
                return GameDeckStatmentSetter._gameDeckStatmentSetterInstance;
            }
            GameDeckStatmentSetter._gameDeckStatmentSetterInstance = new GameDeckStatmentSetter(container);
            return GameDeckStatmentSetter._gameDeckStatmentSetterInstance;
        };
    }; 
});