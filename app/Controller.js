define(function() {

    'use strict';

    return class Controller {

        constructor(container) {
            this._container = container;
            //this._createMainProcessor();
            this._mainView = container.getDependency('MainView', container);
            console.log('sda')
        };

        _createMainProcessor() {
            let mainProcessorObservable = this._container.getDependency('Observable');
            this._snake = this._container.getDependency('Snake', this._container, mainProcessorObservable);
            console.log('snake create again', this._snake);
            mainProcessorObservable.addSubscriber(this._mainPageStatmentSetter);
            this._mainProcessor = this._container.getDependency(
                'MainProcessor', 
                this._container, 
                mainProcessorObservable
                );
        };

        init() {
            console.log(this._snake);
            this._mainProcessor.initSnake();
            console.log('run app');
        };

        play() {
            console.log('play');
            this._mainProcessor.moveSnake();
            this._mainPageStatmentSetter.changeViewMode('play');
        };

        pause() {
            console.log('pause');
            this._mainProcessor.stopSnake();
            this._mainPageStatmentSetter.changeViewMode('pause');
        };

        replay() {
            console.log('replay');
            this._mainProcessor.destroyGame();
            this._snake.deleteSnakeInstance();
            this._mainPageStatmentSetter.changeViewMode('initialStatment');
            delete this._mainProcessor;
            delete this._snake;
            console.log('snake after delete', this._snake);
            this._createMainProcessor();
            this.init();
        };

        changeDirection(direction) {
            console.log('new direction', direction);
            this._snake.setDirection(direction);
        };
    };
});