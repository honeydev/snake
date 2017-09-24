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
        bootstrap: 'bootstrap/dist/js/bootstrap',
        mocha: 'mocha/mocha',
        chai: 'chai/chai',
        config: '..',
        bootstrap: 'bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        mocha: {
            exports: "mocha",
        },
        chai: {
            exports: "chai"
        },
        bootstrap: {
            deps: ['jquery']
        }
    },
    // paths: {
    //     
    // }
});

require(['../app/bootstrapcss'], function(bootstrapcss) {
    bootstrapcss(['node_modules/bootstrap/dist/css/bootstrap.css', 'template/style.css']);
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
    'app/Validators/SnakeValidator',
    'app/Validators/CoordinatesValidator',
    'app/Models/SnakePart',
    'app/Models/MainProcessor',
    'app/Models/StepProcessor',
    'app/Models/MoveStrategy',
    'app/Models/GameOver',
    'app/Models/GameOverStrategy',
    'config/config',
    'app/Views/PageView',
    'app/Views/Creators/HelloMessageCreator',
    'app/Views/Creators/GameOverModalCreator',
    'app/Views/Setters/HelloMessageDomSetter',
    'app/Views/Creators/MainPageCreator',
    'app/Views/Setters/MainPageDomSetter',
    'app/Views/Setters/HelloMessageStatmentSetter',
    'app/Views/Setters/MainPageStatmentSetter',
    'app/Views/MessageProcessors/MainPageStatmentSetterMessageProcessor',
    'app/Views/Setters/MainPageConcretElementsSetter',
    'app/Views/Customizators/CellColorizer',
    'app/Views/Customizators/CellResizer',
    'app/Views/Customizators/ButtonResizer',
    'app/Views/Customizators/ButtonCorrector',
    'app/Views/Customizators/PageCorrector',
    'app/Views/DeviceDetector',
    'app/Handlers/Handler',
    'jquery',
    'bootstrap'
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
        SnakeValidator,
        CoordinatesValidator,
        SnakePart, 
        MainProcessor,
        StepProcessor,
        MoveStrategy,
        GameOver,
        GameOverStrategy,
        config,
        PageView,
        StatmentSetter,
        HelloMessageCreator,
        GameOverModalCreator,
        HelloMessageDomSetter,
        MainPageCreator,
        MainPageDomSetter,
        HelloMessageStatmentSetter,
        MainPageStatmentSetter,
        MainPageConcretElementSetter,
        CellColorizer,
        CellResizer,
        ButtonResizer,
        ButtonCorrector,
        PageCorrector,
        DeviceDetector,
        Handler,
        jquery,
        bootstrap
        ) {

    let container = new Container();
    console.log(bootstrap);
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
        SnakeValidator,
        CoordinatesValidator,
        SnakePart, 
        MainProcessor,
        StepProcessor,
        MoveStrategy,
        GameOver,
        GameOverStrategy,
        config,
        PageView,
        StatmentSetter,
        HelloMessageCreator,
        GameOverModalCreator,
        HelloMessageDomSetter,
        MainPageCreator,
        MainPageDomSetter,
        HelloMessageStatmentSetter,
        MainPageStatmentSetter,
        MainPageConcretElementSetter,
        CellColorizer,
        CellResizer,
        ButtonResizer,
        ButtonCorrector,
        PageCorrector,
        DeviceDetector,
        Handler
        );

    let controller = new Controller(container);
    let handler = new Handler(controller);
});