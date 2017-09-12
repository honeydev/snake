define(['tests/BaseTest'], function(BaseTest) {
    
    'use strict';
    
    return class DeckTest extends BaseTest {

        constructor(container) {
            super(container);
            this._deck = container.getDependency('Deck', container);
            this._config = container.getDependency('config');
        };

        test() {
            this._testDeckLength();
        };

        _testDeckLength() {

            let assert = this._chai.assert;
            let deck = this._deck;
            let expectedRowLength = this._config.deckRowSize;

            describe('deck._deck', function() {
                    it(`Deck is array. 
                As default deck must contain ${expectedRowLength} arrays, each array
                contain ${expectedRowLength} object type of Deck`, function() {
                    assert.equal(deck._deck.length, expectedRowLength);
                    
                    for (let i = 0; i < expectedRowLength; i++) {
                        assert.equal(deck._deck[i].length, expectedRowLength);
                    }
                });
            });
        };
    };
});