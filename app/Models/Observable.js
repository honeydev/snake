/**
 * @class realize pattern Observable
 */

define(function() {

    'use strict';

    return class Observable {

        constructor() {
            this._subscribers = [];
        };

        addSubscriber(subscriber) {
            this._subscribers.push(subscriber);
        };

        sendMessage(message) {
            console.log(this._subscribers);
            for (let j = 0; j < this._subscribers.length; j++) {
                this._subscribers[j].processMessage(message);
            }
        };
    };
});
