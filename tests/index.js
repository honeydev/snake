requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '../node_modules',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
        tests: '../tests/src',
        jquery: 'jquery/dist/jquery',
        mocha: 'mocha/mocha',
        chai: 'chai/chai',
        config: '..',
        paper: 'paper/dist/paper-full'
    },
    shim: {
        mocha: {
            exports: "mocha",
        },
        chai: {
            exports: "chai"
        },
        paper: {
            exports: "paper"
        }     
    }
});

require(['../tests/bootstrapcss'], function(bootstrapcss) {
    bootstrapcss(['../node_modules/mocha/mocha.css']);
});

require([
    'app/Container',
    '../tests/bootstraptests',
    'app/Models/Observable',
    'app/Controller',
    'app/Models/BaseModel',
    'app/Models/Timer',
    'app/Models/Deck', 
    'app/Models/Cell',
    'app/Models/FoodPart',
    'app/Models/Snake',
    'app/Validators/SnakeValidator',
    'app/Models/FoodGenerator',
    'app/Validators/CoordinatesValidator',
    'app/Models/SnakePart',
    'app/Models/MainProcessor',
    'app/Models/MoveStrategy',
    'app/Models/GameOverStrategy',
    'app/Views/GameDeckStatmentSetter',
    'app/Views/GameDeckCreator',
    'app/Views/CellSetter',
    'app/Views/CellCoordinatesSetter',
    'config/config',
    'app/Handlers/Handler',
    'jquery',
    'mocha',
    'chai',
    'paper',
    'tests/CellTest', 
    'tests/DeckTest',
    'tests/MoveStrategyTest',
    'tests/SnakeValidatorTest',
    'tests/FoodGeneratorTest',
    'tests/GameOverStrategyTest'
    ], 
    function(
        Container,
        bootstraptests,
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
        jquery,
        mocha,
        chai,
        paper,
        CellTest, 
        DeckTest,
        MoveStrategyTest,
        SnakeValidatorTest,
        FoodGeneratorTest,
        GameOverStrategyTest          
        ) {
    let container = new Container();

    bootstraptests(
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
        );
        let cellTest = container.getDependency('CellTest', container);
        let deckTest = container.getDependency('DeckTest', container);
        let moveStrategyTest = container.getDependency('MoveStrategyTest', container);
        let snakeValidatorTest = container.getDependency('SnakeValidatorTest', container);
        let foodGeneratorTest = container.getDependency('FoodGeneratorTest', container);
        let gameOverStrategyTest = container.getDependency('GameOverStrategyTest', container);
        console.log(foodGeneratorTest);
        cellTest.test();
        deckTest.test();
        moveStrategyTest.test();
        snakeValidatorTest.test();
        foodGeneratorTest.test();
        gameOverStrategyTest.test();
    });