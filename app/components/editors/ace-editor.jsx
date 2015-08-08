/* jsx */
import React from 'react';

import ace from 'brace';
import dispatcher from '../../utilities/dispatcher.jsx';
import utils from '../../utilities/utils.jsx';

var AceEditor = React.createClass({
    dispatcherID: false,
    startedTyping: false,
    propTypes: {
        mode: React.PropTypes.string,
        printMargin: React.PropTypes.bool,
        onChange: React.PropTypes.func
    },
    getDefaultProps: function () {
        return {
            printMargin: false
        };
    },
    componentDidMount: function () {
        // themes
        require('brace/theme/tomorrow_night');

        // markup modes
        require('brace/mode/html');
        require('brace/mode/jade');
        require('brace/mode/markdown');

        // styling modes
        require('brace/mode/css');
        require('brace/mode/scss');
        require('brace/mode/less');

        // js modes
        require('brace/mode/javascript');
        require('brace/mode/coffee');

        this.editor = ace.edit(this.props.mode + '-editor');

        this.editor.$blockScrolling = Infinity;
        this.editor.getSession().setMode('ace/mode/' + this.props.mode);
        this.editor.setTheme('ace/theme/tomorrow_night');
        this.editor.setShowPrintMargin(this.props.printMargin);
        this.editor.on('change', this.onChange);

        this.dispatcherID = dispatcher.register(function (payload) {
            if (payload.actionType === 'resize-editor') {
                if (this.editor) {
                    this.editor.resize(true);
                }
            }
        }.bind(this));
    },
    componentDidUnmount: function () {
        dispatcher.unregister(this.dispatcherID);
    },
    onChange: function () {
        if (!this.startedTyping) {
            dispatcher.dispatch({
                actionType: 'started-typing'
            });
            this.startedTyping = true;
        }

        var value = this.editor.getValue();

        utils.renderResult(value);
    },
    render: function () {
        var id = this.props.mode + '-editor';
        var className = this.props.mode + ' editor';

        return 0,
            <div
                className={className}
                id={id}
                onChange={this.onChange}
            />;
    }
});

export default AceEditor;
