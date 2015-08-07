/* jsx */
import React from 'react';

import Editor from './editor.jsx';

var Editors = React.createClass({
    render: function () {
        var editors = this.props.editors.map(function (editor) {
            return 0,
                <Editor
                    name={editor.name}
                    mode={editor.mode}
                    key={editor.mode}
                    enabled={editor.enabled}
                />;
        });

        return 0,
            <div className='editors'>
                {editors}
            </div>;
    }
});

export default Editors;
