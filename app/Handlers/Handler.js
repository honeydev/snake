define(function() {

    'use strict';

    return class Handler {

        constructor(controller) {
            this._helloMessageButton(controller);
            this._playButton(controller);
            this._replayButton(controller);
            this._leftArrow(controller);
            this._upArrow(controller);
            this._rightArrow(controller);
            this._downArrow(controller);
            this._gameOverModal(controller);
            //console.log(this._controller, this._helloMessageElements, this._mainPageElements);
        };

        _helloMessageButton(controller) {
            $('#lpButton').click(function() {
                controller.init();
            });
        };

        _playButton(controller) {
            $('#playButton').click(function() {
                controller.play();
                this._pauseButton(controller);
            }.bind(this));
        };

        _pauseButton(controller) {
            $('#pauseButton').click(function() {
                console.log('pause');
                controller.pause();
                console.log(this);
                this._playButton(controller);
            }.bind(this));
        };

        _replayButton(controller) {
            $('#replayButton').click(function() {
                controller.replay();
                this._playButton(controller);
            }.bind(this));
        };

        _leftArrow(controller) {
            $('#leftArrow').click(function() {
                controller.changeDirection('left');
            });
        };

        _upArrow(controller) {
            $('#upArrow').click(function() {
                controller.changeDirection('up');
            });
        };

        _rightArrow(controller) {
            $('#rightArrow').click(function() {
                controller.changeDirection('right');
            });
        };        

        _downArrow(controller) {
            $('#downArrow').click(function() {
                controller.changeDirection('down');
            });
        };

        _gameOverModal(controller) {
            $('#gameOverModal').on('hidden.bs.modal', function(e) {
                controller.replay();
            });
        };    
    }; 
});