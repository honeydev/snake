define(function() {

    'use strict';

    return class ModalSetter {

        constructor() {
            this._modalShowed = false;
        };

        showGameOverModal() {
            $('#gameOverModal').css('display', 'block');
            this._modalShowed = true;
        };

        hideGameOverModal() {
            $('#gameOverModal').css('display', 'none');
            this._modalShowed = false;
        };

        getModalShowedStatus() {
            return this._modalShowed;
        };
    };
});