import React from 'react';
import ToolbarItemIcon from './toolbar-item-icon.jsx';

var ToolbarItem = React.createClass({
    render: function () {
        'use strict';

        var className = 'toolbar-item hint--' + this.props.direction;

        return (
            <button className={className} data-hint={this.props.hint}>
                <ToolbarItemIcon icon={this.props.icon} />
            </button>
        );
    }
});

export default ToolbarItem;
