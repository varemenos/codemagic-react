'use strict';

import React from 'react';
import App from './views/app.jsx';
import Toolbar from './views/toolbar/toolbar.jsx';
import toolbarItems from './config/toolbar-items.jsx';

var Codemagic = React.createClass({
    render: function () {
        return (
            <div className="main">
                <Toolbar items={toolbarItems} />
                <App />
            </div>
        );
    }
})

React.render(
    React.createElement(Codemagic, null),
    document.body
);
