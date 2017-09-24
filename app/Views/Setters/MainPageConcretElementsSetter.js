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
                console.log(this._mainPageElements.pauseButton);
        };

        setPlayPauseStatment() {
            if ($('button').is('#playButton')) {
                this.setPauseButton();
            } else {
                this.setPlayButton();
            }
        }

        setTimer(timerStatment) {
            $('#timerStatment').text(timerStatment);
        };

        setScores(scoreValue) {
            $('#scoresStatment').text(scoreValue);
        };

        setTemp(tempValue) {
            $('#tempStatment').text(tempValue);
        };
        
        showModalWindow() {
            $('#gameOverModal').modal();
        };
    };
});