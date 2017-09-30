define(function() {

    'use strict';

    return class GameDeckCreator {
        

        constructor() {
            console.log('asad');
            this._createGameField();
        };

        _createGameField() {
            this._gameDeck = new paper.Rectangle(new paper.Point(0, 0), new paper.Point(360, 360));
            this._gameDeckPath = new paper.Path.Rectangle(this._gameDeck);
            this._gameDeckPath.fillColor = 'black';
            this._gameDeckPath.selected = false;
        };
    }; 
});