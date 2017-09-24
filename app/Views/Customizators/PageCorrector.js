(define(function() {

    'use strict';

    return class PageCorrector {

        constructor(container, mainPageElements) {
            this._deviceDetector = container.getDependency('DeviceDetector');
            this._cellResizer = container.getDependency('CellResizer');
            this._buttonCorrector = container.getDependency('ButtonCorrector', container, mainPageElements);
            this._setOrientationStatment();
            this._setOrientationHandler();
            this._cellResizer.correctCellHeight();
        };

        _setOrientationStatment() {
            console.log('SET ORIENTAION STATMENT');
            setTimeout(() => {
            this._deviceDetector.refreshDeviceOrientation();
            const DEVICE_ORIENTATION = this._deviceDetector.getDeviceOrientation();
            this._buttonCorrector.correctButtons(DEVICE_ORIENTATION);
            }, 200);


        };

        _correctCellHeight() {
            
            let cellWidth = $('.cell').outerWidth();
            $('.cell').outerHeight(cellWidth);
        };

        _setOrientationHandler() {
            console.log('try set handler');
            $(window).resize(() => {
                this._setOrientationStatment();
                $(window).off('resize');
                setTimeout(() => {
                    this._setOrientationHandler();
                }, 200);
            });
        };   
    };
}));