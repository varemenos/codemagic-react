/* jsx */
import React from 'react';

import Editors from './editors/editors.jsx';
import Result from './results/results.jsx';
import editors from '../config/editors.jsx';

var App = React.createClass({
    render: function () {
        return 0,
            <div className='app'>
                <Editors editors={editors} />
                <Result />
            </div>;
    }
});

export default App;
