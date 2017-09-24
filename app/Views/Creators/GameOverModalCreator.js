define(function() {

    'use strict';

    return class GameOverModalCreator {

        createGOContainer(modalWindows) {
            modalWindows.gameOverContainer = $('<dialog>').attr({
                class: "modal fade bs-example-modal-sm",
                id: "gameOverModal",
                tabindex: "-1",
                role: "dialog",
                'aria-labelledby': "mySmallModalLabel",
                'aria-hidden': "true"
            });

            $(modalWindows.gameOverContainer).css('background-color', 'transparent');
        };

        createGOWrap(modalWindows) {
            modalWindows.gameOverWrap = $('<div>').attr({
                class: "modal-dialog modal-sm"
            });
        };

        createGOContent(modalWindows) {
            modalWindows.GOContent = $('<article>').attr({
                class: "modal-content"
            });
            modalWindows.GOContent.html(`
                <h2>You loss</h2>
                <p>In this game we can't win, but you may try again!</p>
                `);
        };

    };
});