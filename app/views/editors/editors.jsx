import React from 'react';
import Editor from './editor.jsx';

var Editors = React.createClass({
    componentDidMount: function () {
        'use strict';

        this.getDOMNode().addEventListener('transitionend', this.transitionEnd);
    },
    transitionEnd: function (e) {
        'use strict';

        // handle transition when .inactive class is added/removed to this DOM node

        var el = this.getDOMNode();
        console.log(e, el);
    },
    render: function () {
        'use strict';

        var Editors = this.props.editors.map(function (editor) {
            return (
                <Editor mode={editor} key={editor} />
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
