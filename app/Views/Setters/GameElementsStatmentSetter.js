define(function() {

    'use strict';

    return class GameElementsStatmentSetter {

        constructor(container) {

            this._cellColorizer = container.getDependency('CellColorizer', gameDeck);
            this._concretElementsSetter = container.getDependency('MainPageConcretElementsSetter', mainPageElements);
        };

        _setPlayStatment() {
            this._concretElementsSetter.setPlayPauseStatment();
        };

        _setPauseStatment() {
            this._concretElementsSetter.setPlayButton();
        };

        _setGameOverStatment() {
            this._concretElementsSetter.showModalWindow();
        };

        _setInitialStatment() {
            this._concretElementsSetter.setPlayPauseStatment();
        };

        refreshCounters(counterType, counterValue) {
            if (counterType === 'timer') {
                this._concretElementsSetter.setTimer(counterValue)               
            } else if (counterType === 'scores') {
                this._concretElementsSetter.setScores(counterValue);
            } else if (counterType === 'temp') {
                this._concretElementsSetter.setTemp(counterValue);
            }
        };

        changeViewMode(newViewMode) {
            if (newViewMode === 'play') {
                console.log('set play mode');
                this._setPlayStatment();
            } else if (newViewMode === 'pause') {
                console.log('set pause mode');
                this._setPauseStatment();
            } else if (newViewMode === 'initialStatment')  {
                this._setInitialStatment();
            } else if (newViewMode === 'gameOver') {
                this._setGameOverStatment();
            }
        };
    };
});