define(function() {

    'use strict';

    return class MainView {
        
        constructor(container) {
            this._gameDeckStatmentSetter = container.getDependency('GameDeckStatmentSetter', container);
            this._cellSetter = container.getDependency('CellSetter');
            this._cellCordinatesSetter = container.getDependency('CellCoordinatesSetter');
            this._buttonSetter = container.getDependency('ButtonSetter');
            this._modalSetter = container.getDependency('ModalSetter');
            this._countersStatmentSetter = container.getDependency('CountersStatmentSetter');
        };

        processMessage(message) {

            if (!message.hasOwnProperty('mode')) {
                return null;
            }

            if (message.mode === 'play') {
                this._buttonSetter.switchPlayPause();
            } else if (message.mode === 'pause') {
                this._buttonSetter.switchPlayPause();
            } else if (message.mode === 'replay') {
                this._gameDeckStatmentSetter.clearDeck();
                this._buttonSetter.setPlayButton();
                if (this._modalSetter.getModalShowedStatus()) {
                    this._modalSetter.hideGameOverModal();
                }
            } else if (message.mode === 'gameOver') {
                this._modalSetter.showGameOverModal();
            }
        };

        getGameDeckStatmentSetter() {
            return this._gameDeckStatmentSetter;
        };

        getCountersStatmentSetter() {
            return this._countersStatmentSetter;
        };
    }; 
});