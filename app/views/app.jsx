import React from 'react';
import Editors from './editors/editors.jsx';
import Result from './results/results.jsx';
import Toolbar from './toolbar/toolbar.jsx';

var App = React.createClass({
    render: function () {
        'use strict';

        var editors = [
            'html',
            'css',
            'javascript'
        ];

        var toolbarItems = [
            {
                icon: 'file',
                direction: 'right',
                hint: 'Are you sure you are?'
            }, {
                icon: 'file',
                direction: 'right',
                hint: 'Are you sure you are?'
            }, {
                icon: 'file',
                direction: 'right',
                hint: 'Are you sure you are?'
            }
        ];

        return (
            <div className="app">
                <Toolbar items={toolbarItems} />
                <Editors editors={editors} />
                <Result />
            </div>
        );
    }
});

export default App;
