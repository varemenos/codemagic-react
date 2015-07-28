import React from 'react';

import AceEditor from './ace-editor.jsx';
import EditorSettings from './editor-settings.jsx';
import dispatcher from '../../utilities/dispatcher.jsx';

var Editor = React.createClass({
    dispatcherID: false,
    componentDidMount: function () {
        'use strict';

        this.dispatcherID = dispatcher.register(function (payload) {
            if (payload.actionType === 'enable-editor') {
                if (payload.editorName === this.props.name) {
                    this.state.enabled = payload.enabled;
                    this.setState({
                        className: this.getClassName(payload.enabled)
                    });
                }
            }
        }.bind(this));
    },
    componentDidUnmount: function () {
        'use strict';

        dispatcher.unregister(this.dispatcherID);
    },
    getClassName: function (enabled) {
        'use strict';

        var className = 'editor-container';

        if (enabled) {
            className += ' enabled';
        }

        return className;
    },
    getInitialState: function () {
        'use strict';

        return {
            mode: this.props.mode,
            enabled: this.props.enabled,
            className: this.getClassName(this.props.enabled)
        };
    },
    render: function () {
        'use strict';

        return (
            <div className={this.state.className}>
                <EditorSettings mode={this.state.mode} />
                <AceEditor
                    mode={this.state.mode}
                    enabled={this.state.enabled}
                />
            </div>
        );
    }
});

export default Editor;
