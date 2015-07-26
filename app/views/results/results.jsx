import React from 'react';
import Frame from 'react-frame-component';

var Result = React.createClass({
    getInitialState: function () {
        'use strict';

        return {
            content: {
                html: '',
                css: '',
                js: ''
            }
        };
    },
    render: function () {
        'use strict';

        return (
            <div className="result">
                <Frame></Frame>
            </div>
        );
    }
});

export default Result;
