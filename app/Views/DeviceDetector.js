define(function() {

    'use strict';

    return class DeviceDetector {

        constructor() {

            this._deviceOrientation;
            this._calculateDeviceOrientation();
        };

        getDeviceOrientation() {
            return this._deviceOrientation;
        };

        refreshDeviceOrientation() {
            this._calculateDeviceOrientation();
        };

        _calculateDeviceOrientation() {


            const SCREEN_WIDTH = $(window).outerWidth();
            const SCREEN_HEIGHT = $(window).outerHeight();
            console.log('стороны', SCREEN_WIDTH, SCREEN_HEIGHT);
            if (SCREEN_WIDTH > SCREEN_HEIGHT) {
                this._deviceOrientation = 'landscape';
            } else {
                this._deviceOrientation = 'portrait';
            }

        };
    };
});