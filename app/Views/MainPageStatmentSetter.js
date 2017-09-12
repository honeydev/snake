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
            this._concretElementsSetter.setPauseButton();
        };

        _setPauseStatment() {
            this._concretElementsSetter.setPlayButton();
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