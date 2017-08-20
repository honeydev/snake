define(function() {

    'use strict';

    return class pageView {

        constructor($) {
            this._$ = $;
            let myDiv = $('<div>').attr({'id':'my', 'class': 'some'});
            myDiv.text('hello world');
            $(myDiv).text('hello world');
            $(myDiv).insertAfter('body');
        };
    }
})