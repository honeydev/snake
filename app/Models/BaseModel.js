/** 
 * @class BaseModel - Father class for app Models. Model class optional
 * inherit this class
 */
define(function() {
    
    'use strict';

    return class BaseModel {

        universalGetter(property) {
            
            if (this.hasOwnProperty(property)) {
                return this[property];
            }
            return false;
        };

        _coordinatesIsEqual(coordinates1, coordinates2) {
  
            if (coordinates1[0] == coordinates2[0] && coordinates1[1] == coordinates2[1]) {
                return true;
            }
            return false;
        };
 
        _deleteAllProperties() {
            for (let property in this) {
                delete this[property];
            }
        };
    };
});