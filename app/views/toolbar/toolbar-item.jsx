import React from 'react';
import ToolbarItemIcon from './toolbar-item-icon.jsx';

var ToolbarItem = React.createClass({
    render: function () {
        'use strict';

        var className = 'toolbar-item';

        if (this.props.type === 'seperator') {
            className += ' toolbar-item-seperator';
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
