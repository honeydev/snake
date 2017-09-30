define(function() {

    'use strict';

    return function(        
        container, 
        Observable,
        Controller,
        BaseModel,
        Timer,
        ScoresCounter,
        Temp,
        Deck, 
        Cell,
        FoodPart,
        FoodGenerator,
        FoodProcessor,
        Snake,
        SnakeValidator,
        CoordinatesValidator,
        SnakePart, 
        MainProcessor,
        StepProcessor,
        MoveStrategy,
        GameOver,
        GameOverStrategy,
        config,
        MainView,
        CellCreator,
        GameDeckCreator,
        Handler
        ) {
        container.addDependency('Observable', function(args) {
            return new Observable(...args);
        });

        container.addDependency('Controller', function(args) {
            return new Controller(...args);
        });

        container.addDependency('Timer', function(args) {
            return new Timer(...args);
        });

        container.addDependency('ScoresCounter', function(args) {
            return new ScoresCounter(...args);
        });

        container.addDependency('Temp', function(args) {
            return new Temp(...args);
        });

        container.addDependency('Deck', function(args) {
            return new Deck(...args);
        });

        container.addDependency('Cell', function(args) {
            return new Cell(...args);
        });

        container.addDependency('SnakePart', function(args) {
            return new SnakePart(...args);
        });

        container.addDependency('FoodPart', function(args) {
            return FoodPart.createFoodPart(...args);
        });

        container.addDependency('FoodGenerator', function(args) {
            return new FoodGenerator(...args);
        });

        container.addDependency('FoodProcessor', function(args) {
            return new FoodProcessor(...args);
        });

        container.addDependency('Snake', function(args) {
            return Snake.createSnake(...args);
        });

        container.addDependency('SnakeValidator', function(args) {
            return new SnakeValidator(...args);
        });

        container.addDependency('CoordinatesValidator', function(args) {
            return new CoordinatesValidator(...args);
        });

        container.addDependency('MainProcessor', function(args) {
            return new MainProcessor(...args);
        });

        container.addDependency('StepProcessor', function(args) {
            console.log(StepProcessor);
            return new StepProcessor(...args);
        })

        container.addDependency('MoveStrategy', function(args) {
            return new MoveStrategy(...args);
        });

        container.addDependency('GameOver', function(args) {
            return new GameOver(...args);
        });

        container.addDependency('GameOverStrategy', function(args) {
            return new GameOverStrategy(...args);
        });

        container.addDependency('SnakeValidator', function(args) {
            return new SnakeValidator(...args);
        });
        
        container.addDependency('config', function() {
            return config;
        });

        container.addDependency('MainView', function(args) {
            return new MainView(...args);
        });

        container.addDependency('GameDeckCreator', function(args) {
            return new GameDeckCreator(...args);
        });

        container.addDependency('CellCreator', function(args) {
            return new CellCreator(...args);
        });

        container.addDependency('Handler', function(args) {
            return new Handler(...args);
        });

        return container;
	};
});