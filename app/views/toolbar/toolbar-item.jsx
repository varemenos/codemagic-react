import React from 'react';
import ToolbarItemIcon from './toolbar-item-icon.jsx';

var ToolbarItem = React.createClass({
    render: function () {
        'use strict';

        var className = 'toolbar-item hint--' + this.props.direction;

        var ToolbarContent;

        if (this.props.icon) {
            ToolbarContent = <ToolbarItemIcon icon={this.props.icon} />;
        } else {
            ToolbarContent = this.props.text;
        }

        return (
            <button className={className} data-hint={this.props.hint}>
                {ToolbarContent}
            </button>
        );
    }
});

export default ToolbarItem;
