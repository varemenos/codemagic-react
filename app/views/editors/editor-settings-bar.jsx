/* jsx */
import React from 'react';

import dispatcher from '../../utilities/dispatcher.jsx';

var EditorSettingsBar = React.createClass({
    onClick: function (e) {
        'use strict';

        dispatcher.dispatch({
            actionType: 'toggle-editor-settings',
            name: this.props.name
        });
    },
    render: function () {
        'use strict';

        return (
            <div className='editor-settings-bar'>
                <div className='editor-settings-bar-mode'>
                    {this.props.mode.toUpperCase()}
                </div>
                <button
                    className='editor-settings-bar-toggle'
                    data-mode={this.props.name}
                    onClick={this.onClick}
                >
                    <i className='fa fa-cog' />
                </button>
                <button className='editor-settings-bar-expand'>
                    <i className='fa fa-arrows-alt' />
                </button>
            </div>
        );
    }
});

export default EditorSettingsBar;
