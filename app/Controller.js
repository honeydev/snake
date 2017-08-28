(define(function() {

    'use strict';

    return class Controller {

        constructor(mainProcessor, statmentSetter) {
            this._mainProcessor = mainProcessor;
            this._statmentSetter = statmentSetter;
        };

        run() {
            console.log('run app');
        };

        play() {

        };

        pause() {

        };

        refresh() {

        };
    };
}));