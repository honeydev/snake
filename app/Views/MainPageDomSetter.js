/**
 * @class MainPageDomSetter - set elements on main page
 */

(define(function() {

    'use strict';

    return class MainPageDomSetter {
        /** @method set main conataner on page */
        setMainContainer(mainPageElements, previousDomObject) {
            $(mainPageElements.mainContainer).
                insertAfter(previousDomObject);
        };
        /** @method set button section on page */
        setControllButtonsSection(mainPageElements, previousDomObject) {
            $(mainPageElements.contrrollButtonsSection).
                appendTo(mainPageElements.mainContainer);
            $(mainPageElements.buttonWrap).
                appendTo(mainPageElements.contrrollButtonsSection);
            $(mainPageElements.playButton).
                appendTo(mainPageElements.buttonWrap);
            $(mainPageElements.replayButton).
                appendTo(mainPageElements.buttonWrap);
            $(mainPageElements.deckElementsThree).
                appendTo(mainPageElements.mainContainer);
        };
        /** @method set arrwo section on page */
        setArrowSection(mainPageElements, previousDomObject) {
            $(mainPageElements.arrowSection).
                insertAfter(mainPageElements.deckElementsThree);
            $(mainPageElements.upRow).
                appendTo(mainPageElements.arrowSection);
            $(mainPageElements.upRowWrap).
                appendTo(mainPageElements.upRow);
            $(mainPageElements.upArrowImg).
                appendTo(mainPageElements.upRowWrap);
            $(mainPageElements.leftRightRow).
                appendTo(mainPageElements.arrowSection);
            $(mainPageElements.leftRightWrap).
                appendTo(mainPageElements.leftRightRow);
            $(mainPageElements.leftArrowImg).
                appendTo(mainPageElements.leftRightWrap);
            $(mainPageElements.rightArrowImg).
                appendTo(mainPageElements.leftRightWrap);
            $(mainPageElements.downRow).
                appendTo(mainPageElements.arrowSection);
            $(mainPageElements.downWrap).
                appendTo(mainPageElements.downRow);
            $(mainPageElements.downArrowImg).
                appendTo(mainPageElements.downWrap);
        };
        /** @method set counters section on page */
        setCountersSection(mainPageElements, previousDomObject) {
            $(mainPageElements.countersSection).
                appendTo(mainPageElements.mainContainer);
            $(mainPageElements.scores).
                appendTo(mainPageElements.countersSection);
            $(mainPageElements.timer).
                appendTo(mainPageElements.countersSection);
            $(mainPageElements.temp).
                appendTo(mainPageElements.countersSection);
        };
    };
}));