define(function() {

    'use strict';

    return class Controller {

        constructor(container) {
            this._mainPageStatmentSetter = container.getDependency('MainPageStatmentSetter', container);
            this._snake = container.getDependency('Snake', container, 'ziga');
            let mainProcessorObservable = container.getDependency('Observable');
            mainProcessorObservable.addSubscriber(this._mainPageStatmentSetter);
            this._mainProcessor = container.getDependency('MainProcessor', container, mainProcessorObservable);
        };

        init() {
            this._mainProcessor.initSnake();
            console.log('run app');
        };

        play() {
            console.log('play');
            this._mainProcessor.moveSnake();
            this._mainPageStatmentSetter.changeViewMode('play');
        };

        pause() {
            alert('pause');
            this._mainProcessor.stopSnake();
            this._mainPageStatmentSetter.changeViewMode('pause');
        };

        replay() {
            console.log('replay');
        };

        changeDirection(direction) {
            console.log('new direction', direction);
            this._snake.setDirection(direction);
        };
    };
});