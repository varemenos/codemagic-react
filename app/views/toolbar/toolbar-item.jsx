import React from 'react';

import ToolbarItemIcon from './toolbar-item-icon.jsx';
import dispatcher from '../../utilities/dispatcher.jsx';

var ToolbarItem = React.createClass({
    onClick: function (e) {
        'use strict';

        if (['markup', 'style', 'script'].filter(function (name) {
            return name === this.props.name
        }.bind(this)).length) {
            this.setState({
                toggle: !this.state.toggle,
                className: this.getClassName({
                    toggle: !this.state.toggle,
                    type: this.props.type,
                    brand: this.props.brand
                })
            });

            dispatcher.dispatch({
                actionType: 'enable-editor',
                editorName: this.props.name,
                enabled: this.state.toggle
            });
        }
    },
    componentDidMount: function () {
        'use strict';

        this.getDOMNode().addEventListener('click', this.onClick);
    },
    getInitialState: function () {
        'use strict';

        return {
            toggle: this.props.toggle,
            className: this.getClassName({
                toggle: this.props.toggle,
                type: this.props.type,
                brand: this.props.brand
            })
        };
    },
    getClassName: function (attrs) {
        'use strict';

        var className = 'toolbar-item';

        if (typeof attrs.toggle !== 'undefined') {
            className += ' toggle';

            if (attrs.toggle) {
                className += ' active';
            }
        }

        className += [
            'expand',
            'separator',
            'space'
        ].map(function (prop) {
            if (attrs.type === prop) {
                return ' toolbar-item-' + prop;
            }
        }.bind(this)).join(' ');

        if (attrs.brand) {
            className += ' toolbar-item-brand';
        }

        return className;
    },
    render: function () {
        'use strict';

        var ToolbarContent;

        if (this.props.type === 'icon') {
            ToolbarContent = <ToolbarItemIcon icon={this.props.icon} />;
        } else if (this.props.type === 'text') {
            ToolbarContent = this.props.text;
        }

        return (
            <button className={this.state.className}>
                {ToolbarContent}
            </button>
        );
    }
});

export default ToolbarItem;
