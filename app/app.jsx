/* jsx */
import React from 'react';

import App from './components/app.jsx';
import Toolbar from './components/toolbar/toolbar.jsx';

import {toolbarItems} from './config/index.jsx';

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
