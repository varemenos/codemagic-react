import React from 'react';
import Editors from './editors/editors.jsx';
import Result from './results/results.jsx';
import Toolbar from './toolbar/toolbar.jsx';
import toolbarItems from '../config/toolbar-items.jsx';
import editors from '../config/editors.jsx';

var App = React.createClass({
    render: function () {
        'use strict';

        return (
            <div className="app">
                <Toolbar items={toolbarItems} type="vertical" />
                <Editors editors={editors} />
                <Result />
            </div>
        );
    }
});

export default App;
