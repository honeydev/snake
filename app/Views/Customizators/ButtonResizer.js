define(function() {

    'use strict';

    return class ButtonResizer {
        
        constructor(mainPageElements) {
            this._playButton = mainPageElements.playButton;
            this._pauseButton = mainPageElements.pauseButton;
            this._replayButton = mainPageElements.replayButton;
        };

        correctButtonSize() {
            let buttonWidth = $(this._replayButton).outerWidth();
            $(this._playButton).outerHeight(buttonWidth);
            $(this._pauseButton).outerHeight(buttonWidth);        
            $(this._replayButton).outerHeight(buttonWidth);             
        };
    }; 
});