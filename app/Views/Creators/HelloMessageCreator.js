(define(function() {

    'use strict';

    return class HelloMessageCreator {

        createHelloMessageContainer(helloMessage) {
            helloMessage.helloMessageContainer = $('<div>').attr({
                class: "container-fluid helloMessage"
            }).css({
                display: "none"
            });
        };

        createLogoSection(helloMessage) {

            helloMessage.LogoSection = $('<section>').attr({
                class: "row"
            });

            helloMessage.snakeLogoImage = $('<img>').attr({
                src: "template/img/snake.png",
                class: "col-xs-offset-3 col-xs-6"
            });
        };

        createH1ButtonSection(helloMessage) {

            helloMessage.h1ButtonSection = $('<section>').attr({
                class: "row"
            });

            helloMessage.mainHeader = $('<h1>').text('This is simple snake game');                
            
            helloMessage.buttonContainer = $('<div>').attr({
                class: "col-xs-10 button"
            });

            helloMessage.button = $('<button>').attr({
                class: "col-xs-offset-4 col-xs-7 btn btn-lg",
                id: "lpButton"
            }).text('Let\'s Play!');        
                    
        };
    };
}));