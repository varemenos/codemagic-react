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
                text: 'HTML',
                direction: 'right',
                hint: 'HTML'
            },
            {
                icon: 'file',
                direction: 'right',
                hint: 'New file'
            }, {
                icon: 'folder',
                direction: 'right',
                hint: 'New folder'
            }, {
                icon: 'cog',
                direction: 'right',
                hint: 'Settings'
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
