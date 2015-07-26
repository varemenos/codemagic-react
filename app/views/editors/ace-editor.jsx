import React from 'react';
import ace from 'brace';

var AceEditor = React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        mode: React.PropTypes.string,
        onChange: React.PropTypes.func
    },
    getDefaultProps: function () {
        'use strict';

        return {};
    },
    componentDidMount: function () {
        'use strict';

        require('brace/theme/cobalt');
        require('brace/mode/html');
        require('brace/mode/css');
        require('brace/mode/javascript');

        this.iframe = document.querySelector('iframe');

        this.editor = ace.edit(this.props.name + '-editor');

        this.editor.$blockScrolling = Infinity;
        this.editor.getSession().setMode('ace/mode/' + this.props.mode);
        this.editor.setTheme('ace/theme/cobalt');
        this.editor.on('change', this.onChange);
    },
    onChange: function () {
        'use strict';

        var value = this.editor.getValue();

        if (this.props.onChange) {
            this.props.onChange(value);
        }

        var iframeDocument = this.iframe.contentDocument;
        iframeDocument.open();
        iframeDocument.write(value);
        iframeDocument.close();
    },
    render: function () {
        'use strict';

        var id = this.props.name + '-editor';
        var className = this.props.name + ' editor';

        return (
            <div className={className} id={id} onChange={this.onChange}></div>
        );
    }
});

export default AceEditor;
