define(function() {

    'use strict';

    return class CellResizer {
        
        correctCellHeight() {
            
            let cellWidth = $('.cell').outerWidth();
            $('.cell').outerHeight(cellWidth);
        };
    }; 
});