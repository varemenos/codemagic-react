/* jsx */
import React from 'react';

import dispatcher from '../../utilities/dispatcher.jsx';
import utils from '../../utilities/utils.jsx';

var EditorSettings = React.createClass({
    animate: function () {
        'use strict';

        var el = this.getDOMNode();

        utils.animationEnd.forEach(function (prefixedAnimationEnd) {
            el.addEventListener(prefixedAnimationEnd, function (e) {
                if (e.animationName === 'editor-settings-slide-in') {
                    el.classList.remove('editor-settings-slide-in');
                    el.classList.remove('disabled');
                } else if (e.animationName === 'editor-settings-slide-out') {
                    el.classList.remove('editor-settings-slide-out');
                    el.classList.add('disabled');
                }
            });
        });
    },
    getClassName: function (enabled) {
        'use strict';

        var className = 'editor-settings';

        if (enabled) {
            className.replace('editor-settings-slide-out', '');
            className += ' editor-settings-slide-in';
        } else {
            className.replace('editor-settings-slide-in', '');
            className += ' editor-settings-slide-out';
        }

        return className;
    },
    getInitialState: function () {
        'use strict';

        return {
            enabled: false
        };
    },
    componentDidMount: function () {
        'use strict';

        this.animate();

        dispatcher.register(function (payload) {
            if (payload.actionType === 'toggle-editor-settings') {
                if (payload.name === this.props.name) {
                    this.setState({
                        enabled: !this.state.enabled
                    });
                }
            }
        }.bind(this));
    },
    componentDidUnmount: function () {
        'use strict';

        utils.animationEnd.forEach(function (prefixedAnimationEnd) {
            el.removeEventListener(prefixedAnimationEnd);
        });
    },
    render: function () {
        'use strict';

        return (
            <div className={this.getClassName(this.state.enabled)}>
            </div>
        );
    }
});

export default EditorSettings;
