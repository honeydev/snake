define(function() {

    'use strict';

    return class GameDeckCreator {
    
        constructor() {
            setTimeout(() => {
                this._createGameField();               
            }, 100);
        };

        _createGameField() {
            let gameDeck = new paper.Rectangle(new paper.Point(0, 0), new paper.Point(360, 360));
            let gameDeckPath = new paper.Path.Rectangle(gameDeck);
            gameDeckPath.fillColor = 'black';
            gameDeckPath.selected = false;
        };
    }; 
});