/* jsx */
import React from 'react';

import App from './views/app.jsx';
import Toolbar from './views/toolbar/toolbar.jsx';
import toolbarItems from './config/toolbar-items.jsx';

var Codemagic = React.createClass({
    getInitialState: function () {
        return {
            toolbarItems: toolbarItems
        };
    },
    render: function () {
        return 0,
            <div className='main'>
                <Toolbar items={this.state.toolbarItems} />
                <App />
            </div>;
    }
});

React.render(
    React.createElement(Codemagic, null),
    document.body
);
