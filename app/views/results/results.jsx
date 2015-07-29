/* jsx */
import React from 'react';

import Frame from 'react-frame-component';
import dispatcher from '../../utilities/dispatcher.jsx';

var Result = React.createClass({
    startedTyping: false,
    getInitialState: function () {
        'use strict';

        return {
            cover: {
                className: this.getCoverClassName(this.startedTyping)
            },
            dispatcherID: false
        };
    },
    getCoverClassName: function (startedTyping) {
        'use strict';

        var className = 'cover';

        if (startedTyping) {
            className += ' disabled';
        }

        return className;
    },
    componentDidMount: function () {
        'use strict';

        this.state.dispatcherID = dispatcher.register(function (payload) {
            if (payload.actionType === 'started-typing') {
                this.startedTyping = true;
                this.setState({
                    cover: {
                        className: this.getCoverClassName(this.startedTyping)
                    }
                });
            }
        }.bind(this));
    },
    componentDidUnmount: function () {
        'use strict';

        dispatcher.unregister(this.state.dispatcherID);
    },
    render: function () {
        'use strict';

        return (
            <div className='result'>
                <div className={this.state.cover.className}>
                    <p>
                        Press  <i className='fa fa-play' /> or hit &lt;Ctrl + enter&gt; to render the result
                        <br />
                        Or press <i className='fa fa-refresh' /> to enable auto-refresh
                    </p>
                </div>
                <Frame></Frame>
            </div>
        );
    }
});

export default Result;
