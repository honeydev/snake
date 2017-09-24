define(function() {

    'use strict';

    return class Timer {
        
        constructor(observable) {
            this._hours = 0;
            this._minutes = 0;
            this._seconds = 0;
            this._observable = observable;
            this._observable.sendMessage({
                timerStatment: this._getTimeStamp()
            });
        };

        runTimer() {
            this._timeLoop();
        };

        stopTimer() {
            clearTimeout(this._timeLoopId);
        };

        _timeLoop() {
            setTimeout(function func() {
                this._timeStep();
                this._observable.sendMessage({
                    timerStatment: this._getTimeStamp()
                });
                this._timeLoopId = setTimeout(func.bind(this), 500);
            }.bind(this), 500);
        };

        _timeStep() {

            this._seconds++;

            if (this._seconds === 59) {
                this._seconds = 0;
                this._minutes++;
            }

            if (this._minures === 59) {
                this._minutes = 0;
                this._hours++;
            }

            if (this._hours > 12) {
                this.refreshTimer();
            }
        };

        _getTimeStamp() {
            return `${this._hours}:${this._minutes}:${this._seconds}`;
        };
    };
});