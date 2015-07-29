var utils = {
    renderResult: function (value) {
        'use strict';

        var iframeDocument = document.querySelector('.result iframe').contentDocument;

        // construct proper dom with the value

        iframeDocument.open();
        iframeDocument.write(value);
        iframeDocument.close();
    },
    animationEnd: [
        'animationend',
        'webkitAnimationEnd',
        'MSAnimationEnd',
        'oAnimationEnd'
    ],
    toggleFullscreenMode: function (target) {
        'use strict';

        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (target.requestFullscreen) {
                target.requestFullscreen();
            } else if (target.mozRequestFullScreen) {
                target.mozRequestFullScreen();
            } else if (target.msRequestFullScreen) {
                target.msRequestFullScreen();
            } else if (target.webkitRequestFullscreen) {
                target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msCancelFullScreen) {
                document.msCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }
};

export default utils;
