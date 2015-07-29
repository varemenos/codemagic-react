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
    ]
};

export default utils;
