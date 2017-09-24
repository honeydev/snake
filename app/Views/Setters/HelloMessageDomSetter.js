/** @class set hello message dom elements on page */
(define(function() {

    'use strict';

    return class HelloMessageDomSetter {

    	setHelloMessageContainer(helloMessage, previousDomObject) {
    		$(helloMessage.helloMessageContainer).appendTo(previousDomObject);
    	};

    	setLogoSection(helloMessage, previousDomObject) {
    		$(helloMessage.LogoSection).appendTo(helloMessage.helloMessageContainer);
			$(helloMessage.snakeLogoImage).appendTo(helloMessage.LogoSection);
    	};

    	setH1ButtonSection(helloMessage, previousDomObject) {
    		$(helloMessage.h1ButtonSection).appendTo(helloMessage.helloMessageContainer);
            $(helloMessage.mainHeader).appendTo(helloMessage.h1ButtonSection);
    		$(helloMessage.buttonContainer).appendTo(helloMessage.h1ButtonSection);
            $(helloMessage.button).appendTo(helloMessage.buttonContainer);
    	};
    };
}));