/**
 * @class StatmentSetter set view statment accord changes from app model
 * @property {object} pageView render game view elements on page, instance of PageView @class
 */
define(function() {
    
    'use strict';

    return class StatemntSetter {

        constructor(
            pageView, 
            HelloMessageStatmentSetter, 
            MainPageStatmentSetter
            ) {
            this._pageView = pageView;
            this._helloMessageStatmentSetter = new HelloMessageStatmentSetter();
            this._mainPageStatmentSetter = new MainPageStatmentSetter(this._pageView.universalGetter('_gameDeck'));
        };

        /** 
         * @param {object} incomming message where property is 
         */
        processMessage(incommingMessage) {
            console.log(incommingMessage);
            for (let concretMessage in incommingMessage) {
                this._processConcretMessage(
                    incommingMessage[concretMessage], 
                    concretMessage
                    );
            }
        };
        /** 
         * @param {array} message - data for statment setter classes
         * @param {string} type - type of message
         * @throw new Error if message has incorrect type
         */
        _processConcretMessage(message, type) {
            if (type === 'higlightCells') {
                this._mainPageStatmentSetter.higlihtCells(message);
            } else if (type === 'unHiglightCells') {
                console.log('unhiglight');
                this._mainPageStatmentSetter.unHiglightCells(message);
            } else if (type === 'higlightArrow') {

            } else if (type === 'countersStatment') {

            } else {
                throw new Error('Invalid incomming message!');
            }
        };
    };
});