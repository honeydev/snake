define(function() {

    'use strict';

    return class Handler {

        constructor(controller) {
            this._playButton(controller);
            this._resetButton(controller);
            this._arrows(controller);
            this._tryAgainButton(controller);
            //console.log(this._controller, this._helloMessageElements, this._mainPageElements);
        };

        _playButton(controller) {
            $('#playButton').off();
            $('#playButton').click(function() {
                console.log('PLAY BUTTON HANDLER');
                controller.play();
                this._pauseButton(controller);
            }.bind(this));
        };

        _pauseButton(controller) {
            $('#pauseButton').click(function() {
                controller.pause();
                this._playButton(controller);
            }.bind(this));
        };

        _resetButton(controller) {
            $('#resetButton').click(function() {
                controller.replay();
                this._playButton(controller);
            }.bind(this));
        };

        _tryAgainButton(controller) {
            $('#tryAgainButton').click(function() {
                controller.replay();
                this._playButton(controller);
            }.bind(this));
        };

        _arrows(controller) {
            $(document).keydown(function(event) {
                if (event.which == 37) {
                    controller.changeDirection('left')
                } else if (event.which == 38) {
                    controller.changeDirection('up');
                } else if (event.which == 39) {
                    controller.changeDirection('right');
                }  else if (event.which == 40) {
                    controller.changeDirection('down');
                }
            });
        };
    }; 
});