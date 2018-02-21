define(function() {

    'use strict';

    return class GameDeckCreator {
    
        constructor(container) {
            setTimeout(() => {
                this._createGameField();               
            }, 100);
            this._config = container.getDependency('config');
        };

        _createGameField() {
            const SIDE_SIZE = this._config.deckRowSize * 30;
            let gameDeck = new paper.Rectangle(new paper.Point(0, 0), new paper.Point(SIDE_SIZE, SIDE_SIZE));
            let gameDeckPath = new paper.Path.Rectangle(gameDeck);
            gameDeckPath.fillColor = 'black';
            gameDeckPath.selected = false;
        };
    }; 
});