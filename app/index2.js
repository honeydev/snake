
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
        config: '..'
    },
    shim: {
        mocha: {
            exports: "mocha",
        },
        chai: {
            exports: "chai"
        },
        'bootstrap': ['jquery']
    }
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
    'config/config',
    'app/Views/PageView',
    'app/Views/HelloMessageCreator',
    'app/Views/HelloMessageDomSetter',
    'app/Views/MainPageCreator',
    'app/Views/MainPageDomSetter',
    'app/Views/HelloMessageStatmentSetter',
    'app/Views/MainPageStatmentSetter',
    'app/Views/MainPageStatmentSetterMessageProcessor',
    'app/Views/MainPageConcretElementsSetter',
    'app/Views/CellColorizer',
    'app/Handlers/Handler',
    'jquery'
    ],
    function(
        Container, 
        bootstrapapp,
        Observable,
        Controller,
        BaseModel,
        Timer,
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
        config,
        PageView,
        StatmentSetter,
        HelloMessageCreator,
        HelloMessageDomSetter,
        MainPageCreator,
        MainPageDomSetter,
        HelloMessageStatmentSetter,
        MainPageStatmentSetter,
        MainPageConcretElementSetter,
        CellColorizer,
        Handler,
        jquery
        ) {

    let container = new Container();

    bootstrapapp(
        container, 
        Observable,
        Controller,
        BaseModel,
        Timer,
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
        config,
        PageView,
        StatmentSetter,
        HelloMessageCreator,
        HelloMessageDomSetter,
        MainPageCreator,
        MainPageDomSetter,
        HelloMessageStatmentSetter,
        MainPageStatmentSetter,
        MainPageConcretElementSetter,
        CellColorizer,
        Handler
        );

    let controller = new Controller(container);
    let handler = new Handler(controller);
});