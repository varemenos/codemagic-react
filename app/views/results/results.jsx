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
                <div className="cover">
                    <p>
                        Press  <i className="fa fa-play" /> or hit &lt;Ctrl + enter&gt; to render the result
                        <br />
                        Or press <i className="fa fa-refresh" /> to enable auto-refresh
                    </p>
                </div>
                <Frame></Frame>
            </div>
        );
    }
});

export default Result;
