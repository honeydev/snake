define(function() {

    'use strict';

    return class CellSetter {
        /**
         * @param  {[array]} coordinates 
         * @return {Path} 
         */
        createCell(coordinates) {
            let cell = new paper.Rectangle(coordinates.x, coordinates.y, 30, 30);
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

        test() {
            let x = 0;
            let y = 0;
            let timeoutId = setTimeout(function func() {

                this.moveCell(x, y);
                x++;
                if (x === 12 && y === 12){
                    clearTimeout(timeoutId);
                    return null;
                } else if (x === 12) {
                    x = 0;
                    y++;
                } 
                timeoutId = setTimeout(func.bind(this), 300);
            }.bind(this), 300);              
        };
    }; 
});