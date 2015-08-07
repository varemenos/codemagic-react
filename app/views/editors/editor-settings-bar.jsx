/* jsx */
import React from 'react';

import dispatcher from '../../utilities/dispatcher.jsx';

var EditorSettingsBar = React.createClass({
    toggleEditorSettings: function (e) {
        dispatcher.dispatch({
            actionType: 'toggle-editor-settings',
            name: this.props.name
        });
    },
    toggleEditorFullscreen: function (e) {
        dispatcher.dispatch({
            actionType: 'toggle-editor-fullscreen',
            name: this.props.name
        });
    },
    render: function () {
        return 0,
            <div className='editor-settings-bar'>
                <div className='editor-settings-bar-mode'>
                    {this.props.mode.toUpperCase()}
                </div>
                <button
                    className='editor-settings-bar-toggle'
                    data-mode={this.props.name}
                    onClick={this.toggleEditorSettings}
                >
                    <i className='fa fa-cog' />
                </button>
                <button
                    className='editor-settings-bar-expand'
                    onClick={this.toggleEditorFullscreen}
                >
                    <i className='fa fa-arrows-alt' />
                </button>
            </div>;
    }
});

export default EditorSettingsBar;
