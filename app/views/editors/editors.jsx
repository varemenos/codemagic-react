/* jsx */
import React from 'react';

import Editor from './editor.jsx';

var Editors = React.createClass({
    render: function () {
        'use strict';

        var Editors = this.props.editors.map(function (editor) {
            return (
                <Editor
                    name={editor.name}
                    mode={editor.mode}
                    key={editor.mode}
                    enabled={editor.enabled}
                />
            );
        });

        return (
            <div className='editors'>
                {Editors}
            </div>
        );
    }
});

export default Editors;
