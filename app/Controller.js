define(function() {

    'use strict';

    return class Controller {

        constructor(container) {
            this._container = container;
            this._mainView = container.getDependency('MainView', container);
            this._createMainProcessor();
            setTimeout(() => {
                this.init();
            }, 110);
        };

        _createMainProcessor() {
            let mainProcessorObservable = this._container.getDependency('Observable');
            this._snake = this._container.getDependency('Snake', this._container, mainProcessorObservable);
            mainProcessorObservable.addSubscriber(this._mainView);
            mainProcessorObservable.addSubscriber(this._mainView.getGameDeckStatmentSetter());
            mainProcessorObservable.addSubscriber(this._mainView.getCountersStatmentSetter());
            this._mainProcessor = this._container.getDependency(
                'MainProcessor', 
                this._container, 
                mainProcessorObservable
                );
        };

        init() {
            this._mainProcessor.initSnake();
        };

        play() {
            this._mainProcessor.moveSnake();
            this._mainView.processMessage({
                mode: 'play'
            });
        };

        pause() {
            this._mainProcessor.stopSnake();
            this._mainView.processMessage({
                mode: 'pause'
            });;
        };

        replay() {
            this._mainProcessor.destroyGame();
            this._snake.deleteSnakeInstance();
            this._mainView.processMessage({
                mode: 'replay'
            });
            this._createMainProcessor();
            this.init();
        };

        changeDirection(direction) {
            this._snake.setDirection(direction);
        };
    };
});