define(function() {

    'use strict';

    return class MainView {
        
        constructor(container) {
            console.log('mainView');
            this._gameDeckCreator = container.getDependency('GameDeckCreator');
            this._cellCreator = container.getDependency('CellCreator');
        };
    }; 
});