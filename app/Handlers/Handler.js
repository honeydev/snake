define(function() {

    'use strict';

    return class Handler {
        
        constructor(controller) {
            this._playButton(controller);
            this._resetButton(controller);
            this._arrows(controller);
            this._tryAgainButton(controller);
        };

        _playButton(controller) {
            $('#playButton').off();
            $('#playButton').click(() => {
                controller.play();
                this._pauseButton(controller);
            });
        };

        _pauseButton(controller) {
            $('#pauseButton').click(() => {
                controller.pause();
                this._playButton(controller);
            });
        };

        _resetButton(controller) {
            $('#resetButton').click(() => {
                controller.replay();
                this._playButton(controller);
            });
        };

        _tryAgainButton(controller) {
            $('#tryAgainButton').click(() => {
                controller.replay();
                this._playButton(controller);
            });
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