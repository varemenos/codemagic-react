/* jsx */
import React from 'react';

import Frame from 'react-frame-component';
import dispatcher from '../../utilities/dispatcher.jsx';
import utils from '../../utilities/utils.jsx';

var Result = React.createClass({
    startedTyping: false,
    getInitialState: function () {
        return {
            cover: {
                className: this.getCoverClassName(this.startedTyping)
            },
            dispatcherID: false
        };
    },
    getCoverClassName: function (startedTyping) {
        var className = 'cover';

        if (startedTyping) {
            className += ' disabled';
        }

        return className;
    },
    componentDidMount: function () {
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

        this.state.dispatcherID = dispatcher.register(function (payload) {
            if (payload.actionType === 'toggle-result-fullscreen') {
                utils.toggleFullscreenMode(this.getDOMNode().querySelector('iframe'));
            }
        }.bind(this));
    },
    componentDidUnmount: function () {
        dispatcher.unregister(this.state.dispatcherID);
    },
    render: function () {
        return 0,
            <div className='result'>
                <div className={this.state.cover.className}>
                    <p>
                        Press  <i className='fa fa-play' /> or hit &lt;Ctrl + enter&gt; to render the result
                        <br />
                        Or press <i className='fa fa-refresh' /> to enable auto-refresh
                    </p>
                </div>
                <Frame></Frame>
            </div>;
    }
});

export default Result;
