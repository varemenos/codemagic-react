/* jsx */
import React from 'react';

import AceEditor from './ace-editor.jsx';
import EditorSettings from './editor-settings.jsx';
import EditorSettingsBar from './editor-settings-bar.jsx';
import dispatcher from '../../utilities/dispatcher.jsx';
import utils from '../../utilities/utils.jsx';

var Editor = React.createClass({
    dispatcherID: false,
    animate: function () {
        var el = this.getDOMNode();

        utils.animationEnd.forEach(function (prefixedAnimationEnd) {
            el.addEventListener(prefixedAnimationEnd, function (e) {
                if (e.animationName === 'editor-slide-in') {
                    el.classList.remove('editor-slide-in');
                    el.classList.remove('disabled');
                } else if (e.animationName === 'editor-slide-out') {
                    el.classList.remove('editor-slide-out');
                    el.classList.add('disabled');
                }
            });
        });
    },
    componentDidMount: function () {
        this.animate();

        this.dispatcherID = dispatcher.register(function (payload) {
            if (payload.actionType === 'enable-editor') {
                if (payload.name === this.props.name) {
                    this.state.enabled = payload.enabled;
                    this.setState({
                        className: this.getClassName(payload.enabled)
                    });
                }
            }
        }.bind(this));

        this.dispatcherID = dispatcher.register(function (payload) {
            if (payload.actionType === 'toggle-editor-fullscreen') {
                if (payload.name === this.props.name) {
                    utils.toggleFullscreenMode(this.getDOMNode());
                }
            }
        }.bind(this));
    },
    componentDidUnmount: function () {
        var el = this.getDOMNode();

        utils.animationEnd.forEach(function (prefixedAnimationEnd) {
            el.removeEventListener(prefixedAnimationEnd);
        });

        dispatcher.unregister(this.dispatcherID);
    },
    getClassName: function (enabled) {
        var className = 'editor-container';

        if (enabled) {
            className.replace('editor-slide-out', '');
            className += ' editor-slide-in';
        } else {
            className.replace('editor-slide-in', '');
            className += ' editor-slide-out';
        }

        return className;
    },
    getInitialState: function () {
        return {
            mode: this.props.mode,
            enabled: this.props.enabled,
            className: this.getClassName(this.props.enabled)
        };
    },
    render: function () {
        return 0,
            <div className={this.state.className}>
                <EditorSettingsBar mode={this.state.mode} name={this.props.name} />
                <EditorSettings name={this.props.name} />
                <AceEditor
                    mode={this.state.mode}
                    enabled={this.state.enabled}
                />
            </div>;
    }
});

export default Editor;
