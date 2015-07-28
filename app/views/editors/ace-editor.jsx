import React from 'react';
import ace from 'brace';

var AceEditor = React.createClass({
    propTypes: {
        mode: React.PropTypes.string,
        printMargin: React.PropTypes.bool,
        onChange: React.PropTypes.func
    },
    getDefaultProps: function () {
        'use strict';

        return {
            printMargin: false
        };
    },
    componentDidMount: function () {
        'use strict';

        // themes
        require('brace/theme/tomorrow_night');

        // markup modes
        require('brace/mode/html');
        require('brace/mode/jade');
        require('brace/mode/markdown');

        // styling modes
        require('brace/mode/css');
        require('brace/mode/scss');
        require('brace/mode/less');
        // js modes
        require('brace/mode/javascript');
        require('brace/mode/coffee');

        this.editor = ace.edit(this.props.mode + '-editor');

        this.editor.$blockScrolling = Infinity;
        this.editor.getSession().setMode('ace/mode/' + this.props.mode);
        this.editor.setTheme('ace/theme/tomorrow_night');
        this.editor.setShowPrintMargin(this.props.printMargin);
        this.editor.on('change', this.onChange);
    },
    onChange: function () {
        'use strict';

        var value = this.editor.getValue();
    },
    render: function () {
        'use strict';

        var id = this.props.mode + '-editor';
        var className = this.props.mode + ' editor';

        return (
            <div
                className={className}
                id={id}
                onChange={this.onChange}
            />
        );
    }
});

export default AceEditor;
