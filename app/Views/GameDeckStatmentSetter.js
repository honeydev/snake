define(function() {

    'use strict';

    return class GameDeckStatmentSetter {
        
        constructor(container) {
            container.getDependency('GameDeckCreator');
            this._snake = [];
            this._food = null;
            this._cellSetter = container.getDependency('CellSetter');
            this._cellCoordinatesSetter = container.getDependency('CellCoordinatesSetter');
        };

        createCell(coordinates) {
            coordinates = this._adaptateCoordinates(coordinates);
            for (let i = 0; i < coordinates.length; i++) {
                let cell = this._cellSetter.createCell(coordinates[i]);
                this._snake.push(cell);                
            }
            console.log(this._snake);
        };

        _createFood(coordinate) {
            if (this._food !== null) {
                this._cellSetter.deleteCell(this._food);
            }
            coordinate = this._adaptateCoordinates(coordinate);
            coordinate = coordinate[0];
            this._food = this._cellSetter.createCell(coordinate);   
        };

        clearDeck() {
            this._cellSetter.deleteCell(...this._snake, this._food);
            this._snake = [];
            this._food = null;
        };

        setCoordinates(coordinates) {
            coordinates = this._adaptateCoordinates(coordinates);
            console.log('ready coordinates', coordinates);
            for (let i = 0; i < this._snake.length; i++) {
                let cell = this._snake[i];
                console.log(`counter ${i}`,coordinates[i]);
                this._cellCoordinatesSetter.setCoordinates(coordinates[i], cell);
            }
        };

        _prepareCoordinates(coordinates) {
            coordinates.x = coordinates.x * 30;
            coordinates.y = coordinates.y * 30;
            return coordinates;
        };

        _adaptateCoordinates(coordinates) {
            console.log('will adaptate this coordinates', coordinates);
            coordinates = coordinates.map((currentCoordinate) => {
                console.log('currentCoordinate', currentCoordinate);
                return currentCoordinate = {x: currentCoordinate[1], y: currentCoordinate[0]};
            });

            coordinates = coordinates.map((currentCoordinate) => {
                return this._prepareCoordinates(currentCoordinate);
            });
            console.log('coordinate after adaptation', coordinates);
            return coordinates
        };

        processMessage(message) {
            if (message.hasOwnProperty('createCells')) {
                console.log('process message createCells', message.createCells);
                this.createCell(message.createCells);
            } else if (message.hasOwnProperty('renderStep')) {
                let coordinates = message.renderStep;
                console.log('coordinates in processMessage', coordinates);
                this.setCoordinates(coordinates.slice());
            } else if (message.hasOwnProperty('createFood')) {
                console.log('food in process message', message.createFood)
                this._createFood(message.createFood);
            } else if (message.hasOwnProperty('deleteFood')) {
                console.log('processsMessage delete food', message.deleteFood);
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