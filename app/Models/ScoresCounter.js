define(['app/Models/BaseModel'], function(BaseModel) {

    'use strict';

    return class ScoresCounter extends BaseModel {
        /**
         * @param  {Observable} observable [description]
         */
        constructor(observable) {
        	super();
        	this._observable = observable;
            this._scores = 0;
            this._observable.sendMessage({
            	scoresStatment: this._scores
            });
        };

        addScore() {
            this._scores++;
            this._observable.sendMessage({
            	scoresStatment: this._scores
            });
        };

        refreshScore() {
        	this._scores = 0;
        };
    };
});