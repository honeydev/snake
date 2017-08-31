define(function() {

    'use strict';

    return class Handler {

        constructor(controller, pageView) {
            this._controller = controller;
            this._helloMessageElements = pageView.universalGetter('_helloMessageElements');
            this._mainPageElements = pageView.universalGetter('_mainPageElements');
            this._helloMessageButton(this._controller);
            //console.log(this._controller, this._helloMessageElements, this._mainPageElements);
        };

        _helloMessageButton(controller) {
            $('#lpButton').click(function() {
                controller.run();
            });
        };
    };
});