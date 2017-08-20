define(['tests/BaseTest'], function(BaseTest) {
    
    'use strict';
    
    return class DeckTest extends BaseTest {

        constructor(mocha, chai, deck, config) {
            super(mocha, chai);
            this._deck = deck;
            this._config = config;
        };

        test(
            mocha = this._mocha, 
            chai = this._chai, 
            deck = this._deck,
            expectedRowLength = this._config.deckRowSize
            ) {

            let assert = this._chai.assert;
            this._testDeckLength(assert, deck, expectedRowLength);
        };

        _testDeckLength(assert, deck, expectedRowLength) {
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