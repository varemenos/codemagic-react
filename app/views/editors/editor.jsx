import React from 'react';
import AceEditor from './ace-editor.jsx';

var Editor = React.createClass({
    render: function () {
        'use strict';

        var className = 'editor-wrap';
        if (this.props.enabled) {
            className += ' enabled';
        }

        return (
            <div className={className}>
                <AceEditor
                    mode={this.props.mode}
                    theme={this.props.theme}
                    enabled={this.props.enabled}
                />
            </div>
        );
    }
});

export default Editor;
