define(function() {
	
	'use strict';

    return class Container {
  
        constructor() {
            this._dependencies = {};
        };
  
        addDependency(dependencyName, dependencyCallback, ...args) {
            this._dependencies[dependencyName] = dependencyCallback;
        };
  
        getDependency(dependencyName, ...args) {
            return this._dependencies[dependencyName](args);
        };
    };
});