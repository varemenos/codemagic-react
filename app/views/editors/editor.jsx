import React from 'react';
import AceEditor from './ace-editor.jsx';

var Editor = React.createClass({
    render: function () {
        'use strict';

        return (
            <div className="editor-wrap">
                <AceEditor name={this.props.name} mode={this.props.mode} />
            </div>
        );
    }
});

export default Editor;
