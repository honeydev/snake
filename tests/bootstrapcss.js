define(function() {
    'use strict';

    return function(urls) {

        let createLink = function(url) {
            let link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = url;
            return link;
        }
	   
        for (let i = 0; i < urls.length; i++) {
            let link = createLink(urls[i]);
            document.getElementsByTagName("head")[0].appendChild(link);
        }
    };
});
