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
        SnakeCreator,
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
        CellSetter,
        GameDeckCreator,
        GameDeckStatmentSetter,
        CellCoordinatesSetter,
        ButtonSetter,
        ModalSetter,
        CountersStatmentSetter,
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

        container.addDependency('SnakeCreator', function(args) {
            return new SnakeCreator(...args);
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

        container.addDependency('CellSetter', function(args) {
            return new CellSetter(...args);
        });

        container.addDependency('GameDeckStatmentSetter', function(args) {
            return GameDeckStatmentSetter.createGameDeckStatmentSetter(...args);
        });

        container.addDependency('CellCoordinatesSetter', function(args) {
            return new CellCoordinatesSetter(...args);
        });

        container.addDependency('ButtonSetter', function(args) {
            return new ButtonSetter(...args);
        });

        container.addDependency('ModalSetter', function(args) {
            return new ModalSetter(...args);
        });

        container.addDependency('CountersStatmentSetter', function(args) {
            return new CountersStatmentSetter(...args);
        });

        container.addDependency('Handler', function(args) {
            return new Handler(...args);
        });

        return container;
	};
});