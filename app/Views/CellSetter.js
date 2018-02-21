define(function() {

    'use strict';

    return class CellSetter {
        /**
         * @param  {[array]} coordinates 
         * @return {Path} 
         */
        createCell(coordinates) {
            let cell = new paper.Rectangle(coordinates.x, coordinates.y, 31, 31);
            this.cellPath = new paper.Path.Rectangle(cell);
            this.cellPath.fillColor = 'red';
            return this.cellPath;
        };
        /**
         * @param  {arrau} cells [description]
         */
        deleteCell(...cells) {
            cells.forEach((cell) => {
                cell.remove();
            });
        };
    }; 
});