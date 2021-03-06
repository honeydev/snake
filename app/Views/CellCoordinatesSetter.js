define(function() {

    'use strict';

    return class CellCoordinatesSetter {
        /**
         * @param {[array]} coordinates [description]
         * @param {[Cell]} cell        [description]
         */
        setCoordinates(coordinates, cell) {
            cell.position = this._prepareCoordinates(coordinates);
        };

        _prepareCoordinates(coordinates) {
            let cellCenterCoordinates = {x: null, y: null};
            let minimalCoordinatesPoint = {x: coordinates.x, y: coordinates.y};
            let maximalCoordinatesPoint = {x: coordinates.x + 31, y: coordinates.y + 31};
            cellCenterCoordinates.x = (minimalCoordinatesPoint.x+maximalCoordinatesPoint.x) / 2;
            cellCenterCoordinates.y = (minimalCoordinatesPoint.y+maximalCoordinatesPoint.y) / 2;
            return cellCenterCoordinates;
        };
    }; 
});