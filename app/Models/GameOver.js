define(function() {

    'use strict';

    return class GameOver {

        constructor(container, mainProcessor, observable) {
            this._gameOverStrategy = container.getDependency('GameOverStrategy');
            this._snake = container.getDependency('Snake', container);
            this._mainProcessor = mainProcessor;
            this._observable = observable;
        };
        /**
         * @return {[bool]} [description]
         */
        checkForGameOver() {
            if (this._gameOverStrategy.isGameOver(this._snake)) {
                this._mainProcessor.stopSnake();
                this._sendViewMessageAboutGameOver();
                return true;
            }
        };
        
        _sendViewMessageAboutGameOver() {
            this._observable.sendMessage({
                mode: 'gameOver'
            });
        };
    };
});