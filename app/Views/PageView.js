/**
 * @class render game view elements on page
 * @property {object} _helloMessageElements - contain hello message element 
 * for esay access to it
 * @property {object} _mainPageElements - contain main page elements (controll buttons,
 * deck, counters, etc)
 * @property {array} _gameDeck - 2d array contain deck elements for easy manipulation with DOM objects
 * from outer code. Structure of this array identical deck @propert of Deck @class
 */
define(function() {

    'use strict';

    return class PageView {
        /**
         * @constructor set object properties, init page render
         */       
        constructor(container) {
            this._config = container.getDependency('config');
            /* add creators */
            this._helloMessageCreator = container.getDependency('HelloMessageCreator');
            this._mainPageCreator = container.getDependency('MainPageCreator');
            console.log(this._mainPageCreator);
            /* add dom setters */
            this._helloMessageDomSetter = container.getDependency('HelloMessageDomSetter');
            this._mainPageDomSetter = container.getDependency('MainPageDomSetter');
            /* generate elements */
            this._helloMessageElements = {};
            this._mainPageElements = {};
            this._gameDeck = [];

            this._prepareGameDeck(
                this._mainPageElements, 
                this._config.deckRowSize,
                this._mainPageCreator
                );
            /* render on page */
            this._renderHelloMessage(
                this._helloMessageElements, 
                this._helloMessageCreator, 
                this._helloMessageDomSetter
                );

            this._renderMain(
                this._mainPageElements, 
                this._helloMessageElements.helloMessageContainer,
                this._gameDeck,
                this._mainPageCreator,
                this._mainPageDomSetter
                );
        };
        
        _prepareGameDeck() {
            this._gameDeck = this._createDeck(this._config.deckRowSize);
            this._mainPageElements.deckElementsThree = this._mainPageCreator.createDeckThree(this._gameDeck);
        };
        /**
         * @method _renderHelloMessage create hello message elements and add his on page
         * @param {object} empty hello message object 
         */
        _renderHelloMessage(helloMessage, helloMessageCreator, helloMessageDomSetter) {
            /**
             * @function createHelloMessageElements create hello message elements
             */
            let createHelloMessageElements = function() {
                helloMessageCreator.createHelloMessageContainer(helloMessage);
                helloMessageCreator.createLogoSection(helloMessage);
                helloMessageCreator.createH1ButtonSection(helloMessage);
            };
            /** @function addHelloMessageElementsOnPage add eello message elements on page */
            let addHelloMessageElementsOnPage = function() {
                helloMessageDomSetter.setHelloMessageContainer(helloMessage, 'body');
                helloMessageDomSetter.setLogoSection(helloMessage, helloMessage.helloMessageContainer)
                helloMessageDomSetter.setH1ButtonSection(helloMessage, helloMessage.logoSection); 
            };

            createHelloMessageElements();
            addHelloMessageElementsOnPage();
        };
        /**
         * @method create and add on page game elements (header, control buttons, deck 
         * contaienr, timer, score timer etc)
         * @param {object} mainPageElements empty object for main game elements
         * @param {object}  previous dom object, element after which add main page elements
         * @param {array} gameDeck array with DOM elements - div with class Cell.
         * @param {object} mainPageCreator instance of MainPageCreator @class
         * @param {object} mainPageDomSetter instance of MainPageDomSetter
         */
        _renderMain(mainPageElements, previousDomObject, gameDeck, mainPageCreator, mainPageDomSetter) {
            /** @function create main page elements besides game deck */
            let createMainPageElements = function(mainPageElements) {
                mainPageCreator.createMainContainer(mainPageElements);
                mainPageCreator.createControllButtonsSection(mainPageElements);
                mainPageCreator.createArrowSection(mainPageElements);
                mainPageCreator.createCountersSection(mainPageElements);
            };
            /** @function just add main page elements */
            let addMainPageElementsOnPage = function(mainPageElements, previousDomObject) {
                mainPageDomSetter.setMainContainer(mainPageElements, previousDomObject);
                mainPageDomSetter.setControllButtonsSection(mainPageElements, previousDomObject);
                mainPageDomSetter.setArrowSection(mainPageElements, previousDomObject);
                mainPageDomSetter.setCountersSection(mainPageElements, previousDomObject);
            };
            
            createMainPageElements(mainPageElements, previousDomObject);
            addMainPageElementsOnPage(mainPageElements, previousDomObject);
        };
        /** 
         * @method render game field. 
         * @param empty gameDeckElements object
         * @param {int} filed size
         * @return {array} 2-d array with cell elements 
         */ 
        _createDeck(fieldSize) {
            let deckElements = [];

            for (let i = 0; i < fieldSize; i++) {
                deckElements.push((() => {
                    let deckRow = [];
                    for (let y = 0; y < fieldSize; y++) {
                        deckRow.push($('<div>').attr({
                            class: "cell col-xs-1"
                        }).css({
                            "height": "20px",
                            "background-color": "blue",
                            "padding": 0,
                            "border": "1px solid yellow"
                        }));
                    }
                    return deckRow;
                })());
            }
            return deckElements;
        };
        /**
         * @method get single page element generated in this class
         * @param {string} name of one of the element collections of this class
         * @param {string} required element name
         * @return {object} DOM object in jquery wrap
         */
        pageElementGetter(pagePart, elementName) {
            return this[pagePart][elementName];
        };

        universalGetter(propertyName) {
            return this[propertyName];
        };
    };
});