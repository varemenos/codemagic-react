import React from 'react';
import AceEditor from './ace-editor.jsx';

var Editor = React.createClass({
    render: function () {
        'use strict';

        return (
            <div className="editor-wrap">
                <AceEditor
                    mode={this.props.mode}
                    theme={this.props.theme}
                />
            </div>
        );
    }
});

export default Editor;
