define(function() {
    'use strict';

    return class BaseModel {
        
        universalGetter(property) {
            
            if (this.hasOwnProperty(property)) {
                return this[property];
            }
            return false;
        };
    };
});