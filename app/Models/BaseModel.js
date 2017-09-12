/** 
 * @class BaseModel - Father class for app Models. Model classe optional
 * inherit this class
 */

define(function() {
    'use strict';

    return class BaseModel {
        /** 
         * @method universal getter return class property name
         * @param {string} property name
         */
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
    };
});