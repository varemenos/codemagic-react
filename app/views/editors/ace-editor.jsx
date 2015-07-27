import React from 'react';
import ace from 'brace';

var AceEditor = React.createClass({
    propTypes: {
        mode: React.PropTypes.string,
        theme: React.PropTypes.string,
        printMargin: React.PropTypes.bool,
        onChange: React.PropTypes.func
    },
    getDefaultProps: function () {
        'use strict';

        return {
            printMargin: false,
            theme: 'tomorrow_night'
        };
    },
    componentDidMount: function () {
        'use strict';

        // themes
        require('brace/theme/solarized_dark');
        require('brace/theme/tomorrow');
        require('brace/theme/cobalt');
        require('brace/theme/solarized_light');
        require('brace/theme/twilight');
        require('brace/theme/github');
        require('brace/theme/kuroir');
        require('brace/theme/monokai');
        require('brace/theme/clouds');
        require('brace/theme/dawn');
        require('brace/theme/idle_fingers');
        require('brace/theme/merbivore');
        require('brace/theme/pastel_on_dark');
        require('brace/theme/textmate');
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
        this.editor.setTheme('ace/theme/' + this.props.theme);
        this.editor.setShowPrintMargin(this.props.printMargin);
        this.editor.on('change', this.onChange);
    },
    onChange: function () {
        'use strict';

        var value = this.editor.getValue();

        if (this.props.onChange) {
            this.props.onChange(value);
        }

        var iframeDocument = document.querySelector('.result iframe').contentDocument;
        iframeDocument.open();
        iframeDocument.write(value);
        iframeDocument.close();
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
