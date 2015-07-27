import React from 'react';
import ToolbarItemIcon from './toolbar-item-icon.jsx';

var ToolbarItem = React.createClass({
    render: function () {
        'use strict';

        var className = 'toolbar-item';

        if (typeof this.props.toggle !== 'undefined') {
            className += ' toggle';

            if (this.props.toggle) {
                className += ' active';
            }
        }

        className += [
            'expand',
            'separator',
            'space'
        ].map(function (type) {
            if (this.props.type === type) {
                return ' toolbar-item-' + type;
            }
        }.bind(this)).join(' ');

        if (this.props.brand) {
            className += ' toolbar-item-brand';
        }

        var ToolbarContent;

        if (this.props.type === 'icon') {
            ToolbarContent = <ToolbarItemIcon icon={this.props.icon} />;
        } else if (this.props.type === 'text') {
            ToolbarContent = this.props.text;
        }

        return (
            <button className={className}>
                {ToolbarContent}
            </button>
        );
    }
});

export default ToolbarItem;
