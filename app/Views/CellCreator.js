define(function() {

    'use strict';

    return class CellCreator {
        
        constructor() {
            this.createCell();
        }

        createCell()
        {
            let cell = new paper.Rectangle(new paper.Point(30, 0), new paper.Point(60, 30));
            let cellPath = new paper.Path.Rectangle(cell);
            cellPath.fillColor = 'red';
            setTimeout(function() {
                cellPath.position.x += 30;                
            }, 1000);
        }

        moveCell() {

        }
    }; 
});