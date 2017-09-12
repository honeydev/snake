define(['mocha', 'chai'], function(mocha, chai) {
    
    'use strict';

    return class BaseTest {

        constructor(container) {
            this._mocha = container.getDependency('mocha');
            this._chai = chai;
            this._mocha.setup('bdd');
        };
    };
});