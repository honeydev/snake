/** 
 * @class create main page dom elements
 */
(define(function() {

    'use strict';

    return class MainPageCreator {

        createMainContainer(mainPageElements) {
            mainPageElements.mainContainer = $('<main>').attr({
                    class: "container-fluid"
                });
        };

        createControllButtonsSection(mainPageElements) {
           
            mainPageElements.contrrollButtonsSection = $('<section>').attr({
                class: "row controllButtons"
            });

            mainPageElements.buttonWrap = $('<div>').attr({
                class: "col-xs-11"
            });

            mainPageElements.playButton = $('<button>').attr({
                    class: "col-xs-4 col-xs-offset-2",
                    id: "playButton"
            }).text('1');

            mainPageElements.pauseButton = $('<button>').attr({
                class: "col-xs-4 col-xs-offset-2",
                id: "pauseButton"
            }).text('2');

            mainPageElements.replayButton = $('<button>').attr({
                class: "col-xs-4 col-xs-offset-1",
                id: "replayButton"
            }).text('0');       
        };

        createArrowSection(mainPageElements) {
            /* container */
            mainPageElements.arrowSection = $('<section>').attr({
                    class: "arrow"
            });
            /* up arrow */
            mainPageElements.upRow = $('<div>').attr({
                    class: "row"
            });

            mainPageElements.upRowWrap = $('<div>').attr({
                class: "col-xs-8 col-xs-offset-2"
            });

            mainPageElements.upArrowImg = $('<img>').attr({
                src: "template/img/up-arrow.svg",
                class: "col-xs-4 col-xs-offset-4",
                id: "upArrow"
            });
            /* left right arrows */
            mainPageElements.leftRightRow = $('<div>').attr({
                class: "row"
            });

            mainPageElements.leftRightWrap = $('<div>').attr({
                class: "col-xs-8 col-xs-offset-2"
            });

            mainPageElements.leftArrowImg = $('<img>').attr({
                class: "col-xs-4 col-xs-offset-1",
                src: "template/img/left-arrow.svg",
                id: "leftArrow"
            });

            mainPageElements.rightArrowImg = $('<img>').attr({
                class: "col-xs-4 col-xs-offset-2",
                src: "template/img/right-arrow.svg",
                id: "rightArrow"
            });
            /* create down arrow */
            mainPageElements.downRow = $('<div>').attr({
                class: "row"
            });

            mainPageElements.downWrap = $('<div>').attr({
                class: "col-xs-8 col-xs-offset-2"
            });

            mainPageElements.downArrowImg = $('<img>').attr({
                class: "col-xs-4 col-xs-offset-4",
                src: "template/img/down-arrow.svg",
                id: "downArrow"
            });
        };

        createCountersSection(mainPageElements) {

            mainPageElements.countersSection = $('<section>').attr({
                class: "countersSection row"
            });

            mainPageElements.scores = $('<h4>').attr({
                    class: "col-xs-4"
                }).text('Scores: ');

            mainPageElements.timer = $('<h4>').attr({
                class: "col-xs-4"
            }).text('Timer: ');

            mainPageElements.temp = $('<h4>').attr({
                class: "col-xs-4"
            }).text('Temp: ');    
        };
        /**
         * @method add wrap on Deck Eleemnts for correct display on page
         * @param {array} deck contain div elements with class "cell"
         * @return jquery wrap with deck elements three
         */
        createDeckThree(deck) {

            function createRow(row) {
                let rowWrap = $('<div>').attr({
                    class: "row"
                });
                for (let y = 0; y < row.length; y++) {
                    $(row[y]).appendTo(rowWrap);
                }
                return rowWrap;
            };

            let deckWrap = $('<section>').attr({
                class: "deck"
            });

            for (let i = 0; i < 12; i++) {
                let row = createRow(deck[i]);
                $(row).appendTo(deckWrap);
            }

            return deckWrap;
        };
    };
}));