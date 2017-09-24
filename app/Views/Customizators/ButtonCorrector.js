define(function() {

    'use strict';

    return class ButtonCorrector {

        constructor(container, mainPageElements) {
            this._playButton = mainPageElements.playButton;
            this._pauseButton = mainPageElements.pauseButton;
            this._replayButton = mainPageElements.replayButton;
            this._buttonResizer = container.getDependency('ButtonResizer', mainPageElements);
        };

        correctButtons(statment) {
            if (statment === 'landscape') {
                console.log('set landscape');
               this._setLandscapeStatmnet();
            } else if (statment === 'portrait') {
                console.log('set portrait');
                this._setPortraitStatment();
            } else {
                throw new Error(`Invalid orientation statment |${statment}|`);
            }
            this._correctButtonSize();
        };

        _setLandscapeStatmnet() {
            $(this._playButton, this._pauseButton).removeClass();
            $(this._pauseButton).removeClass();
            $(this._playButton).addClass('col-xs-2 col-xs-offset-4');
            $(this._pauseButton).addClass('col-xs-2 col-xs-offset-4');
            console.log('pause button', this._pauseButton);
            $(this._replayButton).removeClass();
            $(this._replayButton).addClass('col-xs-2 col-xs-offset-1');
        };

        _setPortraitStatment() {
            $(this._playButton).removeClass();
            $(this._pauseButton).removeClass();
            $(this._playButton, this._pauseButton).addClass('col-xs-4 col-xs-offset-2');
            $(this._pauseButton).addClass('col-xs-4 col-xs-offset-2');
            $(this._replayButton).removeClass();
            $(this._replayButton).addClass('col-xs-4 col-xs-offset-1');
        };

        _correctButtonSize() {

            setTimeout(() => {
                this._buttonResizer.correctButtonSize();
            }, 200);
        };
    }; 
});