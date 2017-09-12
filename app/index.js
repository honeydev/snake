
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
    'app/Models/Observable',
    'app/Controller',
    'app/Models/Timer',
    'app/Models/Deck', 
    'app/Models/Cell',
    'app/Models/Snake',
    'app/Validators/SnakeValidator',
    'app/Models/SnakePart',
    'app/Models/BaseModel',
    'app/Models/MainProcessor',
    'app/Models/MoveStrategy',
    'config/config',
    'jquery',
    'bootstrap',
    'app/Views/PageView',
    'app/Views/StatmentSetter',
    'app/Views/HelloMessageCreator',
    'app/Views/HelloMessageDomSetter',
    'app/Views/MainPageCreator',
    'app/Views/MainPageDomSetter',
    'app/Views/HelloMessageStatmentSetter',
    'app/Views/MainPageStatmentSetter',
    'app/Views/MainPageConcretElementsSetter',
    'app/Views/CellColorizer',
    'app/Handlers/Handler'
    ], function(
        Observable,
        Controller,
        Timer,
        Deck, 
        Cell, 
        Snake,
        SnakeValidator, 
        SnakePart, 
        BaseModel, 
        MainProcessor,
        MoveStrategy,
        config,
        jquery,
        bootstrap,
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
        ) {

        let deck = new Deck(Cell, config);

        let mainProcessorObservable = new Observable();

        let snake = new Snake(new SnakeValidator);

        let mainProcessor = new MainProcessor(
            mainProcessorObservable,
            new Cell(),
            snake,
            SnakePart,
            deck,
            new MoveStrategy(config),
            Timer
            );

        let pageView = new PageView(
            config,
            new HelloMessageCreator(),
            new HelloMessageDomSetter(),
            new MainPageCreator(),
            new MainPageDomSetter()
            );

        let mainPageStatmentSetter = new MainPageStatmentSetter(
            CellColorizer,
            pageView,
            MainPageConcretElementSetter
            );

        mainProcessorObservable.addSubscriber(mainPageStatmentSetter);

        let controller = new Controller(
            mainProcessor,
            mainPageStatmentSetter,
            snake
            );

        let handler = new Handler(controller, pageView);


        // mainProcessor.doStep('left');
        // mainProcessor.doStep('up');
});
