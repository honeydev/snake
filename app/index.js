
const MOD = 'production'; // testing or production

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
        config: '..'
    },
    shim: {
        mocha: {
            exports: "mocha",
        },
        chai: {
            exports: "chai"
        }
    }
});

require(['../app/bootstrapcss'], function(bootstrapcss) {
    bootstrapcss(['node_modules/bootstrap/dist/css/bootstrap.css']);
});

require([
    'app/Models/Deck', 
    'app/Models/Cell',
    'app/Models/Snake',
    'app/Models/SnakePart',
    'app/Models/BaseModel',
    'app/Models/MainProcessor',
    'app/Models/MoveStrategy',
    'config/config',
    'jquery',
    'app/Views/PageView'
    ], function(
        Deck, 
        Cell, 
        Snake, 
        SnakePart, 
        BaseModel, 
        MainProcessor,
        MoveStrategy,
        config,
        jquery,
        PageView
        ) {
        let deck = new Deck(Cell, config);
        let mainProcessor = new MainProcessor(
        new Cell(),
        new Snake(),
        SnakePart,
        deck,
        new MoveStrategy()
        );
        new PageView($);
});

if (MOD === 'testing') {

    require(['../tests/bootstrapcss'], function(bootstrapcss) {
         bootstrapcss(['node_modules/mocha/mocha.css']);
    });

    require([
    'mocha',
    'chai',
    'app/Models/Cell',
    'app/Models/Deck',
    'app/config',
    'app/Models/MoveStrategy',
    'tests/src/CellTest.js', 
    'tests/src/DeckTest.js',
    'tests/src/MoveStrategyTest.js'
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
}
