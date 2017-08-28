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

require(['../tests/bootstrapcss'], function(bootstrapcss) {
    bootstrapcss(['../node_modules/mocha/mocha.css']);
});

    require([
    'mocha',
    'chai',
    'app/Models/Cell',
    'app/Models/Deck',
    'app/config',
    'app/Models/MoveStrategy',
    'tests/CellTest', 
    'tests/DeckTest',
    'tests/MoveStrategyTest'
    ],
    function(
        mocha, 
        chai, 
        Cell, 
        Deck, 
        config, 
        MoveStrategy, 
        CellTest, 
        DeckTest,
        MoveStrategyTest
        ) {
    let cellTest = new CellTest(mocha, chai, new Cell, config);
    let deckTest = new DeckTest(mocha, chai, new Deck(Cell, config), config);
    let moveStrategyTest = new MoveStrategyTest(mocha, chai, new MoveStrategy(), config);
    cellTest.test();
    deckTest.test();
    moveStrategyTest.test();
});