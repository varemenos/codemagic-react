import React from 'react';
var EditorSettings = React.createClass({
    render: function () {
        'use strict';

        return (
            <div className="editor-settings">
                <div className="editor-settings-mode">
                    {this.props.mode.toUpperCase()}
                </div>
                <button className="editor-settings-toggle">
                    <i className="fa fa-cog" />
                </button>
                <button className="editor-settings-expand">
                    <i className="fa fa-arrows-alt" />
                </button>
            </div>
        );
    }
});

export default EditorSettings;
