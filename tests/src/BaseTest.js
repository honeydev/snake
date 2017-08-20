define(['mocha', 'chai'], function(mocha, chai) {
    
    'use strict';

    return class BaseTest {

        constructor(mocha, chai) {
            this._mocha = mocha;
            this._chai = chai;
            this._mocha.setup('bdd');
        };
    };
});