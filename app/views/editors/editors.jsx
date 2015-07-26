import React from 'react';
import Editor from './editor.jsx';

var Editors = React.createClass({
    getInitialState: function () {
        'use strict';

        return {
            editors: [
                'html',
                'css',
                'javascript'
            ]
        };
    },
    componentDidMount: function () {
        'use strict';

        this.getDOMNode().addEventListener('transitionend', this.transitionEnd);
    },
    transitionEnd: function () {
        'use strict';

        var el = this.getDOMNode();
    },
    render: function () {
        'use strict';

        var Editors = this.props.editors.map(function (editor) {
            return (
                <Editor name={editor} mode={editor} key={editor} />
            );
        });

        return (
            <div className="editors">
                {Editors}
            </div>
        );
    }
});

export default Editors;
