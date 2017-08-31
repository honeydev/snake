define(['app/Models/BaseModel'], function() {

    'use strict';

    return class Timer {

        constructor() {
            this._hours = 0;
            this._minutes = 0;
            this._seconds = 0;
        };

        _timeLoop() {

            this._timeLoopId = setTimeout(function func() {
                console.log('time step');
                console.log(this);
                //this._timeStep();
                this._timeLoop();
            }.bind(this), 100);
        };

        timeStep() {
            this._seconds++;
      
            if (this._seconds === 60) {
                this._seconds = 0;
                this._minutes++;
            }
      
            if (this._minures === 60) {
                this._minutes = 0;
                this._hours++;
            }
      
            if (this._hours > 12) {
                this.refreshTimer();
            }
        }; 
    };
});