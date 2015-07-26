'use strict';

import React from 'react';
import App from './views/app.jsx';

var Codemagic = React.createClass({
    render: function () {
        return (
            <div className="main">
                <App />
            </div>
        );
    }
})

React.render(
    React.createElement(Codemagic, null),
    document.body
);
