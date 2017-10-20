define(function() {

    'use strict';

    return class CellCoordinatesSetter {
        
        setCoordinates(coordinates, cell) {
            cell.position = this._prepareCoordinates(coordinates);
            console.log(cell);
        };

        _prepareCoordinates(coordinates) {
            let cellCenterCoordinates = {x: null, y: null};
            let minimalCoordinatesPoint = {x: coordinates.x, y: coordinates.y};
            let maximalCoordinatesPoint = {x: coordinates.x + 30, y: coordinates.y + 30};
            cellCenterCoordinates.x = (minimalCoordinatesPoint.x+maximalCoordinatesPoint.x) / 2;
            cellCenterCoordinates.y = (minimalCoordinatesPoint.y+maximalCoordinatesPoint.y) / 2;
            return cellCenterCoordinates;
        };
    }; 
});