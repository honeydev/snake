define(function(StatmentSetter) {

    'use strict';

    return class MainPageStatmentSetter {
        
        constructor(container) {
            this._pageView = container.getDependency('PageView', container);
            this._messageProcessor = container.getDependency('MainPageStatmentSetterMessageProcessor', this);
            let mainPageElements = this._pageView.universalGetter('_mainPageElements');
            let gameDeck = this._pageView.universalGetter('_gameDeck');
            this._viewMode = '';
            this._cellColorizer = container.getDependency('CellColorizer', gameDeck);
            this._concretElementsSetter = container.getDependency('MainPageConcretElementsSetter', mainPageElements);
            console.log('MainPageStatmentSetter successfull');
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
            //this._concretElementsSetter.setPlayButton();
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
            this._viewMode = newViewMode;
            this._acceptViewMode(newViewMode);
        };

        _acceptViewMode(viewMode) {
            if (viewMode === 'play') {
                console.log('set play mode');
                this._setPlayStatment();
            } else if (viewMode === 'pause') {
                console.log('set pause mode');
                this._setPauseStatment();
            } else if (viewMode === 'initialStatment')  {
                this._setInitialStatment();
            } else if (viewMode === 'gameOver') {
                this._setGameOverStatment();
            }
        };

        processMessage(incommingMessage) {

            for (let concretMessage in incommingMessage) {
                this._messageProcessor._processConcretMessage(
                    incommingMessage[concretMessage], 
                    concretMessage
                    );
            }
        };
    };
});