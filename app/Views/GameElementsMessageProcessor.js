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
                
            } else if (type === 'tempStatment') {
                this._mainPageStatmentSetter.refreshCounters('temp', message);
            } else if (type === 'timerStatment') {
                this._mainPageStatmentSetter.refreshCounters('timer', message);
            } else if (type === 'scoresStatment') {
                this._mainPageStatmentSetter.refreshCounters('scores', message);
            } else if (type === 'showGameOverMessage') {
                this._mainPageStatmentSetter.changeViewMode('gameOver');
            } else {
                throw new Error('Invalid incomming message!');
            }
        };
    };
});