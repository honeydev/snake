define(function() {

    'use strict';

    return class CountersStatmentSetter {

        _setTimer(timeStamp) {
            $('#timerValue').text(timeStamp);
        };

        _setScores(scores) {
            $('#scoresValue').text(scores);
        };

        _setTemp(temp) {
            $('#tempValue').text(temp);
        };

        processMessage(message) {
            if (message.hasOwnProperty('timerStatment')) {
                this._setTimer(message.timerStatment);
            } else if (message.hasOwnProperty('scoresStatment')) {
                this._setScores(message.scoresStatment);
            } else if (message.hasOwnProperty('tempStatment')) {
                this._setTemp(message.tempStatment);
            }
        };
    };
});