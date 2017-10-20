define(function() {

    'use strict';

    return class ButtonSetter {
        
        constructor() {
            this._playButton = null;
            this._pauseButton = null;
            this._createPlayButton();
            this._createPauseButton();
            this._currentButton = 'play';
        };

        switchPlayPause() {
            if (this._currentButton === 'play') {
                $('#playButton').replaceWith(this._pauseButton);
                this._currentButton = 'pause';
            } else if (this._currentButton === 'pause') {
                $('#pauseButton').replaceWith(this._playButton);
                this._currentButton = 'play';
            }
        };

        setPlayButton() {
            $('#pauseButton').replaceWith(this._playButton);
                this._currentButton = 'play';
            this._currentButton = 'play';
        };

        _createPlayButton() {
            this._playButton = $('<button>').attr({
                class: "four columns play",
                id: "playButton"
            }).text('Play');
        };

        _createPauseButton() {
            this._pauseButton = $('<button>').attr({
                class: "four columns play button-primary",
                id: "pauseButton"
            }).text('Pause');
        };
    }; 
});