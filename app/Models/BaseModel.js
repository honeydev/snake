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
    };
});