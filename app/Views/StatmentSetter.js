/**
 * @class StatmentSetter set view statment accord changes from app model
 * @property {object} pageView render game view elements on page, instance of PageView @class
 */
define(function() {
    
    'use strict';

    return class StatemntSetter {

        constructor(pageView) {
            this._pageView = pageView;
        };

        processMessage(message) {
        	if (message.hasOwnProperty('higlightCell')) {

        	} else if (message.hasOwnProperty('unhiglightCell')) {

        	} else if (message.hasOwnProperty('higlightArrow')) {

        	} else if (message.hasOwnProperty('countersStatment')) {

        	} else {
        		throw new Error('Invalid incomming message!');
        	}
        };
    };
});