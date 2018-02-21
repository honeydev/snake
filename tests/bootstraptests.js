define(function() {

    'use strict';

    return function(        
        container, 
        Observable,
        Controller,
        BaseModel,
        Timer,
        Deck, 
        Cell,
        FoodPart,
        Snake,
        SnakeValidator,
        FoodGenerator,
        CoordinatesValidator,
        SnakePart, 
        MainProcessor,
        MoveStrategy,
        GameOverStrategy,
        GameDeckStatmentSetter,
        GameDeckCreator,
        CellSetter,
        CellCoordinatesSetter,
        config,
        Handler,
        mocha,
        chai,
        CellTest, 
        DeckTest,
        MoveStrategyTest,
        SnakeValidatorTest,
        FoodGeneratorTest,
        GameOverStrategyTest
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

        container.addDependency('Snake', function(args) {
            return Snake.createSnake(...args);
        });

        container.addDependency('SnakeValidator', function(args) {
            return new SnakeValidator(...args);
        });

        container.addDependency('FoodGenerator', function(args) {
            return new FoodGenerator(...args);
        });

        container.addDependency('CoordinatesValidator', function(args) {
            return new CoordinatesValidator(...args);
        });

        container.addDependency('MainProcessor', function(args) {
            return new MainProcessor(...args);
        });

        container.addDependency('MoveStrategy', function(args) {
            return new MoveStrategy(...args);
        });

        container.addDependency('GameOverStrategy', function(args) {
            return new GameOverStrategy(...args);
        });

        container.addDependency('SnakeValidator', function(args) {
            return new SnakeValidator(...args);
        });

        container.addDependency('GameDeckStatmentSetter', function(args) {
            return new GameDeckStatmentSetter(...args);
        });

        container.addDependency('GameDeckCreator', function(args) {
            return new GameDeckCreator(...args);
        });

        container.addDependency('CellSetter', function(args) {
            return new CellSetter(...args);
        });

        container.addDependency('CellCoordinatesSetter', function(args) {
            return new CellCoordinatesSetter(...args);
        });

        container.addDependency('config', function() {
            return config;
        });

        container.addDependency('Handler', function(args) {
            return new Handler(...args);
        });

        container.addDependency('CellTest', function(args) {
            return new CellTest(...args);
        });

        container.addDependency('DeckTest', function(args) {
            return new DeckTest(...args);
        });

        container.addDependency('MoveStrategyTest', function(args) {
            return new MoveStrategyTest(...args);
        });

        container.addDependency('SnakeValidatorTest', function(args) {
            return new SnakeValidatorTest(...args);
        });


        container.addDependency('FoodGeneratorTest', function(args) {
            return new FoodGeneratorTest(...args);
        });

        container.addDependency('GameOverStrategyTest', function(args) {
            return new GameOverStrategyTest(...args);
        });

        container.addDependency('mocha', function(args) {
            return mocha;
        });

        container.addDependency('chai', function(args) {
            return chai;
        });        

        return container;
	};
});