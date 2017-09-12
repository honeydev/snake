define(function() {

    'use strict';

    return class MainPageConcretElementsSetter {

        constructor(mainPageElements) {
            this._mainPageElements = mainPageElements;
        };

        setPlayButton() {
            $(this._mainPageElements.pauseButton).
                replaceWith(this._mainPageElements.playButton);
        };

        setPauseButton() {
            $(this._mainPageElements.playButton).
                replaceWith(this._mainPageElements.pauseButton);
        };
    };
});