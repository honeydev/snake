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
            if (this._dependencies[dependencyName] == undefined) {
                throw new Error(`${dependencyName} not found `)
            }
            return this._dependencies[dependencyName](args);
        };
    };
});