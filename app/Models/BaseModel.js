/** 
 * @class BaseModel - Father class for app Models. Model class optional
 * inherit this class
 */
define(function() {
    'use strict';

    return class BaseModel {
        /** 
         * @constructor
         * @method universal getter return class property name
         * @param {string} property name
         */
        universalGetter(property) {
            
            if (this.hasOwnProperty(property)) {
                return this[property];
            }
            return false;
        };
        /**
         * @param {array} coordinates1 array with coordinates
         * @param {array} coordinates2 array with coordinates
         * @return {bool} return true if coordinates is equal, false if not
         */ 
        _coordinatesIsEqual(coordinates1, coordinates2) {
  
            if (coordinates1[0] == coordinates2[0] && coordinates1[1] == coordinates2[1]) {
                return true;
            }
            return false;
        };
        /**
         * @protected
         * @method - delete all object properties
         */
        _deleteAllProperties() {
            for (let property in this) {
                delete this[property];
                console.log('delete', property);
            }
        };
    };
});