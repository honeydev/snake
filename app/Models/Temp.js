/**
 * @class Temp set and get main app loop temp in milliseconds
 */
define(['app/Models/BaseModel'], function(BaseModel) {

    'use strict';

    return class Temp extends BaseModel {
        /** 
         * @constructor add class properties
         * @param {object} observable 
         */
        constructor(observable) {
            super();
            this._observable = observable;
            this._loopTemp = 500;
            this._tempValueFromView = 1;
            this._observable.sendMessage({
                tempStatment: this._tempValueFromView 
            });
        };
        /**
         * @protected
         * @method increaseTemp increase current _loopTemp value on 100
         * increase current _tempValueFromView on 1. 
         * Send message from view about statment change
         */
        _increaseTemp() {
            this._loopTemp += 100;
            this._tempValueFromView++;
            this._observable.sendMessage({
                tempStatment: this._tempValueFromView 
            });
        };

        /**
         * @method ifIsReasonSetNewTemp if scoresnumber match condition set new temp]
         * @param  {number} scores [description]
         * @return {void|false} false if scores incorrect
         */
        ifIsReasonSetNewTemp(scores) {

            const MAX_SCORES = 50;

            let numberIsMultiple10 = function(number) {
                if (number % 10 === 0) {
                    return true;
                }

                return false;
            };

            if (numberIsMultiple10(scores) && scores < MAX_SCORES) {
                this._increaseTemp();
            } else {
                return false;
            }
        };
        /**
         * @method  getTemp get current temp
         * @return {number}
         */
        getTemp() {
            return this._temp;
        };
        /**
         * @method  setTempToDefault set default temp value
         */
        setTempToDefault() {
            this._temp = 500;
        };
    }; 
});