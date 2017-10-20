/**
 * @author Lebedev Alexey
 * @license GPL v3.0
 */
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'node_modules',
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
    },
});

require(['app/bootstrapcss'], function(bootstrapcss) {
    //bootstrapcss(['template/style.css']);
});

require([
    'app/Container',
    'app/bootstrapapp',
    'app/Models/Observable',
    'app/Controller',
    'app/Models/BaseModel',
    'app/Models/Timer',
    'app/Models/ScoresCounter',
    'app/Models/Temp',
    'app/Models/Deck', 
    'app/Models/Cell',
    'app/Models/FoodPart',
    'app/Models/FoodGenerator',
    'app/Models/FoodProcessor',
    'app/Models/Snake',
    'app/Models/SnakeCreator',
    'app/Validators/SnakeValidator',
    'app/Validators/CoordinatesValidator',
    'app/Models/SnakePart',
    'app/Models/MainProcessor',
    'app/Models/StepProcessor',
    'app/Models/MoveStrategy',
    'app/Models/GameOver',
    'app/Models/GameOverStrategy',
    'config/config',
    'app/Views/MainView',
    'app/Views/GameDeckCreator',
    'app/Views/CellSetter',
    'app/Views/GameDeckStatmentSetter',
    'app/Views/CellCoordinatesSetter',
    'app/Views/ButtonSetter',
    'app/Views/ModalSetter',
    'app/Views/CountersStatmentSetter',
    'app/Handlers/Handler',
    'jquery',
    'paper'
    ],
    function(
        Container, 
        bootstrapapp,
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
        GameDeckCreator,
        CellSetter,
        GameDeckStatmentSetter,
        CellCoordinatesSetter,
        ButtonSetter,
        ModalSetter,
        CountersStatmentSetter,
        Handler,
        jquery,
        paper
        ) {

    let container = new Container();
    bootstrapapp(
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
        );
    let controller = new Controller(container);
    let handler = new Handler(controller);
});