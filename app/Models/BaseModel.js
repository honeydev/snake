/** 
 * @class BaseModel - Father class for app Models. Model class optional
 * inherit this class
 */
define(function() {
    
    'use strict';

    return class BaseModel {
        /**
         * @param  {string} property 
         * @return {bool}
         */
        universalGetter(property) {
            
            if (this.hasOwnProperty(property)) {
                return this[property];
            }
            return false;
        };
        /**
         * @param  {int} coordinates1 
         * @param  {int} coordinates2
         * @return {bool}
         */
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