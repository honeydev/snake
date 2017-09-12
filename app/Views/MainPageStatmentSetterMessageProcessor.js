define(function() {

    'use strict';

    return class MainPageStatmentSetterMessageProcessor {
        
        constructor(mainPageStatmentSetter) {
            this._mainPageStatmentSetter = mainPageStatmentSetter;
        };

        _processConcretMessage(message, type) {
            
            if (type === 'higlightCells') {
                this._mainPageStatmentSetter._cellColorizer.higlihtCells(message);
            } else if (type === 'unHiglightCells') {
                console.log('unhiglight');
                this._mainPageStatmentSetter._cellColorizer.unHiglightCells(message);
            } else if (type === 'higlightArrow') {

            } else if (type === 'countersStatment') {

            } else if (type === 'timerStatment') {
                console.log(message);
            } else {
                throw new Error('Invalid incomming message!');
            }
        };
    };
});