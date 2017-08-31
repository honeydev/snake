define(['app/Models/BaseModel'], function() {

    'use strict';

    return class ScoresModel extends BaseModel {

        constructor() {
            this._scores = 0;
        };

        addScore() {
            this._scores++;
        }
    };
});