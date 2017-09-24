define(function() {

    'use strict';

    return class CellColorizer {

        constructor(deckElements) {
            this._deckElements = deckElements;
        };

        higlihtCells(coordinates) {
            console.log(coordinates);
            for (let i = 0; i < coordinates.length; i++) {
                let yCoordiante = coordinates[i][0];
                let xCoordinate = coordinates[i][1];
                console.log(this._deckElements[yCoordiante][xCoordinate]);
                $(this._deckElements[yCoordiante][xCoordinate]).css('background-color', 'green');
            }
        };

        unHiglightCells(coordinates) {
            console.log(coordinates);
            for (let i = 0; i < coordinates.length; i++) {
                if (coordinates[i] === null) {
                    continue;
                }
                let yCoordiante = coordinates[i][0];
                let xCoordinate = coordinates[i][1];
                console.log(this._deckElements[yCoordiante][xCoordinate]);
                $(this._deckElements[yCoordiante][xCoordinate]).css('background-color', 'blue');
            }
        };
    };
});